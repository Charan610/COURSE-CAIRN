# Cairn learning assistant

The floating assistant uses each learner's own provider account. No Vercel AI Gateway credits, shared server key or automatic paid fallback are used.

## Connect

1. Sign in and open **Ask Cairn** at the bottom right.
2. Select OpenAI, Anthropic, Google Gemini, or OpenRouter.
3. Enter a text-capable model ID available in that account and its API key.
4. Review the data-sharing notice and connect. The first question validates the connection with the provider.

Keys and chat are kept in tab memory only. Refresh or Disconnect clears the key. Changing courses starts a new conversation. Neither keys nor conversations are persisted to the application database or browser storage. Requests pass through the authenticated CourseCairn endpoint to the fixed endpoint for the selected provider. Provider usage fees and retention policies apply. OpenAI response storage is disabled explicitly.

## Context and boundaries

- Server reads only `course_states` rows belonging to the authenticated user.
- Context contains the learner display name, course outline index, current/relevant lesson excerpts, progress, schedule, skipped sessions and assessment status.
- Notes, practice drafts and saved links are opt-in per conversation. Disabling the option clears previous chat context.
- External source bodies are not downloaded. Coming-soon content is labelled. Retrieval is bounded keyword matching plus the current and next lesson; it is not exhaustive semantic search.
- Replies include links to the retrieved context. These links are context references, not a guarantee that every AI statement is correct.
- No model tools can mutate account data, execute code, read arbitrary database rows or fetch arbitrary URLs.
- No raw provider errors or request payloads are logged. No telemetry is configured by this feature.
- Requests require login, CSRF and allowed origin. Limits: 20 requests/user/hour, 2,000-character question, last 8 conversation messages, 1,400 output tokens, 22-second timeout, no retries.
- Model-specific permissions, quotas and compatibility are checked by the selected provider at runtime. Use a text model; image/audio/embedding-only models are unsupported.

## Deployment

The existing Node/Vercel build packages the frontend assets and bundled AI SDK providers. No new database migration or AI environment variables are needed. The connection form is the only way to supply a key. Test a real provider connection using your own key; do not put credentials in tickets, chat or source control.
