# CourseCairn

A learning studio with independent Backend Mastery (36 weeks) and DSA Mastery (48 weeks, C++17 primary, Java/Python support). Warm forest/ivory design, dated daily plans, curriculum trees, resource mappings, journals, assessments, projects and private PostgreSQL accounts.

## Local setup

Requires Node.js 24 and PostgreSQL. Create a database, then:

```sh
npm ci
cp .env.example .env
# Set DATABASE_URL and APP_ORIGIN in .env
npm run migrate
npm start
```

Open http://localhost:8000. Register a unique username and password; save the recovery code. Accounts have UUIDs. All course activity is scoped to the authenticated user and course. Old device notes can be exported from the sign-in screen; they are not silently assigned to an account.

## Vercel deployment

1. Import `Charan610/COURSE-CAIRN` into Vercel. Framework preset: Other; root: repository root. Node.js: 24.x. `vercel.json` supplies the build, output and API configuration.
2. Connect a managed PostgreSQL database (for example Neon through the Vercel marketplace). Set **DATABASE_URL** to its TLS-enabled pooled PostgreSQL URL in Vercel environment variables. Never use the local development database URL.
3. Set **APP_ORIGIN** to the exact public HTTPS origin, e.g. `https://your-project.vercel.app` (no trailing slash). It must match the domain used by learners. Use a separate database/origin for previews.
4. Deploy. The build runs the idempotent account migration and generates public assets. The API runs as a Node function; no local filesystem database is used.
5. Verify `/api/health`, registration, sign-in, saving in both courses, reload, export and recovery on the deployed origin before inviting learners. Secure cookies require HTTPS.

A database and deployment are external services and must actually be provisioned. This repository does not contain production credentials. See [Vercel Node functions](https://vercel.com/docs/functions/runtimes/node-js) and [managed PostgreSQL](https://vercel.com/marketplace/neon/neon).

## Persistence and operations

- `users`: immutable unique usernames, UUIDs, display names, scrypt password/recovery hashes.
- `sessions`: hashed opaque session tokens, CSRF, expiry; HttpOnly/Secure production cookies.
- `course_states`: `(user_id, course_id)` records with JSON activity and optimistic revisions. Conflicts do not overwrite another tab’s changes.
- `rate_limits`: durable authentication/write throttling.
- `npm run cleanup`: remove expired sessions and rate-limit buckets. Schedule through your host’s operational tooling.
- Back up PostgreSQL through your provider. Profile → Export all my data exports every saved course plus unsaved drafts when present. Export is not a database disaster-recovery backup.
- AI keys belong only in server environment variables. No AI feature is enabled or billed by this version.

## DSA integration

The supplied research is preserved in `content/dsa-research.md`; `scripts/import_dsa.py` imports only DSA content and the additive course catalog entry. `content/curriculum.json`, Backend research and build specification are protected by SHA-256 regression checks.

DSA has 8 phases, 48 weeks, 288 sessions, 720 hours, 48 checkpoints and 8 phase gates. C++17 is primary; Java/Python are bridges. Problem attempts record results, language, hints, time, reflections and 1/7/21/45-day recall dates. Independent re-solves and self-assessments remain distinct from activity checkboxes. Assessment retakes retain previous DSA scores. No embedded judge executes untrusted learner code.

Deep links: `#/dsa/roadmap`, `#/dsa/weeks/10`, `#/dsa/learn/10/tuesday`, `#/dsa/resources`, `#/dsa/practice`, `#/dsa/interviews`. Existing Backend route names remain available. Use the course selector to switch.

The research contains publisher-description chapter timestamps. The importer validates timestamp arithmetic and video identity; the UI discloses that a fresh live chapter-description review is pending and no frame audit was performed. Problem access/difficulty is unknown unless sourced. Practice directories are identified separately from individual problems. Placement guidance makes no hiring guarantee.

The early Saturday allocation in the research totals 330 minutes despite its five-hour requirement. The implementation uses 90 minutes recall, 150 minutes lab, 60 minutes review = 300 minutes. Weekday guidance totals 120 minutes.

## Regression checks

```sh
npm run build
# Use a separate disposable database whose name ends in _test:
TEST_DATABASE_URL=postgresql://localhost:5432/coursecairn_test npm test
```

Tests cover source integrity, schedule/resource/timestamp invariants, account ownership, CSRF, recovery, stale writes, export and independent course storage. Integration tests create and clean up their own test accounts. Without TEST_DATABASE_URL, database tests are explicitly skipped.

Rollback DSA by reverting its frontend/catalog addition. Preserve its existing `course_states` rows and keep Backend IDs unchanged. No DSA migration or data backfill is needed because the existing schema already has a course discriminator. Removing the catalog entry hides DSA but must not delete its records.

## Visual and Pattern Sheets

The course sidebar places **Visual** directly below **Resource library**. The DSA catalog publishes 50 original bounded algorithm labs, grouped across the 26 categories in the reference VisuAlgo catalog plus curriculum extensions. These are declared operations, not a claim to reproduce every variant on VisuAlgo. Exact vertex-cover, Steiner-tree and traveling-salesperson demonstrations intentionally cap input sizes. The NP-completeness lab demonstrates the vertex-cover/independent-set complement reduction.

- Arrays and seven sorting methods; bit operations, linked lists, heaps, hashing, BST/AVL, union-find, Fenwick and segment trees.
- Recursion, BFS/DFS, topological ordering, SCCs, MSTs, shortest paths, cycle finding, suffix structures, geometry, flow, matching and bounded exact search.
- DP, KMP, tries, backtracking and Kadane extensions. Language guides are labelled as guides; only binary-search and insertion-sort panels currently include actual C++/Java/Python fragments.
- Pattern Sheets contain 37 existing canonical problems and 48 original weekly exercises, with original guidance, expandable topics and patterns, filters, bookmarks, attempt evidence and revision collections. 35 LeetCode publisher difficulty labels were retrieved from the official API on 11 October 2026. Other unreviewed publisher labels remain Unknown. No copied RisingBrain collection or its problem totals are represented as native content.
- Sessions, trace cursors, notes, predictions and practice bookmarks use the existing authenticated DSA course state; attempts use existing DSA history. Backend curriculum and records remain isolated. Account JSON export includes these fields.

Input limits and trace limits are enforced in both browser and server validation. Diagram colors are accompanied by symbols, labels or stroke patterns. Large diagrams scroll within the canvas. Playback does not execute submitted code or grant coding mastery.

### Free Python execution tracing

Every DSA visual lab has **Code → visual** with a Python runtime alongside the existing external compiler. This executes the edited Python source with Pyodide 314.0.7 in a disposable module worker inside an opaque-origin iframe (`sandbox="allow-scripts"`, no `allow-same-origin`). The runtime downloads from jsDelivr on demand. No paid compiler, backend execution, or AI service is used. The frame receives only source code, stdin and runner assets, never account data or credentials.

The Python trace records user-source line/call/return/exception events, bounded locals, call frames, lists, tuples, sets, dictionaries, deques, ordinary object fields and object references. The player shows the state **before** a highlighted line executes; return events show the completed function state. Imported library internals, native operations, threads and asynchronous execution are outside the visual tracing contract. Graph-shaped data is displayed as actual collections/objects, not inferred algorithm-specific graph animations. Not every Python object has a full visual adapter.

Limits: 20,000 source characters / 1,500 lines, 800 events or 4 MB trace, 10 seconds execution, 60 seconds runtime loading, 10,000 output characters. Display truncation is labelled. Code changes invalidate the previous trace. Runtime errors retain recorded events when possible; forced termination discards the incomplete run. Code can be downloaded; drafts and traces are not persisted to the account. General C++ and Java use the external compiler. The supported C++ teaching subset is described below.

`trace-frame.html` has a separate restrictive CSP; other pages retain the existing policy. The worker uses a data URL for opaque-origin browser compatibility. Only the isolated runtime permits the pinned CDN and WebAssembly, while application script policy is unchanged. Untrusted code can alter its own trace/runtime; snapshots are debugging aids, never trusted completion evidence. This browser runner is for small educational programs, not a hard per-process memory sandbox for hostile workloads.

### Code-driven array walkthroughs

The visual catalogue links to `#/dsa/visual/array?code=merge-append`. This opens the code walkthrough with two original merge-sorted-array approaches: append then sort, and merge from the back using three pointers. Both have editable C++ teaching examples and real Python equivalents. Array diagrams show recorded values, zero-based indices, index expressions from the highlighted statement, changed cells and direct array-copy arrows. A clickable history follows array changes. Source highlighting moves beside the diagram; Edit code returns to the editable draft.

`cpp-trace.js` parses and evaluates a bounded C++ teaching subset without JavaScript eval or native execution. It supports initialized integer/bool locals, integer vectors/arrays, for/while, if/else, indexed writes, integer arithmetic, short-circuit conditions, size/begin/end/push_back, sort/swap, scalar cout and return in main. It rejects unsupported syntax, bad indices, oversized values, division by zero and excessive execution. Custom functions, classes, references/pointers, general libraries, implicit conversions, whole-array assignments and Java tracing are outside its contract. It is not a general C++ compiler. Native standard-library sorting appears as one completed operation; internal sorting comparisons are not fabricated. The full external compiler remains available.

The array diagram layer also works with the existing Python snapshots in every visual lab; it renders supported recorded arrays and objects rather than inferring a custom algorithm's semantics. Python direct-copy arrows are shown only when a simple executed assignment and its observed values agree. Additional adapter support is needed for specialized graph/tree layouts. No user records or existing lab IDs were changed.
