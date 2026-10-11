# BACKEND MASTERY ACADEMY — WEBSITE BUILD SPECIFICATION

**Status:** Build-ready product/UX/engineering brief  
**Source of truth:** `BACKEND_MASTERY_RESEARCH_AND_CURRICULUM.md`  
**Product type:** Self-paced, project-led, curated backend development learning platform.  
**Core curriculum:** 36 weeks / 6 levels / 24 modules / 540 planned hours, with six study days per week.

> **IMPORTANT TO IMPLEMENTING AGENT:** Build a REAL, polished, accessible and fully functional website, **not** a static hero mockup or an invented curriculum. Populate content from the companion research Markdown. Where a resource remains unverified, label it transparently; never fabricate lesson text, video durations, chapter times, assessments, user progress, testimonials or instructor ratings. Prioritize the learner's working daily workflow. NEVER introduce **blue, indigo, violet or purple hues**, including default link colors, gradients, charts, code themes, focus rings, glows, shadows, selected states, skeletons or dark mode. Use the exact warm-neutral/forest/terracotta palette below.

## Table of contents
1. [Product goals and non-goals](#1-product-goals-and-non-goals)
2. [Design direction and strict color system](#2-design-direction-and-strict-color-system)
3. [Typography, layouts and interaction](#3-typography-layouts-and-interaction)
4. [Information architecture and routes](#4-information-architecture-and-routes)
5. [Page-by-page component requirements](#5-page-by-page-component-requirements)
6. [Lesson experience and timebox](#6-lesson-experience-and-timebox)
7. [Core functional requirements](#7-core-functional-requirements)
8. [Data model and curriculum ingestion](#8-data-model-and-curriculum-ingestion)
9. [Technology stack and architecture](#9-technology-stack-and-architecture)
10. [Security, accessibility and performance](#10-security-accessibility-and-performance)
11. [Implementation milestones](#11-implementation-milestones)
12. [Quality assurance and acceptance](#12-quality-assurance-and-acceptance)
13. [Design references and implementation guardrails](#13-design-references-and-implementation-guardrails)

## 1. Product goals and non-goals

### Goal
Make it easier for a motivated beginner to master FastAPI, PostgreSQL and REST APIs by **showing exactly what to study today, in which order, and what practical proof is required**. The platform must be a **structured learning cockpit**, not a dumping ground for YouTube URLs.

### User promise
- Open the website and immediately see **Continue learning → Week N / Day N**.
- Read a topic goal, prerequisites, authoritative documentation sections, selected verified video chapters and any compatibility warnings.
- Complete an actual practical exercise, record test evidence, pass an assessment and track progress.
- Browse 6 levels → 36 weeks → 24 modules → 216 planned study days, with 2h weekdays and 5h Saturday.
- Discover and filter all sources by topic, type, status, author, week and difficulty.
- Bookmark, annotate and revisit weak concepts in a spaced review queue.

### Non-goals for v1
No invented AI tutor, no fake video player, no compiler pretending to execute Python server code in the browser, no fake real-time grading, no arbitrary completion scores, no social proof or imaginary user counts, no video piracy, no unreviewed sources silently labeled recommended.

### Personas
1. Beginner: needs explicit prerequisites and guided daily plan.
2. Intermediate: wants direct access to topic, doc, chapter and lab.
3. Curriculum editor: needs resource version/status controls and broken-link handling.

## 2. Design direction and strict color system

### Concept: **Field Notes / Modern Learning Studio**
A premium editorial learning product with warm paper-like canvases, deep pine typography, precise dividers, terracotta highlights and amber milestones. Refined, calm, focused and coding-friendly; **not a generic gradient SaaS template**. Visually closer to a sophisticated notebook, architecture journal, and instrument dashboard combined.

**ABSOLUTE COLOR EXCLUSION:** No hue of blue, purple, indigo or violet anywhere in authored UI. Audit all third-party components, external badges, browser-default link colors, focus states, charts, code syntax and dark-mode styles for accidental violations. Color token naming should reinforce this rule.

### Authorized palette (light)

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#F8F5EE` | App backdrop, warm ivory |
| `paper` | `#FCFAF5` | Cards / reading panels |
| `paperStrong` | `#F0E8D9` | Selected sections / hover rows |
| `ink` | `#263329` | Main type, dark evergreen |
| `mutedInk` | `#526052` | Secondary text |
| `line` | `#DDD5C6` | Borders, hairline separators |
| `forest` | `#2E6748` | Primary CTAs, success indicator |
| `forestDeep` | `#214C35` | Primary CTA hover, emphasis |
| `terracotta` | `#B35435` | Important flags, active chapter, high attention |
| `terracottaDeep` | `#8F452D` | Hover / high contrast variant |
| `amber` | `#C9952B` | Milestone badge, streak highlight |
| `charcoal` | `#202A23` | Terminal/code-panel background |
| `codeText` | `#F3EAD7` | Code-panel foreground |
| `white` | `#FFFFFF` | Text on dark accent surfaces |

**Contrast notes:** `#263329` on `#F8F5EE` ≈ 12.15:1; `#FFFFFF` on `#2E6748` ≈ 6.67:1; `#FFFFFF` on `#B35435` ≈ 4.96:1. These are precomputed pair estimates; still run automated WCAG tests on every component and color state. Avoid white body text on amber. Use a dark ink foreground on amber backgrounds.

### Dark theme (optional but must be polished if shipped)
- Background `#171E18`; surface `#222B22`; raised `#29362A`; border `#485246`; heading `#F4F0E5`; secondary text `#C6CCBF`.
- Accents adapt to contrast; use `#87BE92` for active green details and `#EAA58A` for small high-attention text, never as large washed-out buttons without checking contrast.
- If dark mode cannot pass accessibility/color QA, ship polished light mode first rather than a broken dark toggle.

### Aesthetic decisions
- 12-column desktop grid, compact left sidebar, generous content whitespace, narrow prose reading line (~70–76 characters).
- Deliberate asymmetry: small editorial eyebrow, bold display heading, aligned metadata, structured cards, restrained abstract geometric background motifs (lines, grids, circles; no loud imagery).
- Soft border `1px solid #DDD5C6`; radius 12–18px for cards, 10–12px for controls. No big glass blur panels or floating neon orbs.
- Shadow examples: `0 10px 35px rgba(38, 51, 41, 0.07)` — use warm charcoal RGB only.
- Make progress visualization refined: segmented week map, thin completion bar, forest fill, terracotta active position, amber milestone.

## 3. Typography, layouts and interaction

### Typography
- Display: **DM Serif Display** (or Georgia fallback) for major marketing/editorial headings; use moderately, never for buttons or technical data.
- UI/body: **Inter** or **Manrope**, system sans fallback; high legibility at 14–16px.
- Code and time values: **JetBrains Mono** or `ui-monospace`, well-tracked.
- Heading scale desktop: 44/36/28/22/18; mobile: 34/28/24/20/17. Body 16px with 1.6 line height; captions 12–13px.
- Fonts must be fetched through licensed services / packages; do not commit third-party binary font files without appropriate license.

### Responsive structure
- ≥1280px: fixed/collapsible sidebar 252px; main content max 1120px, aside 280px on lesson screens.
- 768–1279px: compact sidebar 72px or drawer; primary content 1–2 columns.
- <768px: top bar with wordmark, menu, compact progress and **sticky bottom Continue action**. No horizontal scrolling in curriculum cards, tables or code unless intentionally scrollable code.
- Curriculum week grid: 6 columns on wide desktop, 3 on tablet, 2 on narrow mobile. Use accessible buttons, not clickable anonymous divs.

### Motion
- Page appearance: 200–350ms, ease-out, subtle 4–8px translate maximum.
- Card hover: 2–3px elevation/line change only; no excessive parallax.
- Progress update: 180ms width transition; respect `prefers-reduced-motion` everywhere.
- Use skeletons based on actual fetch, never as permanent visual decoration.

### Interaction micro-details
- Visible keyboard focus ring using `#B35435` or `#2E6748` with adequate contrast; no browser-default blue ring.
- Strong empty states with practical CTA (e.g., "You haven't saved any lessons — browse resources").
- Status labels have text + icon, not color alone. Progress is explained as "tasks completed" vs "assessment passed".
- Copy code controls, timestamp launch actions, tooltips explaining version warnings, completion toasts, `aria-live` confirmation.
- No decorative buttons that do nothing. Every CTA must lead to a real route/action.

## 4. Information architecture and routes

| Route | Purpose | Main components |
|---|---|---|
| `/` | Marketing overview + CTA; signed-in users can jump to dashboard | Hero, curriculum overview, proof via concrete curriculum counts |
| `/dashboard` | Today, current week, milestones | Continue card, weekly time allocation, activity, revision queue |
| `/roadmap` | All 6 phases and 36 weeks | Phase columns, week cards, progress and status |
| `/phases/[phaseSlug]` | One phase breakdown | Phase intro, weeks, module grouping, capstone |
| `/weeks/[weekNumber]` | Week plan | Mon–Sat agenda, source list, weekly checkpoint |
| `/learn/[weekNumber]/[day]` | **Main lesson workbench** | Objectives, reading, video, lab, checklist, self-review |
| `/modules/[moduleSlug]` | Module deep dive | Outcomes, prerequisites, reading, related weeks |
| `/resources` | Curated library | Search, facet filters, provenance and quality badges |
| `/resources/[id]` | Resource detail | Coverage, chapters, compatibility, where used |
| `/projects` | Project ladder | 9 projects and acceptance evidence |
| `/projects/[projectSlug]` | Build instructions and rubric | Requirements, checklist, evidence fields |
| `/assessments/[weekNumber]` | Weekly pass gate | Questions, requirements, reviewer status, honest score |
| `/notes` | Personal reading notes | Notes indexed by lesson/resource |
| `/bookmarks` | Saved documentation and video chapters | Sorted, searchable list |
| `/settings` | Preferences, export, reset | Theme, learning intensity, data export/privacy |
| `/admin/resources` | Admin-only source management | Review status, broken links, last-reviewed |

Allow unauthenticated curriculum and resource browsing; sign-in is only needed to sync progress across devices (or offer guest local mode). Enforce true authorization server-side.

## 5. Page-by-page component requirements

### Landing page
- Editorial hero: eyebrow `A FIELD GUIDE TO BACKEND ENGINEERING`; headline `Go from your first API to production systems.`; one line supporting text; CTAs `Explore curriculum` and `Start Week 1`.
- Visual right half: custom **curriculum itinerary card** with six stacked phases, time budget, and a small terminal-style `GET /health → 200` demo.
- Below hero: "36 weeks, 24 modules, 540 guided hours" facts; learning method "Read → Watch → Build → Prove"; selected source publisher strip as plain text; 9 practical project cards; sample lesson preview.
- Avoid fabricated review counts, fake endorsements and meaningless analytics.

### Dashboard
- "Good to have you back" (never intrusive personal name). **Continue: Week X / Day Y** as prominent card with estimated time and immediate CTA.
- Week progress bar showing finished tasks and verified assessments separately.
- 6-day week strip Monday through Saturday; clock time breakdown 2/2/2/2/2/5 hours; Sunday as rest.
- "Next best action" dynamically selected based on progress, not hard-coded first lesson.
- Saved resources, recent notes, weak areas, project milestone and optional learning streak. Streak must rely on actual event timestamps, not page views.

### Roadmap
- 6 phase sections each containing real weeks and associated modules.
- Week tiles display number, topic, module, hours, progress and locked/unlocked badge (do not block reading past weeks; 'recommended next' rather than punitive lock).
- Toggle `Roadmap` / `Calendar` view if both fully implemented; otherwise omit dead toggle.
- Sidebar filters for incomplete, in progress, passed. Deep links to week.

### Weekly detail
- Week title, objective, modules, prerequisites and outcome.
- Six daily activity cards with estimated time and resource chips.
- "This week you build" section with acceptance criteria; weekly checkpoint criteria and links.
- Bookmark and export weekly plan as accessible print layout.

### Lesson workbench — highest polish priority
- Desktop split: left lesson content (65–70%), right sticky "Today's plan" and timebox. Mobile stack reading → video → lab → completion.
- Top progress breadcrumb: Phase / Week / Day; lesson title and objective list.
- Tabbed content only if tab state has URLs/keyboard nav: `Overview`, `Read`, `Watch`, `Practice`, `Test`.
- Reading source cards with URL, publisher, type, why-this, specifically relevant doc section, time budget, verified/older statuses.
- Video panels: YouTube privacy-conscious external opener by default; optional nocookie embed; clickable **publisher-listed** chapters, start and (when available) end, and a warning for older tech. Never pretend to know watched percentage or auto-credit video if playback can't be measured accurately.
- Practice code snippet with copy control, commands, expected output, troubleshooting collapsibles and an independent challenge.
- A **pass gate** requires explicit quiz and submission/check responses, not checkboxes alone.
- A small completion ribbon with separate `Read`, `Watch`, `Built`, `Tested`, `Explained`, `Assessment passed` signals.

### Resource Library
- Search over title/description/topics/creator.
- Filters: module, phase, difficulty, content type, version compatibility, resource approval, reading duration if known.
- Resource cards: clear source URL + hostname, author, exact section/topic and weeks used; curated reason; last reviewed; primary/supplementary; version warning.
- Sort: curriculum order (default), recently reviewed, difficulty and alphabetical. No invented ratings.
- Resource detail expands time-indexed chapter table and related days; report-broken-link action creates review ticket.

### Projects and assessments
- Each project has requirements, milestones, testable acceptance criteria, source IDs, GitHub URL field (URL validated), notes/evidence, and pass/fail checklist.
- Weekly assessment: concept checks, open-ended questions, practical output check. Do not claim automatic source-code grading unless a secure real execution environment exists.
- Mark result as `Self assessed` unless evaluated by a trusted test runner/reviewer.
- Completion certificate, if any, should plainly say **self-paced completion**, not accredited certification.

## 6. Lesson experience and timebox

Each lesson record includes:
```
Learning objective → prerequisites → time budget → authoritative section(s)
→ selected video chapter(s) → hands-on task → expected behavior
→ debugging hints → retrieval quiz → reflection → completion evidence.
```

### Monday–Friday (120 minutes) recommended partition
- Orient and recall prerequisites: 10 min.
- Read official resource sections: 25 min.
- Watch selected verified chapters: 25 min.
- Implement/rework examples: 40 min.
- Test, troubleshoot, recall and note: 20 min.

### Saturday (300 minutes) recommended partition
- Project plan/acceptance review: 30 min.
- Independent build: 180 min.
- Testing/debugging: 45 min.
- README, architecture explanation and checkpoint: 45 min.

**Editor may redistribute minute allocations per lesson** provided the total stays 120/300 and the full 15-hour weekly program is clear. Do not assign whole 14-hour video to a two-hour lesson.

### Example: Week 16 / Monday / SQLAlchemy ORM
- 25 min [R26: ORM Quick Start] and [R27: Session Basics].
- 25 min [V05 from 01:59:51] `https://www.youtube.com/watch?v=iukOehU5aF4&t=7191s` (only relevant segment), with source marking `publisher-listed chapter`.
- 40 min make `User`/`Product` SQLAlchemy 2.x models; connect to PostgreSQL and issue select/create.
- 20 min test session rollback and resource not found; write three answers about engine/session/transaction.
- 10 min note summary and completion evidence.
- Do not incorrectly count a 25-minute video session as the entire chapter if the publisher's next chapter is later.

## 7. Core functional requirements

### Progress state — must actually work
- Per user + lesson + task: `not_started / in_progress / completed`, timestamp, source of evidence, optional notes.
- Week project assessment: `not_submitted / self_assessed / passed / needs_revision` with score and criteria results.
- Calculate progress as tasks completed / assigned tasks, **separate** mastery as weeks passed / 36.
- Atomic completion mutations, optimistic UI with rollback on errors, accessible feedback.
- Daily continuation logic finds first incomplete required step, or next recommended day.
- Persist guest progress locally with clear label; account progress in database. Export to JSON. No silent loss on refresh.

### Resources
- Ingest Rxx and Vxx IDs from Markdown only through a deterministic parser or a one-time curated structured seed; preserve source provenance.
- Every outbound link must be valid HTTPS, use `rel="noopener noreferrer"` if opening a new tab, and visibly show original creator/domain.
- Time links use exact listed `start_seconds`. No auto-generated or guessed timestamps.
- Admin/source-review controls can deprecate, hide or replace outdated resources without breaking lesson IDs.
- If source fails, show alternatives and `Report issue`, not 404-only blank view.

### Search and discovery
- Search query reflected in URL parameters; keyboard accessible; debounce and clear; empty-results copy that gives next action.
- Module/week/chapter filters consistent with source mapping in companion file.
- Facets are computed from real records; do not manufacture resource counts.

### Bookmarks, notes, revision
- Save resource or chapter to bookmarks, sorted by recency.
- Save notes per day and resource, edit/delete with confirmation.
- Revision queue from manually flagged concepts, incorrect quiz answers or failed project gates; avoid fake AI accuracy ratings.

### Authentication and admin
- Guest mode is acceptable for MVP. If accounts supported: email/password with Argon2, session cookies HttpOnly+Secure+SameSite as appropriate, CSRF protection for cookie auth, rate limits, email verification plan, user-scoped progress.
- Admin separate permission role; normal users cannot edit global content or claim trusted assessment verification.
- Privacy export/delete account and stored personal data, with a clear confirmation flow.

## 8. Data model and curriculum ingestion

Use normalized relational tables (or explicit typed equivalent) with stable primary keys. A resource used in multiple weeks should be a shared record rather than duplicated text.

**Entities:**
- `Phase(id, slug, title, sort_order, weeks_start, weeks_end)`
- `Module(id, phase_id, title, description, learning_outcomes, prerequisites)`
- `Week(number, phase_id, title, focus, project_id, estimated_minutes=900)`
- `Lesson(id, week_number, day_of_week, title, objective, duration_minutes, order, content_md)`
- `Activity(id, lesson_id, kind, label, expected_output, estimated_minutes, order, required)`
- `Resource(id, title, url, hostname, author, source_type, difficulty, summary, trust_status, version_notes, last_reviewed_at, reviewer)`
- `Video(id, resource_id, youtube_id, publication_date)` and `VideoChapter(id, video_id, title, start_seconds, end_seconds_nullable, timestamp_provenance)`
- `LessonResource(lesson_id, resource_id, role, assigned_section, priority)` and `LessonChapter(lesson_id, chapter_id, required, target_minutes)`
- `Project(id, title, description, acceptance_criteria_json)` and `ProjectWeek(project_id, week_number)`
- `Quiz(id, lesson_id, rubric, pass_threshold)`; `Question(id, quiz_id, type, prompt, options, expected_answer_or_review_guide)`
- `User`, `Progress(user_id, activity_id, status, updated_at, evidence)`, `WeekAssessment(user_id, week_number, status, score, evidence)`, `Bookmark`, `Note`, `ResourceIssue`.

**Required constraints:** unique (week_number, day_of_week); unique (user_id, activity_id); chapter start non-negative; foreign-key integrity; separate content/editor/admin roles. No raw video HTML stored in dataset; use only allowed YouTube IDs + chapter times.

**Seed pipeline:**
1. Parse companion Markdown into typed content objects or manually curate them into version-controlled JSON/TS seed data.
2. Validate 6 phases, 36 weeks, 24 modules, 216 study-day records and exactly 900 planned minutes per week.
3. Map all 24 modules; validate each has official written resource(s); keep V10 optional as a legacy supplement, never primary.
4. Map listed videos/chapters only when provenance is `VIDEO_CHAPTERS_CONFIRMED`; retain `publisher_listed` provenance in UI.
5. **Content depth gate:** daily outline text is not yet a full lesson. For each day, write/approve prerequisites, doc sections, estimated chapter bounds, copyable exercises, expected output, troubleshooting and quiz before labeling it "lesson complete".
6. Run missing-link reports. Do not fill gaps by fabricating video links. Display a `Docs-first lesson; video review pending` status where relevant.

**Example seed object:**
```json
{
  "week": 16,
  "day": "monday",
  "durationMinutes": 120,
  "moduleId": 11,
  "resourceIds": ["R26", "R27"],
  "videoChapters": [
    {"videoId":"V05", "startSeconds":7191, "provenance":"publisher_listed"}
  ],
  "task": "Create a SQLAlchemy 2.x mapped User model and run a transaction",
  "masteryRequiresEvidence": true
}
```

## 9. Technology stack and architecture

### Recommended modern application stack
- **Framework:** Next.js App Router + TypeScript + React. Use server components for content and interactive client islands for progress and notes.
- **UI:** Tailwind CSS with a strict custom token theme; accessible headless UI primitives (Radix/shadcn only after replacing ALL default colors); Lucide icons.
- **Database:** PostgreSQL with Prisma or Drizzle for **website's** learning records. **The course itself teaches SQLAlchemy 2.x for learner projects**—do not confuse these stacks.
- **Content:** Version-controlled Markdown + typed JSON/TS generated metadata (MDX only if safe/sanitized and necessary). All curriculum facts trace back to the companion research file.
- **Authentication:** Auth.js or a well-maintained authentication service; real server-side authorization required if accounts are enabled.
- **Video:** native outbound YouTube time links as primary; optional YouTube nocookie embed, only after consent/performance review.
- **Deployment:** managed hosting with production PostgreSQL and environment secrets; CI lint, test, build and deploy.
- **Analytics:** privacy-respecting internal progress metrics; no advertising pixels by default.

### Repository example
```text
backend-mastery-academy/
  app/
    (marketing)/page.tsx
    (app)/dashboard/page.tsx
    (app)/roadmap/page.tsx
    (app)/weeks/[weekNumber]/page.tsx
    (app)/learn/[weekNumber]/[day]/page.tsx
    (app)/resources/page.tsx
    (app)/projects/page.tsx
    (app)/settings/page.tsx
    api/progress/route.ts
  components/
    layout/ curriculum/ lessons/ resources/ projects/ ui/
  content/
    curriculum/ resources/ chapters/ assessments/
  lib/
    curriculum/ progress/ validation/ auth/ db/
  styles/
    tokens.css
  prisma/ or drizzle/
  tests/
    unit/ integration/ e2e/
  scripts/
    import-curriculum.ts validate-content.ts check-links.ts
  public/
    icons/ artwork/
  README.md
```

### Rendering guidance
- Prefer server-rendered SEO-friendly roadmap/resource pages; fetch progress privately for the authenticated user.
- Cache public curricula/resources; invalidate on editorial updates.
- Keep time-based chapter links pure; no reliance on YouTube Data API tokens for core learning experience.
- Use proper error, loading and not-found states.

## 10. Security, accessibility and performance

### Security
- Input validation and parameterized database operations.
- Authenticated ownership checks on notes, bookmarks, progress and submitted evidence.
- Admin operations server-only with audit log.
- Rate limit mutation endpoints; prevent CSRF where session cookies are used.
- Content Security Policy and safe Markdown rendering, no untrusted raw HTML or external script injection.
- No credentials committed to Git; `.env.example` has dummy placeholders.
- Avoid pasting user-submitted code into unsandboxed execution. **Do not build code-runner in v1** unless an isolated, resource-limited execution service exists.

### Accessibility (WCAG 2.2 AA goal)
- Semantic `<main>`, navigation landmarks, headings and labels.
- All links, player controls, accordions, checkboxes, dialogs usable via keyboard; escape closes dialogs.
- Visible custom forest/terracotta focus ring, never blue.
- Normal text ≥4.5:1; large text and meaningful UI graphics ≥3:1; contrast checked on real states.
- Reduced-motion preference, skip link, `aria-live` for save confirmation.
- YouTube captions where available, readable transcript links where publisher permits; alternatives for unavailable video.

### Performance
- Responsive LCP target <2.5s on representative mid-range mobile where feasible; CLS <0.1; INP <200ms under controlled benchmark conditions.
- Lazy-load video embeds only on request; avoid autoplay.
- Use next/image or optimized images with width/height and source licenses; avoid heavy unneeded banners.
- Use route-level code splitting and paginated search results; audit Lighthouse, Web Vitals and axe.

## 11. Implementation milestones

### M0 — Content gate (before polished UI)
- [ ] Parse source Rxx records and verify content IDs.
- [ ] Validate 36 weekly plans, 216 daily outline items, 24 modules and 6 phases.
- [ ] Catalog videos, publisher chapter offsets, compatibility notes and gaps.
- [ ] Write detailed lesson content where the outlines alone are insufficient.
- [ ] Confirm active URL availability manually and via a link check report.

### M1 — Design system and responsive shell
- [ ] Implement exact light theme palette, typography, reusable buttons/cards/badges/tabs, responsive sidebar, topbar and mobile nav.
- [ ] Build visual design demo for dashboard + lesson workbench; confirm **zero unwanted hues**.
- [ ] Run contrast, focus, reduced-motion and responsive tests.

### M2 — Browseable curriculum
- [ ] Real six-phase roadmap with 36 weeks.
- [ ] Week pages, modules, learning-day pages all driven by shared content.
- [ ] Resource library with searching/filtering, clear source labels and timestamps.
- [ ] Correct states for missing/unreviewed video or links.

### M3 — Useful learner features
- [ ] Guest progress with persistence or authenticated data sync.
- [ ] Actual saved notes, bookmarks and checklists.
- [ ] Resume learning and weekly project assessment records.
- [ ] Progress stats derived from actual records, not arbitrary values.

### M4 — Production hardening
- [ ] Content validation tests, component tests, integration tests, e2e critical path.
- [ ] Accessibility audit, mobile layouts, performance budget.
- [ ] Security checks and durable backup/export mechanism.
- [ ] Error tracking and content review dashboard.
- [ ] Deploy working site and document setup, environment and release process.

## 12. Quality assurance and acceptance

### End-to-end scenarios — must pass
1. Fresh visitor can browse phases → Week 1 → Monday → official docs → video start timestamp without login.
2. Learner can mark a reading complete and see persistently updated percentage after refresh (with account or explicit guest storage).
3. Learner can save a note and bookmark a video chapter and find both later.
4. Search `SQLAlchemy` returns M11 resources and Week 16, no irrelevant fabricated results.
5. Video V05 chapter `01:59:51` opens at 7191 seconds; V06 `03:42:09` at 13329 seconds.
6. Resource V10 is available only as an explicitly labeled legacy supplement; it is not promoted above V05.
7. A user cannot edit another user's progress, notes or assessment evidence.
8. Assessment 'passed' is gated by actual rubric/evidence and critical tests; watching a video alone never earns a pass.
9. On 360px mobile, roadmap, header, lesson and media panels are usable with no accidental horizontal overflow.
10. Keyboard-only navigation can reach and activate every critical button; visible focus ring uses forest/terracotta.
11. Code blocks are readable in charcoal/ivory, and third-party syntax highlighting contains no excluded hues.
12. A missing URL or video displays a working fallback and report-issue action instead of a broken empty iframe.
13. Week totals show 15h, course totals 540h, counts 6/24/36/216 from real seed data.
14. Source status is accurately shown as original-publisher-listed versus editor-reviewed.
15. Dark mode (if shipped) passes same color and contrast checks.

### UI pixel/quality checklist
- [ ] No blue, purple, violet or indigo pixels in intended UI chrome, including component library defaults.
- [ ] No generic gradient blob hero; editorial composition with distinct spacing hierarchy.
- [ ] Consistent 8px spacing scale and alignment.
- [ ] Beautiful hover, pressed, disabled, loading and success states.
- [ ] No placeholder lorem ipsum, fake links, inert switches or fake testimonials.
- [ ] At least one empty state and one error state designed for each persisted collection.
- [ ] Every displayed source chapter maps to a real registered source ID.

### Definition of done
**A website is complete only if it supports a learner's real end-to-end workflow (learn → practice → save evidence → assess → resume) with real data, tested persistence, responsive UI, accessibility and source transparency.** Merely presenting a visually pleasing landing page does not satisfy this brief.

## 13. Design references and implementation guardrails

### Technical documentation to consult
- [Next.js documentation](https://nextjs.org/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [YouTube embedded player parameters](https://developers.google.com/youtube/player_parameters)
- [PostgreSQL documentation](https://www.postgresql.org/docs/current/)
- [FastAPI documentation](https://fastapi.tiangolo.com/)

### Final instruction for implementing agent
**Build with precision, not just aesthetics.** First ingest and validate the companion curriculum file. Then prototype three fully functioning vertical slices: Dashboard → Week detail → Lesson; Resource Library → Chapter link; Project → Assessment → Progress. Only then scale to the remaining screens. Reject components that import unapproved colors. Preserve the learning-source evidence and visible research status at every step. If detailed lessons for all 216 days have not been authored yet, visibly label their outline status and never present them as fully authored instructional material.
