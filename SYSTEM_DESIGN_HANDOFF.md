# System Design course — first usable release

## Scope delivered

Course 03 has the permanent ID `system-design` and track ID `system-design-v1`. The supplied manifest is preserved as 196 topics in exact SD-001…SD-196 order, grouped into 20 modules and 6 phases. The roadmap offers Foundation, HLD, LLD, Projects and Interviews filters without renumbering topics.

The implementation plan explicitly calls for an initial release with the first three authored lessons and honest publication states. SD-001, SD-002 and SD-003 include explanations, a worked example, an architecture sketch, an exercise, a self-check and official references. The other 193 topics are Coming Soon and cannot be marked complete. Practice briefs are separately labeled prompts, not published full lessons. No unaudited video chapters or timestamps were invented.

Eight original, bounded educational simulations cover HTTP, load balancing, caching, sharding, replication, queues, rate limiting and observability. Each declares its simplifying assumptions and supports editable inputs, manual stepping, playback, reset and saved scenario state. Reduced-motion users can step manually.

Course tabs include overview, curriculum, resources, visual lab, progress, design practice, interview prep, projects and notebook. The first release also includes original self-guided design briefs and saved draft workspaces; it does not execute code or grade designs with AI.

## Repository audit and compatibility

The existing site uses vanilla JavaScript, a shared course catalog, a Node API, authenticated sessions and PostgreSQL `course_states` JSONB records keyed by user and course. The new course uses the same persistence and account export pipeline. No schema migration or destructive database operation is required.

Backend and DSA curriculum files, algorithm implementations and the existing database migration remain byte-identical to their recorded baseline in `artifacts/system-design-baseline.json`. Existing routes remain available. System Design routes use `#/system-design/…`; following an unprefixed Backend link switches back to Backend, and `#/dsa/…` links select DSA.

The original forest, citrus, amber and paper design system and opening animation are retained. The additional stylesheet uses no blue, purple, indigo or violet palette.

## Persistence contract

System Design records use the `sd` field inside that course's account record:

- `topics`: explicit completion and actual opening timestamps.
- `lastTopicId`: most recently opened topic, including browsable forthcoming topics.
- `notes`, `bookmarks`, `practice`: course-scoped learner material.
- `visual`: bounded scene configuration, cursor and originating topic.

Server validation rejects unknown topic IDs, duplicate bookmarks, invalid simulation values, completion of unpublished lessons and state injected into other courses. Existing optimistic revisions prevent stale writes from overwriting saved records. The profile displays both full-curriculum completion and available-lesson progress. Account export includes System Design data.

## Verification

On 2026-10-12:

- `npm run build` passed with the new catalog validator.
- `TEST_DATABASE_URL=<local isolated test database> npm test`: 32 checks passed, zero failures.
- Tests cover canonical identity/order, existing content hashes, all eight deterministic models, model invariants, account isolation, persistence after login, export, revision conflicts and unchanged Backend/DSA records.
- Browser checks covered lesson notes/completion after reload, saved simulation after reload, all eight lab interfaces, curriculum filtering, adjacent module navigation, the final topic and missing-topic page, all three profile cards, Backend deep links and the original DSA visual catalog.
- Narrow 320px overview and lesson layouts were inspected; viewport override was restored.

## Publishing and rollback

The standard Vercel build already copies the new client assets and manifest. Its API bundle imports the new validator and simulation model. Existing production database configuration remains required. No secret belongs in the public build.

To hide the track, remove its entry from `content/catalog.json` and redeploy; preserve its content file and all database records. Existing saved records remain retrievable in account exports; course editing resumes when the catalog entry is restored. Do not delete any `course_states` records. For a complete application rollback, redeploy the previous known-good commit; System Design records remain in PostgreSQL for a subsequent re-enable.

Vercel deployment access was unavailable during this work: both the connected plugin and linked CLI previously rejected authorization. GitHub publication and successful local checks do not by themselves prove a production deployment. Confirm a successful Vercel deployment before announcing the track as live.

## Remaining course authoring

Author and review SD-004…SD-196 in their permanent positions. Each published lesson should include objectives, accurate prerequisites, a substantial explanation, worked example, architecture diagram, trade-offs and failure modes, exercise, quiz and verified official references. Add audited video chapters only when their actual publisher timestamps have been checked. Expand the currently introductory project, LLD and interview briefs into the comprehensive later releases described in the source plan.
