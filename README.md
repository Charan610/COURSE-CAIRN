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
