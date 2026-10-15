# This is tracing logic, not a Python security sandbox. Isolation is the opaque
# browser frame + disposable worker. User code never runs in the application.
import sys as _sys, io as _io, json as _json, types as _types
from collections import deque as _deque

def _cairn_run(source, stdin):
    events = []
    budget = 0
    output = _io.StringIO()
    error = None
    truncated = False
    class TraceLimit(Exception):
        pass
    class Output(_io.StringIO):
        def write(self, text):
            if self.tell() + len(text) > 10000:
                raise TraceLimit('Output limit reached (10,000 characters).')
            return super().write(text)
    output = Output()
    def snapshot(frame, event, arg):
        nonlocal budget
        seen = set()
        nodes = 0
        def value(v, depth=0):
            nonlocal nodes
            nodes += 1
            if nodes > 180 or depth > 4:
                return {'kind': 'limit', 'text': 'Display limit'}
            t = type(v)
            if v is None or t in (bool, int, float):
                if t is int and v.bit_length() > 256:
                    return {'kind': 'limit', 'text': 'Large integer'}
                if t is float and (v != v or abs(v) == float('inf')):
                    return str(v)
                return v
            if t is str:
                return v[:250] + ('…' if len(v) > 250 else '')
            if t in (_types.ModuleType, _types.FunctionType, type, _types.BuiltinFunctionType):
                return {'kind': 'opaque', 'text': t.__name__}
            ident = str(id(v))
            if ident in seen:
                return {'kind': 'ref', 'id': ident}
            seen.add(ident)
            if t in (list, tuple, set, frozenset, _deque):
                items = []
                for i, item in enumerate(v):
                    if i == 24: break
                    items.append(value(item, depth + 1))
                return {'kind': t.__name__, 'id': ident, 'items': items, 'size': len(v)}
            if t is dict:
                pairs = []
                for i, (k, val) in enumerate(v.items()):
                    if i == 24: break
                    pairs.append([value(k, depth + 1), value(val, depth + 1)])
                return {'kind': 'dict', 'id': ident, 'items': pairs, 'size': len(v)}
            try:
                fields = object.__getattribute__(v, '__dict__')
            except (AttributeError, TypeError):
                fields = None
            if type(fields) is dict:
                return {'kind': 'object', 'id': ident, 'name': t.__name__[:80], 'fields': {str(k)[:80]: value(val, depth + 1) for k, val in list(fields.items())[:16]}}
            return {'kind': 'opaque', 'id': ident, 'text': t.__name__[:80]}
        frames = []
        f = frame
        while f and len(frames) < 8:
            if f.f_code.co_filename == '<cairn-user>':
                variables = {}
                for name, val in f.f_locals.copy().items():
                    if name.startswith('__') or type(val) in (_types.ModuleType, _types.FunctionType, type, _types.BuiltinFunctionType):
                        continue
                    if len(variables) >= 16: break
                    variables[name[:80]] = value(val)
                frames.append({'function': f.f_code.co_name, 'line': f.f_lineno, 'variables': variables})
            f = f.f_back
        record = {'line': frame.f_lineno, 'event': event, 'frames': frames, 'stdoutLength': output.tell()}
        if event == 'return': record['returned'] = value(arg)
        if event == 'exception': record['exception'] = arg[0].__name__
        encoded = _json.dumps(record, allow_nan=False)
        budget += len(encoded)
        if len(events) >= 800 or budget > 4000000:
            raise TraceLimit('Trace limit reached: 800 events or 4 MB. Use a smaller input.')
        events.append(record)
    def trace(frame, event, arg):
        if frame.f_code.co_filename == '<cairn-user>' and event in ('line', 'call', 'return', 'exception'):
            snapshot(frame, event, arg)
        return trace
    old_out, old_err, old_in = _sys.stdout, _sys.stderr, _sys.stdin
    try:
        compiled = compile(source, '<cairn-user>', 'exec')
        _sys.stdout = _sys.stderr = output
        _sys.stdin = _io.StringIO(stdin)
        _sys.settrace(trace)
        exec(compiled, {'__name__': '__main__'})
    except BaseException as exc:
        _sys.settrace(None)
        truncated = isinstance(exc, TraceLimit)
        error = type(exc).__name__ + ': ' + str(exc)[:800]
        if isinstance(exc, SyntaxError): error += ' (line ' + str(exc.lineno) + ')'
    finally:
        _sys.settrace(None)
        _sys.stdout, _sys.stderr, _sys.stdin = old_out, old_err, old_in
    return _json.dumps({'events': events, 'stdout': output.getvalue(), 'error': error, 'truncated': truncated}, allow_nan=False)
_cairn_run(_cairn_source, _cairn_stdin)
