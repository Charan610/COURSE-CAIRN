# Cairn learning assistant

The floating assistant uses each learner's own provider account. No Vercel AI Gateway credits, shared server key or automatic paid fallback are used.

## Connect

1. Sign in and open **Ask Cairn** at the bottom right.
2. Select OpenRouter Free or Google Gemini on a free-tier project. OpenAI and Anthropic have no ongoing free API default in this interface.
3. Enter its API key. Model IDs are enforced server-side: `openrouter/free` or `gemini-3.5-flash-lite` (pricing reviewed 2026-10-14). There is no paid fallback. Gemini requires confirmation of a free-tier project; CourseCairn cannot independently verify Google billing status.
4. Review the data-sharing notice and connect. The first question validates the connection with the provider.

Chat is kept in tab memory and clears on refresh. Keys default to tab memory; the optional **Remember on this device for 30 days** control stores an encrypted connection in IndexedDB for the signed-in account. Reload restores that connection after authentication. **Disconnect & forget** and sign out delete that account’s remembered connection on this device. Changing courses starts a new conversation. Neither keys nor conversations are persisted to the application database. Requests pass through the authenticated CourseCairn endpoint to the fixed endpoint for the selected provider. Provider usage fees and retention policies apply. Free-tier providers may use submitted content under their own data policies.

## Context and boundaries

- Server reads only `course_states` rows belonging to the authenticated user.
- Context contains the learner display name, course and resource index, current/relevant lesson excerpts, per-session activity, topic progress, schedule, skipped sessions, assessments, selected bookmarks and practice history. Larger collections are bounded with totals exposed.
- Notes, practice drafts and saved links are opt-in per conversation. Disabling the option clears previous chat context.
- External source bodies are not downloaded. Coming-soon content is labelled. Retrieval is bounded keyword matching plus the current and next lesson; it is not exhaustive semantic search.
- Replies include links to the retrieved context. These links are context references, not a guarantee that every AI statement is correct.
- No model tools can mutate account data, execute code, read arbitrary database rows or fetch arbitrary URLs.
- No raw provider errors or request payloads are logged. No telemetry is configured by this feature.
- Requests require login, CSRF and allowed origin. Limits: 20 requests/user/hour, 2,000-character question, last 8 conversation messages, 1,400 output tokens, 22-second timeout, no retries.
- Model-specific permissions, quotas and compatibility are checked by the selected provider at runtime. Use a text model; image/audio/embedding-only models are unsupported.

## Deployment

The existing Node/Vercel build packages the frontend assets and bundled AI SDK providers. No new database migration or AI environment variables are needed. The assistant is instructed to answer only CourseCairn questions and course-related learning, and redirect unrelated requests. Open/close and message animations respect reduced motion. The connection form is the only way to supply a key. Test a real provider connection using your own key; do not put credentials in tickets, chat or source control.

## Assistant experience

The bubble opens an Explore & help guide with course-specific shortcuts and searchable website FAQs. This guide uses written local help and requires no API key. AI chat remains an explicit, opt-in provider connection. The selected course, privacy scope, and optional notes sharing remain visible.

Chat offers question starters, one-question-at-a-time quiz guidance, copy answer, plain-text chat export, and Ctrl/Cmd+Enter to send. Drafts survive assistant view changes within the tab; changing courses clears the conversation and draft. Exports contain conversation text and reference links, never the provider key. Conversations remain memory-only. Credentials can be remembered with explicit opt-in.

## Device storage

Each connection is encrypted with AES-GCM using a non-extractable Web Crypto key stored in the browser’s IndexedDB. The authenticated account ID is both the record key and authenticated encryption data. The connection expires 30 days after it is saved. Restored records are validated, and expired or corrupted entries are removed. Only provider configuration and consent are stored; notes-sharing stays off after reload.

This protects against storing a plain API key in localStorage but does not protect against a compromised same-origin script or someone controlling this browser profile. Remembering is off by default and should be used only on trusted devices. Connections do not sync between devices or browsers. Clearing site data removes them. No real user key is used in automated verification.
