# Backend Mastery — Curriculum, Sources & Video Research
**Research edition:** 2026-10-11  |  **Program:** 36 weeks · 24 modules · 6 levels · 15 hours/week · 540 scheduled hours  |  **Format:** portable Markdown

> **Scope and verification:** This is a curated, structured research and learning plan, not a claim that every external video has been watched, every page manually tested today, or every exercise auto-graded. Video chapter timestamps labeled **publisher-listed** were checked against publicly indexed original YouTube descriptions. Official docs are prioritized for version-sensitive instructions. A flagged video or a resource with no dedicated reviewed video must not be advertised as fully audited. Links may change. Recheck at launch.

## Table of contents — what is in each section
1. [How to use this guide](#1-how-to-use-this-guide) — sequence, daily hours, outcome, and study method
2. [Research and trust policy](#2-research-and-trust-policy) — selection standard, verification labels, version warnings
3. [Written source register](#3-written-source-register) — resource IDs, URLs, scope, module mapping
4. [Video course register](#4-video-course-register) — instructors, direct links, publication, usage, limitations
5. [Publisher-listed video chapter timestamps](#5-publisher-listed-video-chapter-timestamps) — topic-specific time links
6. [The complete 24-module learning map](#6-the-complete-24-module-learning-map) — objectives, sources, outcomes, project
7. [Week-by-week daily syllabus](#7-week-by-week-daily-syllabus) — 36 weeks × 6 study days, deliverables and checks
8. [Project ladder and acceptance criteria](#8-project-ladder-and-acceptance-criteria) — portfolio projects
9. [Checklists and assessment rubric](#9-checklists-and-assessment-rubric) — daily/weekly progress rules
10. [Research gaps and ongoing maintenance](#10-research-gaps-and-ongoing-maintenance) — limits, audit backlog and metadata
11. [Content contracts for website import](#11-content-contracts-for-website-import) — suggested data schema and link rules

## 1. How to use this guide
- **Monday–Friday: 2 hours/day** (concepts, guided coding, practice, debugging, testing). **Saturday: 5 hours** (independent build and weekly checkpoint). **Sunday: rest or catch-up**. Do not attempt 15 hours of passive video.
- Learning order: **read official reference → watch selected explanation → code from scratch → debug → test → document → reflect**. Videos are targeted supplements; do not watch entire 12–14 hour courses every time a lesson is assigned.
- A weekly pass requires working submission, explanation in your own words, evidence for key edge cases and **≥8/10 on the rubric** in §9. Checkboxes for reading and watching are not the same as a passed coding assessment.
- Interpret **weeks** as a paced learning proposal, not a guarantee of employment, mastery, or a fixed completion time. Review and adapt whenever you need more practice.

## 2. Research and trust policy
**Selection rubric (100 points):** technical correctness (30), teaching clarity (20), practical depth (20), current-version compatibility (15), objective coverage (10), accessibility/navigation (5). A video must also have a real publisher/creator, identifiable content, and sufficiently safe, non-misleading instructions before approval.

**Status labels for eventual website:**
- `DOC_OFFICIAL`: maintainer/standard-owner documentation; default technical authority. Specific path checked during research, but not live-monitored.
- `VIDEO_CHAPTERS_CONFIRMED`: original YouTube description exposed chapter list; time offsets are **chapter starts**, not independently reviewed subtopic endpoints.
- `VIDEO_NO_CHAPTER_AUDIT`: video title/identity confirmed, but chapter positions not available/verified in this research.
- `LEGACY_SUPPLEMENT`: older teaching helps concepts; replace stale security/installation steps with official docs.
- `NEEDS_MANUAL_REVIEW`: not approved for prominent placement until current availability/content verified.

**Version guardrails:** Use SQLAlchemy **2.x** typed mappings and sessions; Pydantic **v2**; FastAPI modern lifespan/dependency APIs; PostgreSQL current official docs; `pwdlib[argon2]` for new password hashes per FastAPI documentation. The advanced 2024 video uses **SQLModel** and demonstrates **Passlib**; it is not a drop-in tutorial for the chosen SQLAlchemy 2.x stack. The 2020 Docker installation screens and 2023 PostgreSQL Windows installation are historical. Prefer official current installation guides.

## 3. Written source register
The identifier (Rxx) is reused in the module and weekly maps. Module `site` refers to building the learning platform, not learning backend engineering.

| ID | Official / credible source and direct URL | What to read there | Used in module(s) | Role |
|---|---|---|---|---|
| R01 | [Python official tutorial](https://docs.python.org/3/tutorial/) | Python foundations, types, functions, modules, OOP | 1 | primary |
| R02 | [Python asyncio](https://docs.python.org/3/library/asyncio.html) | Event loops, tasks, cancellation, coroutines | 1,17 | primary |
| R03 | [Python venv](https://docs.python.org/3/library/venv.html) | Reproducible virtual environments | 1,3 | primary |
| R04 | [PyPA packaging user guide](https://packaging.python.org/en/latest/tutorials/installing-packages/) | Installing packages, pip and dependency practice | 1,3 | primary |
| R05 | [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) | HTTP request-response lifecycle, clients and servers | 2,4 | primary |
| R06 | [HTTP Semantics RFC 9110](https://www.rfc-editor.org/rfc/rfc9110) | Methods, statuses, safety, idempotency | 2,4,8 | reference |
| R07 | [HTTP Caching RFC 9111](https://www.rfc-editor.org/rfc/rfc9111) | Cache semantics | 8 | reference |
| R08 | [Pro Git](https://git-scm.com/book/en/v2) | Version control, collaboration, branches, merges | 3 | primary |
| R09 | [GitHub Docs](https://docs.github.com/en/get-started) | Remote repositories, pull requests, review | 3 | primary |
| R10 | [Postman learning center](https://learning.postman.com/docs/getting-started/quick-start) | API requests and collections | 3,4 | supplement |
| R11 | [FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/) | Routes, validation, deps, security, testing | 5,7,8,13,15 | primary |
| R12 | [FastAPI dependencies](https://fastapi.tiangolo.com/tutorial/dependencies/) | Dependency injection and cleanup | 7 | primary |
| R13 | [FastAPI response models](https://fastapi.tiangolo.com/tutorial/response-model/) | Response contracts and information exposure | 5,8 | primary |
| R14 | [FastAPI settings](https://fastapi.tiangolo.com/advanced/settings/) | Typed configuration | 7 | primary |
| R15 | [FastAPI WebSockets](https://fastapi.tiangolo.com/advanced/websockets/) | Real-time bi-directional communications | 19 | primary |
| R16 | [FastAPI security JWT](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/) | JWT and password hashing with pwdlib Argon2 | 13 | primary |
| R17 | [FastAPI testing](https://fastapi.tiangolo.com/tutorial/testing/) | TestClient and dependency overrides | 15 | primary |
| R18 | [Pydantic concepts](https://docs.pydantic.dev/latest/concepts/models/) | Pydantic models and validation | 6 | primary |
| R19 | [Pydantic validators](https://docs.pydantic.dev/latest/concepts/validators/) | Field/model validators | 6 | primary |
| R20 | [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html) | SQL and database foundations | 9 | primary |
| R21 | [PostgreSQL SQL language](https://www.postgresql.org/docs/current/sql.html) | SQL commands and syntax | 9,10 | reference |
| R22 | [PostgreSQL indexes](https://www.postgresql.org/docs/current/indexes.html) | Index types, planning and tradeoffs | 10,12,24 | primary |
| R23 | [PostgreSQL concurrency](https://www.postgresql.org/docs/current/mvcc.html) | MVCC and isolation | 10,20 | primary |
| R24 | [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html) | Execution plans, estimates, actuals | 10,12,24 | primary |
| R25 | [PostgreSQL backup/restore](https://www.postgresql.org/docs/current/backup.html) | Backup methods and recovery | 12,23 | primary |
| R26 | [SQLAlchemy ORM quickstart](https://docs.sqlalchemy.org/en/20/orm/quickstart.html) | Models, relationships and sessions | 11 | primary |
| R27 | [SQLAlchemy session basics](https://docs.sqlalchemy.org/en/20/orm/session_basics.html) | Transaction lifecycle | 11 | primary |
| R28 | [SQLAlchemy async ORM](https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html) | Async engines and sessions | 11,17 | primary |
| R29 | [Alembic tutorial](https://alembic.sqlalchemy.org/en/latest/tutorial.html) | Migration workflow | 12 | primary |
| R30 | [OWASP API Security Top 10 (2023)](https://owasp.org/API-Security/editions/2023/en/0x11-t10/) | API authorization and security risks | 14 | primary |
| R31 | [OAuth 2.0 Security BCP (RFC 9700)](https://www.rfc-editor.org/rfc/rfc9700.html) | OAuth security best practices | 13,14 | reference |
| R32 | [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) | Authentication layer over OAuth2 | 13 | reference |
| R33 | [pytest docs](https://docs.pytest.org/en/stable/) | Fixtures, parametrization, execution | 15 | primary |
| R34 | [HTTPX docs](https://www.python-httpx.org/) | Async clients and testing | 15,17 | primary |
| R35 | [Architecture Patterns with Python](https://www.cosmicpython.com/book/preface.html) | Layers, repositories, unit of work | 16 | supplement |
| R36 | [Ruff docs](https://docs.astral.sh/ruff/) | Linting and formatting | 16 | primary |
| R37 | [Redis docs](https://redis.io/docs/latest/) | Caching, TTL, Streams and data types | 18 | primary |
| R38 | [Celery docs](https://docs.celeryq.dev/en/stable/) | Job queues, retries, workers | 18 | primary |
| R39 | [MDN Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) | SSE APIs and client usage | 19 | primary |
| R40 | [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) | Reliability, security, performance tradeoffs | 20,23 | reference |
| R41 | [Docker getting started](https://docs.docker.com/get-started/) | Containers, images, Dockerfiles | 21 | primary |
| R42 | [Docker Compose docs](https://docs.docker.com/compose/) | Multi-service local environment | 21 | primary |
| R43 | [GitHub Actions getting started](https://docs.github.com/en/actions/get-started) | CI/CD workflow fundamentals | 22 | primary |
| R44 | [OpenTelemetry Python](https://opentelemetry.io/docs/languages/python/) | Instrumentation and tracing | 23 | primary |
| R45 | [Prometheus overview](https://prometheus.io/docs/introduction/overview/) | Metrics and alerting | 23 | primary |
| R46 | [Grafana documentation](https://grafana.com/docs/grafana/latest/) | Dashboards and alerts | 23 | primary |
| R47 | [PgBouncer site](https://www.pgbouncer.org/) | PostgreSQL pooler behavior | 24 | primary |
| R48 | [Locust documentation](https://docs.locust.io/en/stable/) | Load testing and throughput | 24 | primary |
| R49 | [PostgreSQL routine vacuuming](https://www.postgresql.org/docs/current/routine-vacuuming.html) | Vacuum, autovacuum and bloat | 24 | primary |
| R50 | [YouTube embedded players](https://developers.google.com/youtube/player_parameters) | Video embedding, start offset and policies | site | reference |
| R51 | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Accessibility compliance | site | reference |
| R52 | [Next.js Docs](https://nextjs.org/docs) | Web framework reference | site | primary |
| R53 | [Tailwind CSS Docs](https://tailwindcss.com/docs) | Theme tokens and utilities | site | primary |
| R54 | [Prisma Docs](https://www.prisma.io/docs) | Web app ORM option | site | supplement |
| R55 | [PostgreSQL full manual](https://www.postgresql.org/docs/current/) | Authoritative Postgres reference | 9,10,12,24 | reference |
| R56 | [FastAPI CORS](https://fastapi.tiangolo.com/tutorial/cors/) | CORS configuration | 7,14 | primary |
| R57 | [FastAPI background tasks](https://fastapi.tiangolo.com/tutorial/background-tasks/) | Lightweight in-process background work | 18 | primary |
| R58 | [OAuth 2.0 RFC 6749](https://www.rfc-editor.org/rfc/rfc6749.html) | OAuth framework definitions and flow concepts | 13 | reference |
| R59 | [JSON Web Token RFC 7519](https://www.rfc-editor.org/rfc/rfc7519) | JWT registered claims format | 13 | reference |
| R60 | [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) | Practical security implementation patterns | 14 | primary |
| R61 | [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) | API contract details | 8 | reference |
| R62 | [SQLAlchemy loading relationships](https://docs.sqlalchemy.org/en/20/orm/queryguide/relationships.html) | Eager load N+1 optimization | 11,12 | primary |
| R63 | [SQLModel documentation](https://sqlmodel.tiangolo.com/) | Explain SQLModel used in Beyond CRUD video, not core stack | 11 | supplement |

## 4. Video course register
**Video source-of-truth:** creator and chapter metadata taken from the publicly indexed original YouTube descriptions, except V10 which is deliberately pending fresh verification. Channel popularity was not used as proof of correctness. Follow links to creators on YouTube, not unofficial copies.

| ID | Video, publisher, date | Best use / weeks | Research status and compatibility |
|---|---|---|---|
| V01 | [Python Full Course](https://www.youtube.com/watch?v=ix9cRaBkVe0) — Bro Code (2024-08-20) | Weeks 1–3; beginner | **VIDEO_CHAPTERS_CONFIRMED.** Verified published chapter list; skip GUI, games optional. |
| V02 | [APIs for Beginners – How to use an API](https://www.youtube.com/watch?v=WXsD0ZgxjRw) — Craig Dennis / freeCodeCamp (2023-02-06) | Weeks 4–5; beginner | **VIDEO_CHAPTERS_CONFIRMED.** Concepts evergreen; external tool examples may change. |
| V03 | [Git & GitHub Crash Course for Beginners [2026]](https://www.youtube.com/watch?v=mAFoROnOfHs) — freeCodeCamp / Sumit Saha (2025-12-04) | Weeks 5; beginner | **VIDEO_CHAPTERS_CONFIRMED.** Use publisher chapter list; published 2025 although title says 2026. |
| V04 | [PostgreSQL Tutorial for Beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk) — Alexandru Cristian / freeCodeCamp (2023-10-13) | Weeks 13–14; beginner | **VIDEO_CHAPTERS_CONFIRMED.** Useful for SELECT and aggregates; not enough for joins, indexes, transactions. |
| V05 | [Python FastAPI Tutorial: Full Course](https://www.youtube.com/watch?v=iukOehU5aF4) — Corey Schafer (2026-04-30) | Weeks 6–12,16–19,22,31–32; beginner→advanced | **VIDEO_CHAPTERS_CONFIRMED.** Primary guided FastAPI video. Covers HTML too; skip optional frontend segments. |
| V06 | [FastAPI Beyond CRUD Full Course](https://www.youtube.com/watch?v=TO4aQ3ghFOc) — Ssali Jonathan (2024-08-10) | Weeks 9,12,17,19–22,26; intermediate | **VIDEO_CHAPTERS_CONFIRMED.** Uses SQLModel and older Passlib code; map to SQLAlchemy and current pwdlib Argon2. |
| V07 | [Python AsyncIO – Complete Guide](https://www.youtube.com/watch?v=oAkLSJNr5zY) — Corey Schafer (2025-08-20) | Weeks 3,25; intermediate | **VIDEO_NO_CHAPTER_AUDIT.** Excellent concurrency explanation; no publisher timestamps obtained. |
| V08 | [Asyncio in Python – Full Tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA) — Tech With Tim (2024-04-05) | Weeks 25; intermediate | **VIDEO_CHAPTERS_CONFIRMED.** Verified published chapters: event loop, coroutines, tasks, futures, synchronization. |
| V09 | [Docker Tutorial for Beginners [FULL COURSE in 3 Hours]](https://www.youtube.com/watch?v=3c-iBn73dDE) — TechWorld with Nana (2020-10-21) | Weeks 31; beginner | **VIDEO_CHAPTERS_CONFIRMED.** Older install/CLI examples; use current Docker docs. |
| V10 | [FastAPI for Beginners](https://www.youtube.com/watch?v=tLKKmouUams) — Code With Tomi / freeCodeCamp (2021-08-12) | Weeks 6–7; supplement | **LEGACY_SUPPLEMENT; VIDEO_CHAPTERS_CONFIRMED.** Original video verified with publisher chapter list; legacy content, not default source for current FastAPI. |

**Verified original video IDs:** V01 `ix9cRaBkVe0`, V02 `WXsD0ZgxjRw`, V03 `mAFoROnOfHs`, V04 `SpfIwlAYaKk`, V05 `iukOehU5aF4`, V06 `TO4aQ3ghFOc`, V07 `oAkLSJNr5zY`, V08 `Qb9s3UiMSTA`, V09 `3c-iBn73dDE`. V10 is confirmed but should be kept supplemental, not auto-promoted as the primary modern FastAPI course.

**Useful companion repositories:** [Corey Schafer FastAPI full-course source](https://github.com/CoreyMSchafer/FastAPI-Full-Course) and [Ssali Jonathan Beyond CRUD source](https://github.com/jod35/fastapi-beyond-CRUD). Treat demo repos as examples; inspect their requirements and security posture before running them.

## 5. Publisher-listed video chapter timestamps
Every time below represents a chapter **start** listed by the publisher, not a verified lesson duration. Use the following chapter start as an approximate end boundary only when it immediately follows in the same video. A deep link uses YouTube `t=` in seconds; the hosting app should preserve it. Publication and URL verification do not certify unchanged video content.

### V01 — [Python Full Course](https://www.youtube.com/watch?v=ix9cRaBkVe0)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| Variables | `00:05:49` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=349s) |
| Conditionals | `00:51:46` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=3106s) |
| While loops | `01:51:55` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=6715s) |
| For loops | `02:06:28` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=7588s) |
| Collections | `02:23:03` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=8583s) |
| Dictionaries | `03:03:27` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=11007s) |
| Functions | `03:52:12` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=13932s) |
| Comprehensions | `04:45:56` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=17156s) |
| Modules | `05:02:13` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=18133s) |
| OOP | `06:32:32` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=23552s) |
| Inheritance | `06:53:06` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=24786s) |
| Decorators | `08:07:33` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=29253s) |
| Exception handling | `08:14:57` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=29697s) |
| File writing | `08:27:47` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=30467s) |
| Requests / API data | `09:13:45` | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=33225s) |

### V02 — [APIs for Beginners – How to use an API](https://www.youtube.com/watch?v=WXsD0ZgxjRw)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| Defining API | `00:08:49` | [Watch chapter](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=529s) |
| How web works | `00:18:17` | [Watch chapter](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=1097s) |
| REST constraints | `00:23:21` | [Watch chapter](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=1401s) |
| Exploring APIs | `00:29:06` | [Watch chapter](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=1746s) |
| Command line API | `00:45:01` | [Watch chapter](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=2701s) |
| Curl | `00:56:20` | [Watch chapter](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=3380s) |
| API explorer tools | `01:14:21` | [Watch chapter](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=4461s) |
| Writing server-side API | `02:37:08` | [Watch chapter](https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=9428s) |

### V03 — [Git & GitHub Crash Course for Beginners [2026]](https://www.youtube.com/watch?v=mAFoROnOfHs)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| Git versus GitHub | `00:04:01` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=241s) |
| Install Git | `00:09:37` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=577s) |
| git init | `00:14:41` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=881s) |
| git status | `00:20:20` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=1220s) |
| git add | `00:21:43` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=1303s) |
| git commit | `00:30:22` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=1822s) |
| Branching | `00:40:58` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=2458s) |
| Merge conflicts | `00:47:43` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=2863s) |
| Push | `00:57:18` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=3438s) |
| git stash | `01:03:16` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=3796s) |
| Pull requests | `01:16:48` | [Watch chapter](https://www.youtube.com/watch?v=mAFoROnOfHs&t=4608s) |

### V04 — [PostgreSQL Tutorial for Beginners](https://www.youtube.com/watch?v=SpfIwlAYaKk)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| Installation | `00:02:03` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=123s) |
| SELECT | `00:17:12` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=1032s) |
| SELECT DISTINCT | `00:31:17` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=1877s) |
| WHERE | `00:54:03` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=3243s) |
| ORDER BY | `01:27:56` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=5276s) |
| LIMIT | `01:35:21` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=5721s) |
| LIKE/ILIKE | `01:54:18` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=6858s) |
| Aggregate functions | `02:14:28` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=8068s) |
| GROUP BY | `02:20:02` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=8402s) |
| HAVING | `02:38:22` | [Watch chapter](https://www.youtube.com/watch?v=SpfIwlAYaKk&t=9502s) |

### V05 — [Python FastAPI Tutorial: Full Course](https://www.youtube.com/watch?v=iukOehU5aF4)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| Getting started | `00:00:00` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=0s) |
| Path parameters/errors | `00:59:53` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=3593s) |
| Pydantic schemas | `01:36:09` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=5769s) |
| SQLAlchemy/database | `01:59:51` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=7191s) |
| CRUD update/delete | `03:01:54` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=10914s) |
| Sync vs async | `03:37:35` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=13055s) |
| Routers | `04:08:58` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=14938s) |
| JWT authentication | `04:56:21` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=17781s) |
| Authorization | `05:52:58` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=21178s) |
| File uploads | `06:30:32` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=23432s) |
| Pagination | `07:04:13` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=25453s) |
| Password reset | `07:40:06` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=27606s) |
| PostgreSQL/Alembic | `08:38:03` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=31083s) |
| Pytest/testing | `10:11:44` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=36704s) |
| VPS deployment | `11:33:16` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=41596s) |
| Docker deployment | `13:04:21` | [Watch chapter](https://www.youtube.com/watch?v=iukOehU5aF4&t=47061s) |

### V06 — [FastAPI Beyond CRUD Full Course](https://www.youtube.com/watch?v=TO4aQ3ghFOc)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| Routers | `01:23:37` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=5017s) |
| SQLModel database | `01:38:22` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=5902s) |
| Configuration | `01:44:13` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=6253s) |
| Async SQLModel | `01:53:38` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=6818s) |
| Service classes | `02:29:48` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=8988s) |
| Dependency injection | `02:55:53` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=10553s) |
| Alembic | `03:42:09` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=13329s) |
| Passlib historical example – do not copy unchanged | `04:18:55` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=15535s) |
| JWT authentication | `04:42:57` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=16977s) |
| Refresh tokens | `05:33:14` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=19994s) |
| Redis revocation | `05:50:04` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=21004s) |
| RBAC | `06:07:39` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=22059s) |
| Exception handling | `07:59:58` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=28798s) |
| Middleware | `08:33:25` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=30805s) |
| CORS | `09:00:21` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=32421s) |
| Password resets | `10:07:51` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=36471s) |
| Background tasks | `10:40:38` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=38438s) |
| Celery/Redis | `10:45:44` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=38744s) |
| Flower | `11:16:17` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=40577s) |
| Pytest | `11:37:10` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=41830s) |
| Deployment | `12:09:17` | [Watch chapter](https://www.youtube.com/watch?v=TO4aQ3ghFOc&t=43757s) |

### V08 — [Asyncio in Python – Full Tutorial](https://www.youtube.com/watch?v=Qb9s3UiMSTA)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| When to use async | `00:00:48` | [Watch chapter](https://www.youtube.com/watch?v=Qb9s3UiMSTA&t=48s) |
| Event loop | `00:02:04` | [Watch chapter](https://www.youtube.com/watch?v=Qb9s3UiMSTA&t=124s) |
| Coroutines | `00:02:47` | [Watch chapter](https://www.youtube.com/watch?v=Qb9s3UiMSTA&t=167s) |
| Tasks | `00:09:52` | [Watch chapter](https://www.youtube.com/watch?v=Qb9s3UiMSTA&t=592s) |
| Futures | `00:16:50` | [Watch chapter](https://www.youtube.com/watch?v=Qb9s3UiMSTA&t=1010s) |
| Synchronization | `00:18:23` | [Watch chapter](https://www.youtube.com/watch?v=Qb9s3UiMSTA&t=1103s) |

### V10 — [FastAPI for Beginners](https://www.youtube.com/watch?v=tLKKmouUams)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| First API and installation | `00:01:10` | [Watch chapter](https://www.youtube.com/watch?v=tLKKmouUams&t=70s) |
| Path parameters | `00:15:35` | [Watch chapter](https://www.youtube.com/watch?v=tLKKmouUams&t=935s) |
| Query parameters | `00:27:24` | [Watch chapter](https://www.youtube.com/watch?v=tLKKmouUams&t=1644s) |
| Request body / POST | `00:39:50` | [Watch chapter](https://www.youtube.com/watch?v=tLKKmouUams&t=2390s) |
| PUT method | `00:46:58` | [Watch chapter](https://www.youtube.com/watch?v=tLKKmouUams&t=2818s) |
| DELETE method | `01:00:26` | [Watch chapter](https://www.youtube.com/watch?v=tLKKmouUams&t=3626s) |

### V09 — [Docker Tutorial for Beginners [FULL COURSE in 3 Hours]](https://www.youtube.com/watch?v=3c-iBn73dDE)
| Chapter | Publisher start | Open at time |
|---|---:|---|
| What is Docker | `00:01:58` | [Watch chapter](https://www.youtube.com/watch?v=3c-iBn73dDE&t=118s) |
| Container basics | `00:10:56` | [Watch chapter](https://www.youtube.com/watch?v=3c-iBn73dDE&t=656s) |
| Docker commands | `00:42:02` | [Watch chapter](https://www.youtube.com/watch?v=3c-iBn73dDE&t=2522s) |
| Debugging | `00:57:15` | [Watch chapter](https://www.youtube.com/watch?v=3c-iBn73dDE&t=3435s) |
| Compose | `01:29:49` | [Watch chapter](https://www.youtube.com/watch?v=3c-iBn73dDE&t=5389s) |
| Dockerfile | `01:42:02` | [Watch chapter](https://www.youtube.com/watch?v=3c-iBn73dDE&t=6122s) |
| Volumes | `02:27:26` | [Watch chapter](https://www.youtube.com/watch?v=3c-iBn73dDE&t=8846s) |
| Persistence demo | `02:33:03` | [Watch chapter](https://www.youtube.com/watch?v=3c-iBn73dDE&t=9183s) |

**V07 Corey Schafer AsyncIO:** [watch full video](https://www.youtube.com/watch?v=oAkLSJNr5zY). No trustworthy chapter starts were captured; the website must not generate artificial timestamps for it.

## 6. The complete 24-module learning map
Each module provides a **learning target**, where to read/watch, a hands-on artefact and an assessment expectation. `none reviewed` explicitly means no dedicated time-indexed video has passed research yet; documentation and practical exercises remain available.

### M01. Python programming — weeks 1–3
- **Core coverage:** Control flow, OOP, files, typing, async introduction.
- **Read first:** R01, R02, R03, R04.
- **Targeted videos:** V01 V07.
- **Build:** CLI contact manager; expense tracker; API data fetcher.
- **Pass when:** Write and test maintainable Python components.

### M02. Internet and HTTP — weeks 4
- **Core coverage:** Client/server, DNS, TCP, HTTPS, headers, cookies, statelessness.
- **Read first:** R05, R06.
- **Targeted videos:** V02.
- **Build:** HTTP request inspector.
- **Pass when:** Explain full HTTP request lifecycle.

### M03. Developer tools — weeks 5
- **Core coverage:** Git, GitHub, curl, Postman, environment setup.
- **Read first:** R08, R09, R10.
- **Targeted videos:** V03.
- **Build:** Git branch and PR practice.
- **Pass when:** Create reproducible repository and resolve merge conflict.

### M04. REST fundamentals — weeks 5–6
- **Core coverage:** Methods, status codes, resources, idempotency, errors.
- **Read first:** R06, R10.
- **Targeted videos:** V02 V05.
- **Build:** Task Manager CRUD API.
- **Pass when:** Defend endpoint choices and test error cases.

### M05. FastAPI essentials — weeks 7
- **Core coverage:** Routes, responses, params, routers, docs.
- **Read first:** R11, R13.
- **Targeted videos:** V05.
- **Build:** Book Library CRUD.
- **Pass when:** Build API from scratch and document in OpenAPI.

### M06. Pydantic validation — weeks 8
- **Core coverage:** BaseModel, validators, schema separation, serialization.
- **Read first:** R18, R19.
- **Targeted videos:** V05.
- **Build:** Student Registration API.
- **Pass when:** Reject bad inputs and protect response fields.

### M07. FastAPI intermediate — weeks 9
- **Core coverage:** Depends, middleware, lifespan, settings, files.
- **Read first:** R12, R14, R56.
- **Targeted videos:** V05 V06.
- **Build:** Document Management API.
- **Pass when:** Explain dependency lifecycle and middleware.

### M08. Professional REST design — weeks 10–12
- **Core coverage:** Pagination, filtering, versioning, ETags, OpenAPI.
- **Read first:** R06, R07, R13, R61.
- **Targeted videos:** V05 V02.
- **Build:** Product Catalog API.
- **Pass when:** Deliver independent consumer-facing API contract.

### M09. SQL fundamentals — weeks 13–14
- **Core coverage:** DDL/DML, JOINs, CTEs, windows, transactions.
- **Read first:** R20, R21.
- **Targeted videos:** V04.
- **Build:** University and order reporting SQL.
- **Pass when:** Write nontrivial JOIN and aggregate queries.

### M10. PostgreSQL engineering — weeks 15
- **Core coverage:** JSONB, normalization, indexes, MVCC, EXPLAIN.
- **Read first:** R22, R23, R24, R55.
- **Targeted videos:** No dedicated approved video; use official references; video review pending.
- **Build:** Index/plan benchmark.
- **Pass when:** Explain before/after query plans.

### M11. FastAPI and PostgreSQL integration — weeks 16
- **Core coverage:** SQLAlchemy 2 ORM, sessions, relationships, transactions.
- **Read first:** R26, R27, R28, R62, R63.
- **Targeted videos:** V05 V06.
- **Build:** Persistent Product Catalog.
- **Pass when:** CRUD with transaction integrity and session lifecycle.

### M12. Migrations and query optimization — weeks 17–18
- **Core coverage:** Alembic, safe migrations, N+1, backup.
- **Read first:** R29, R24, R25, R62.
- **Targeted videos:** V05 V06.
- **Build:** Inventory System.
- **Pass when:** Apply migration and prove query optimization.

### M13. Authentication — weeks 19–20
- **Core coverage:** Argon2, JWT, refresh, OAuth2, OIDC, sessions, reset.
- **Read first:** R16, R31, R32, R58, R59.
- **Targeted videos:** V05 V06.
- **Build:** Auth API.
- **Pass when:** Test registration/login/rotation/expiry.

### M14. Authorization and security — weeks 21
- **Core coverage:** RBAC, BOLA, injection, CSRF, rate limiting, secrets.
- **Read first:** R30, R60, R56.
- **Targeted videos:** V05 V06.
- **Build:** RBAC protected API.
- **Pass when:** Block horizontal privilege escalation.

### M15. Automated testing — weeks 22
- **Core coverage:** pytest, fixtures, HTTPX, isolation, mocks.
- **Read first:** R17, R33, R34.
- **Targeted videos:** V05 V06.
- **Build:** Auth/Inventory test suite.
- **Pass when:** Test happy/unhappy paths plus security.

### M16. Clean architecture — weeks 23–24
- **Core coverage:** Layering, service/repository, SOLID, typing, lint.
- **Read first:** R35, R36.
- **Targeted videos:** V06.
- **Build:** Refactored backend.
- **Pass when:** Change business rule in isolation.

### M17. Async and concurrency — weeks 25
- **Core coverage:** event loop, cancellation, async DB, benchmarks.
- **Read first:** R02, R28, R34.
- **Targeted videos:** V07 V08 V05.
- **Build:** Async data aggregator.
- **Pass when:** Measure and explain concurrency effects.

### M18. Redis and background processing — weeks 26
- **Core coverage:** cache invalidation, job queues, retries, idempotency.
- **Read first:** R37, R38, R57.
- **Targeted videos:** V06.
- **Build:** Notification workers.
- **Pass when:** Recover from failure without duplicate side effects.

### M19. Realtime and integration — weeks 27
- **Core coverage:** WebSockets, SSE, webhooks, REST/gRPC tradeoffs.
- **Read first:** R15, R39.
- **Targeted videos:** none dedicated reviewed.
- **Build:** Realtime notifications.
- **Pass when:** Prove reconnect + webhook signature verification.

### M20. System design — weeks 28–30
- **Core coverage:** scaling, CQRS intro, outbox, eventual consistency, capacity.
- **Read first:** R40, R23.
- **Targeted videos:** none dedicated reviewed.
- **Build:** E-commerce design & implementation.
- **Pass when:** Write architecture and failure scenarios.

### M21. Docker and infrastructure — weeks 31
- **Core coverage:** Dockerfile, Compose, volumes, health checks.
- **Read first:** R41, R42.
- **Targeted videos:** V09 V05.
- **Build:** Containerized backend.
- **Pass when:** Reproduce full stack on clean machine.

### M22. CI/CD deployment — weeks 32
- **Core coverage:** GitHub Actions, secrets, HTTPS, rollout/rollback.
- **Read first:** R43, R41.
- **Targeted videos:** V05.
- **Build:** Deployment pipeline.
- **Pass when:** Pipeline runs tests and repeatably deploys.

### M23. Observability — weeks 33
- **Core coverage:** logs, metrics, traces, alerts, SLOs, recovery.
- **Read first:** R44, R45, R46, R25.
- **Targeted videos:** No dedicated approved video; use official references; video review pending.
- **Build:** Monitoring dashboard.
- **Pass when:** Trace latency and demonstrate recovery.

### M24. PostgreSQL and performance — weeks 34–36
- **Core coverage:** EXPLAIN, VACUUM, PgBouncer, load tests, capstone.
- **Read first:** R22, R24, R47, R48, R49.
- **Targeted videos:** none dedicated reviewed.
- **Build:** SaaS capstone.
- **Pass when:** Measure performance and deploy robust system.

## 7. Week-by-week daily syllabus
Every row follows the same time budget: Monday–Friday each **2h**, Saturday **5h**. Daily instructions should be expanded to detailed pages inside the website using the resource IDs and tasks below; here the tasks identify the complete 216-day scope. Always replace passive completion with observable output.

### Week 01 — Python syntax and control flow (M01)
**Focus:** Types, expressions, conditions, loops, collections, functions. **Resources:** R01, R03. **Video:** V01.

- **Mon · 2h:** Install Python, editor; run scripts; explain variables/types.
- **Tue · 2h:** Write type conversion, conditions and operators exercises.
- **Wed · 2h:** Solve eight loop and iteration problems.
- **Thu · 2h:** Manipulate lists, dictionaries, sets and strings.
- **Fri · 2h:** Write reusable functions and test five cases.
- **Sat · 5h:** BUILD: CLI Contact Manager with add/search/edit/delete.
- **Weekly artefact:** CLI contact manager.
- **Checkpoint:** Uses functions and collections; handles missing contacts gracefully.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 02 — Python modules, files and OOP (M01)
**Focus:** Packages, exceptions, JSON/CSV, classes and type hints. **Resources:** R01, R03, R04. **Video:** V01.

- **Mon · 2h:** Use virtualenv and install a dependency.
- **Tue · 2h:** Read/write JSON and CSV with safe error handling.
- **Wed · 2h:** Implement classes and object composition.
- **Thu · 2h:** Practice inheritance, dataclasses and enums.
- **Fri · 2h:** Add type hints, comprehensions and generators.
- **Sat · 5h:** BUILD: JSON Expense Tracker with CSV export.
- **Weekly artefact:** Expense tracker.
- **Checkpoint:** Persists across runs and reports malformed files.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 03 — Practical Python engineering (M01)
**Focus:** Typing, tests, logging, profiling and async introduction. **Resources:** R01, R02, R33. **Video:** V01 V07.

- **Mon · 2h:** Structure a Python package and configure logs.
- **Tue · 2h:** Add pytest and debug a failing function.
- **Wed · 2h:** Implement iterator/generator and a decorator.
- **Thu · 2h:** Experiment with asyncio coroutines and await.
- **Fri · 2h:** Retrieve JSON from a public API, validate input.
- **Sat · 5h:** BUILD: CLI API Data Fetcher with tests.
- **Weekly artefact:** API data fetcher.
- **Checkpoint:** Uses defensive exception handling and at least ten tests.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 04 — HTTP and networking fundamentals (M02)
**Focus:** DNS, TLS, request-response, cookies and headers. **Resources:** R05, R06. **Video:** V02.

- **Mon · 2h:** Diagram client-server and DNS lookup.
- **Tue · 2h:** Inspect TCP, ports, HTTPS and TLS.
- **Wed · 2h:** Read HTTP headers and JSON bodies in DevTools.
- **Thu · 2h:** Trace cookies, sessions, status and proxies.
- **Fri · 2h:** Send curl requests and classify status codes.
- **Sat · 5h:** BUILD: HTTP request inspector and cheat sheet.
- **Weekly artefact:** HTTP inspector.
- **Checkpoint:** Explains request/response lifecycle and common status codes.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 05 — Git, API tooling and REST design (M03)
**Focus:** Version control, Postman, endpoint naming and method semantics. **Resources:** R08, R09, R10, R06. **Video:** V03 V02.

- **Mon · 2h:** Initialize Git repo and make clean commits.
- **Tue · 2h:** Clone, branch, merge, resolve a conflict.
- **Wed · 2h:** Run API requests in Postman and curl.
- **Thu · 2h:** Design resources, methods and error responses.
- **Fri · 2h:** Create versioned API spec and Postman collection.
- **Sat · 5h:** BUILD: Task API contract with ten requests.
- **Weekly artefact:** Task API specification.
- **Checkpoint:** Complete README, Postman collection and endpoint schema.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 06 — First working REST API (M04)
**Focus:** Basic FastAPI CRUD with no database. **Resources:** R11, R13, R17. **Video:** V05.

- **Mon · 2h:** Run a FastAPI app and view /docs.
- **Tue · 2h:** Implement create and list endpoints.
- **Wed · 2h:** Implement get/update/delete task routes.
- **Thu · 2h:** Validate bodies, path values and HTTP errors.
- **Fri · 2h:** Test success and error cases manually/automatically.
- **Sat · 5h:** BUILD: In-memory Task Manager API.
- **Weekly artefact:** Task Manager API.
- **Checkpoint:** Independent CRUD implementation; correct 201/204/404 behavior.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 07 — FastAPI core (M05)
**Focus:** ASGI, routes, query/path validation, APIRouter and docs. **Resources:** R11, R13. **Video:** V05.

- **Mon · 2h:** Understand ASGI vs HTTP and run server.
- **Tue · 2h:** Create path and query parameter routes.
- **Wed · 2h:** Define request/response models and status codes.
- **Thu · 2h:** Split routes with APIRouter.
- **Fri · 2h:** Inspect Swagger UI, OpenAPI and error responses.
- **Sat · 5h:** BUILD: Book Library API.
- **Weekly artefact:** Book API.
- **Checkpoint:** CRUD endpoints plus OpenAPI response examples.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 08 — Pydantic for reliable APIs (M06)
**Focus:** Typed schemas, nested validation and controlled responses. **Resources:** R18, R19. **Video:** V05.

- **Mon · 2h:** Create models with required/optional/default fields.
- **Tue · 2h:** Use Field constraints and strict values.
- **Wed · 2h:** Create nested objects and custom validators.
- **Thu · 2h:** Serialize, exclude secrets and use model config.
- **Fri · 2h:** Separate Create/Update/Response schemas; test validation.
- **Sat · 5h:** BUILD: Student Registration API.
- **Weekly artefact:** Student API.
- **Checkpoint:** Invalid data rejected, sensitive fields never returned.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 09 — FastAPI dependencies and middleware (M07)
**Focus:** Depends, lifespan, CORS, settings, logging. **Resources:** R12, R14, R56. **Video:** V05 V06.

- **Mon · 2h:** Build reusable Depends dependencies.
- **Tue · 2h:** Implement yield cleanup dependency.
- **Wed · 2h:** Create logging middleware and CORS policy.
- **Thu · 2h:** Handle custom exceptions and lifespan events.
- **Fri · 2h:** Build upload endpoint and typed settings.
- **Sat · 5h:** BUILD: Document Management API.
- **Weekly artefact:** Document API.
- **Checkpoint:** Trace middleware order and dependency cleanup.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 10 — REST API design for real clients (M08)
**Focus:** Pagination, contracts, errors and idempotency. **Resources:** R06, R07, R61, R13. **Video:** V05 V02.

- **Mon · 2h:** Design resources and URI standards.
- **Tue · 2h:** Add sorting, filtering and pagination.
- **Wed · 2h:** Standardize errors and document versions.
- **Thu · 2h:** Experiment with ETag, idempotency keys.
- **Fri · 2h:** Write OpenAPI examples and contract tests.
- **Sat · 5h:** BUILD: Product Catalog API v1.
- **Weekly artefact:** Product Catalog API.
- **Checkpoint:** Consistent API design and deterministic pagination.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 11 — FastAPI multi-module integration (M08)
**Focus:** Composition, pagination, refactoring, test seams. **Resources:** R11, R12, R17. **Video:** V05.

- **Mon · 2h:** Split project into routers, schema and configuration.
- **Tue · 2h:** Implement product/category endpoints.
- **Wed · 2h:** Add reusable search/filter functions.
- **Thu · 2h:** Centralize handlers and dependency boundaries.
- **Fri · 2h:** Add basic unit/API tests and API docs.
- **Sat · 5h:** BUILD: Refactor Product Catalog to modular app.
- **Weekly artefact:** Modular catalog API.
- **Checkpoint:** At least 15 tested endpoints and readable structure.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 12 — FastAPI level assessment (M08)
**Focus:** Independent project build with validation and docs. **Resources:** R11, R18, R17. **Video:** V05.

- **Mon · 2h:** Review weak spots in routes and Pydantic.
- **Tue · 2h:** Fix intentionally broken endpoints.
- **Wed · 2h:** Implement CRUD for an unfamiliar entity.
- **Thu · 2h:** Add pagination, error handling and middleware.
- **Fri · 2h:** Write tests and short API consumer guide.
- **Sat · 5h:** BUILD: Independent Product Management assessment.
- **Weekly artefact:** FastAPI practical exam.
- **Checkpoint:** No tutorial copying, tests demonstrate important errors.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 13 — SQL fundamentals (M09)
**Focus:** PostgreSQL setup and CRUD queries. **Resources:** R20, R21. **Video:** V04.

- **Mon · 2h:** Install PostgreSQL and create a role/database.
- **Tue · 2h:** Create tables and perform DDL/DML.
- **Wed · 2h:** Use filters, sorting, limit and NULL semantics.
- **Thu · 2h:** Apply aggregations, GROUP BY and HAVING.
- **Fri · 2h:** Add primary/foreign keys and constraints.
- **Sat · 5h:** BUILD: University SQL database + 20 queries.
- **Weekly artefact:** University DB.
- **Checkpoint:** Data integrity constraints and 20 working queries.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 14 — Advanced SQL and relationships (M09)
**Focus:** JOINs, CTEs, windows, isolation introduction. **Resources:** R20, R21, R23. **Video:** V04.

- **Mon · 2h:** Write inner/left/full joins.
- **Tue · 2h:** Use nested queries and correlated subqueries.
- **Wed · 2h:** Write CTEs and window analytics.
- **Thu · 2h:** Normalize schema and add views.
- **Fri · 2h:** Create multi-statement transactions.
- **Sat · 5h:** BUILD: Order-reporting SQL lab.
- **Weekly artefact:** SQL reporting lab.
- **Checkpoint:** 15 analytical queries including ranking and JOINs.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 15 — PostgreSQL query plans and transactions (M10)
**Focus:** Indexes, JSONB, MVCC and EXPLAIN. **Resources:** R22, R23, R24. **Video:** none reviewed.

- **Mon · 2h:** Explore roles, schemas, UUID and JSONB.
- **Tue · 2h:** Create B-tree, GIN and partial indexes.
- **Wed · 2h:** Compare EXPLAIN ANALYZE before/after.
- **Thu · 2h:** Investigate MVCC and transaction isolation.
- **Fri · 2h:** Simulate locks/deadlock safely in local DB.
- **Sat · 5h:** BUILD: Indexed query benchmark report.
- **Weekly artefact:** Query benchmark.
- **Checkpoint:** Reports actual query plan and controlled benchmark setup.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 16 — SQLAlchemy 2.x and FastAPI (M11)
**Focus:** Models, sessions, relationships and transactions. **Resources:** R26, R27, R62. **Video:** V05 V06.

- **Mon · 2h:** Create engine and SQLAlchemy 2.x ORM models.
- **Tue · 2h:** Define session dependency and read records.
- **Wed · 2h:** Implement create/update/delete with rollback.
- **Thu · 2h:** Model one-to-many/many-to-many relationships.
- **Fri · 2h:** Detect N+1 and try eager loading.
- **Sat · 5h:** BUILD: PostgreSQL-backed Product Catalog.
- **Weekly artefact:** Persistent product API.
- **Checkpoint:** Safe session lifecycle and constraints on persistent data.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 17 — Alembic and database optimization (M12)
**Focus:** Schema migrations, N+1, pools and backups. **Resources:** R29, R24, R25, R28. **Video:** V05 V06.

- **Mon · 2h:** Create Alembic environment and initial revision.
- **Tue · 2h:** Generate/review/apply schema migrations.
- **Wed · 2h:** Practice backfills and rollback strategy.
- **Thu · 2h:** Inspect connection pool and eager loading.
- **Fri · 2h:** Compare sync/async SQLAlchemy and backup.
- **Sat · 5h:** BUILD: Inventory API with tracked migrations.
- **Weekly artefact:** Inventory API migrations.
- **Checkpoint:** Clean database can be recreated via migrations.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 18 — Database final project (M12)
**Focus:** Transactions, relationships, reporting and integrity. **Resources:** R26, R29, R22. **Video:** V05.

- **Mon · 2h:** Model products, stock, suppliers and warehouses.
- **Tue · 2h:** Implement atomic stock movements.
- **Wed · 2h:** Add relational search and reports.
- **Thu · 2h:** Add indexes and query plan checks.
- **Fri · 2h:** Test rollback, uniqueness and edge cases.
- **Sat · 5h:** BUILD: Complete Inventory Management Backend.
- **Weekly artefact:** Inventory Backend.
- **Checkpoint:** ERD and integration tests for stock integrity.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 19 — Authentication, tokens and password security (M13)
**Focus:** Passwords, JWT, secure login and refresh. **Resources:** R16, R59, R31. **Video:** V05 V06.

- **Mon · 2h:** Compare authentication and authorization; Argon2.
- **Tue · 2h:** Implement registration with unique emails.
- **Wed · 2h:** Issue signed JWT access tokens safely.
- **Thu · 2h:** Create refresh rotation/revocation model.
- **Fri · 2h:** Protect routes and test expiry/error cases.
- **Sat · 5h:** BUILD: Authentication Service v1.
- **Weekly artefact:** Authentication Service.
- **Checkpoint:** Does not store plaintext passwords or accept invalid JWTs.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 20 — OAuth2, OIDC and account recovery (M13)
**Focus:** External login, PKCE, session cookies and reset. **Resources:** R31, R32, R58, R16. **Video:** V05 V06.

- **Mon · 2h:** Draw OAuth roles and authorization flows.
- **Tue · 2h:** Study OIDC and identity tokens.
- **Wed · 2h:** Set up Authorization Code + PKCE test provider.
- **Thu · 2h:** Compare browser cookies and CSRF defenses.
- **Fri · 2h:** Build verification/reset and optional MFA outline.
- **Sat · 5h:** BUILD: Auth Service v2.
- **Weekly artefact:** Authentication Service v2.
- **Checkpoint:** Explains OAuth vs OIDC, handles state and token lifecycle.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 21 — Authorization and OWASP API security (M14)
**Focus:** RBAC, ownership checks and threat modeling. **Resources:** R30, R60, R56. **Video:** V06 V05.

- **Mon · 2h:** Create roles and permissions model.
- **Tue · 2h:** Enforce object ownership on every resource.
- **Wed · 2h:** Review OWASP BOLA and injection attacks.
- **Thu · 2h:** Configure CORS, CSRF and rate limits.
- **Fri · 2h:** Write negative tests for privilege escalation.
- **Sat · 5h:** BUILD: Multi-role secure API.
- **Weekly artefact:** Secure resource API.
- **Checkpoint:** Cross-user ID manipulation cannot disclose/alter data.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 22 — Automated test engineering (M15)
**Focus:** Pytest, TestClient, fixtures and database isolation. **Resources:** R17, R33, R34. **Video:** V05 V06.

- **Mon · 2h:** Create pytest fixtures and parametrized tests.
- **Tue · 2h:** Test FastAPI endpoints with TestClient.
- **Wed · 2h:** Make isolated disposable test database.
- **Thu · 2h:** Use HTTPX async tests and mocks.
- **Fri · 2h:** Add security, error and regression cases.
- **Sat · 5h:** BUILD: API test suite.
- **Weekly artefact:** Automated test suite.
- **Checkpoint:** Tests all critical authorization flows and database boundaries.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 23 — Clean architecture (M16)
**Focus:** Separating transport, domain and persistence. **Resources:** R35, R36. **Video:** V06.

- **Mon · 2h:** Identify coupling and SOLID code smells.
- **Tue · 2h:** Create router/service/repository layers.
- **Wed · 2h:** Use DTOs and domain entities.
- **Thu · 2h:** Add exception boundaries and transaction ownership.
- **Fri · 2h:** Apply Ruff, typing and code review checklist.
- **Sat · 5h:** BUILD: Refactored Inventory architecture.
- **Weekly artefact:** Refactored Inventory API.
- **Checkpoint:** Business-rule change does not require HTTP layer edits.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 24 — Security + architecture assessment (M16)
**Focus:** Refactoring, verification and review. **Resources:** R16, R30, R33, R35. **Video:** V05 V06.

- **Mon · 2h:** Review tokens, permissions and secrets.
- **Tue · 2h:** Improve test isolation and negative tests.
- **Wed · 2h:** Add audit logging for sensitive actions.
- **Thu · 2h:** Write architecture decision records.
- **Fri · 2h:** Run full test and security checks.
- **Sat · 5h:** BUILD: Secure User/Role Management Backend.
- **Weekly artefact:** Secure User Backend.
- **Checkpoint:** Strong permission tests and explanatory architecture README.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 25 — Async backend performance (M17)
**Focus:** AsyncIO, concurrency, blocking I/O and async ORM. **Resources:** R02, R28, R34. **Video:** V07 V08 V05.

- **Mon · 2h:** Visualize event loop and coroutines.
- **Tue · 2h:** Experiment with asyncio tasks and gather.
- **Wed · 2h:** Implement async HTTPX requests.
- **Thu · 2h:** Use async SQLAlchemy session safely.
- **Fri · 2h:** Benchmark I/O concurrency and diagnose blocking.
- **Sat · 5h:** BUILD: Concurrent Data Aggregation API.
- **Weekly artefact:** Async aggregator.
- **Checkpoint:** Measures impact on I/O; no shared unsafe AsyncSession.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 26 — Redis and worker reliability (M18)
**Focus:** Caching, queues, retries and idempotent jobs. **Resources:** R37, R38, R57. **Video:** V06.

- **Mon · 2h:** Explore Redis types and TTLs.
- **Tue · 2h:** Implement cache-aside with invalidation.
- **Wed · 2h:** Compare FastAPI BackgroundTasks with Celery.
- **Thu · 2h:** Add worker retry/backoff and failure paths.
- **Fri · 2h:** Design idempotency and dead-letter handling.
- **Sat · 5h:** BUILD: Notification Service with queue.
- **Weekly artefact:** Notification queue.
- **Checkpoint:** Retries do not duplicate business effects.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 27 — Real-time APIs and webhooks (M19)
**Focus:** WebSockets, SSE and signature validation. **Resources:** R15, R39. **Video:** none reviewed.

- **Mon · 2h:** Build authenticated WebSocket endpoint.
- **Tue · 2h:** Handle disconnect/reconnect and multiple clients.
- **Wed · 2h:** Implement SSE notifications.
- **Thu · 2h:** Verify signed webhook and timestamp tolerance.
- **Fri · 2h:** Compare REST/SSE/WebSocket/gRPC tradeoffs.
- **Sat · 5h:** BUILD: Realtime Notification API.
- **Weekly artefact:** Realtime notifications.
- **Checkpoint:** Authenticated fanout and webhook replay defense.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 28 — System design foundations (M20)
**Focus:** Scaling, cache, queues, consistency and failures. **Resources:** R40, R23. **Video:** none reviewed.

- **Mon · 2h:** Compare monolith and microservices.
- **Tue · 2h:** Sketch load balancing and stateless scaling.
- **Wed · 2h:** Design event-based integration with queues.
- **Thu · 2h:** Study outbox, eventual consistency and sagas.
- **Fri · 2h:** Write capacity assumptions and failure scenarios.
- **Sat · 5h:** BUILD: Marketplace architecture design.
- **Weekly artefact:** Marketplace system design.
- **Checkpoint:** Architecture diagram, assumptions, failure & recovery table.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 29 — Transactional e-commerce integration (M20)
**Focus:** Orders, stock, cache, job processing and payments. **Resources:** R23, R37, R38, R40. **Video:** V06.

- **Mon · 2h:** Model cart/order/payment resources.
- **Tue · 2h:** Build order endpoints and valid state transitions.
- **Wed · 2h:** Implement atomic inventory reservation.
- **Thu · 2h:** Cache read-heavy product data and use queues.
- **Fri · 2h:** Validate signed payment test webhooks/idempotency.
- **Sat · 5h:** BUILD: Integrated E-commerce API.
- **Weekly artefact:** E-commerce API.
- **Checkpoint:** Repeated callbacks never duplicate fulfillment.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 30 — Distributed systems assessment (M20)
**Focus:** Benchmarking, reliability and tradeoffs. **Resources:** R40, R24, R48. **Video:** V05 V06.

- **Mon · 2h:** Profile slow sync vs async endpoints.
- **Tue · 2h:** Compare cache-hit vs cache-miss performance.
- **Wed · 2h:** Inject job queue failure and recovery.
- **Thu · 2h:** Test concurrent stock reservations.
- **Fri · 2h:** Document consistency and scalability decisions.
- **Sat · 5h:** BUILD: E-commerce assessment release.
- **Weekly artefact:** E-commerce release.
- **Checkpoint:** Recorded benchmarks, tests and failure handling.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 31 — Docker and repeatability (M21)
**Focus:** Images, Compose, networking, volumes, health checks. **Resources:** R41, R42. **Video:** V09 V05.

- **Mon · 2h:** Understand processes, images and containers.
- **Tue · 2h:** Write minimal multi-stage Dockerfile.
- **Wed · 2h:** Connect API, Postgres, Redis with Compose.
- **Thu · 2h:** Configure persistence and internal networking.
- **Fri · 2h:** Create health checks and harden images.
- **Sat · 5h:** BUILD: Containerized E-commerce Stack.
- **Weekly artefact:** Containerized backend.
- **Checkpoint:** Clean machine runs documented compose startup.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 32 — CI/CD, deployment and rollback (M22)
**Focus:** GitHub Actions, secrets, HTTPS and release safety. **Resources:** R43, R41. **Video:** V05.

- **Mon · 2h:** Write CI workflow for lint and tests.
- **Tue · 2h:** Build/test/push container image.
- **Wed · 2h:** Configure staging and secrets safely.
- **Thu · 2h:** Deploy via reverse proxy with HTTPS.
- **Fri · 2h:** Practice rollback and migration sequencing.
- **Sat · 5h:** BUILD: Automated cloud deployment.
- **Weekly artefact:** CI/CD deployment.
- **Checkpoint:** All tests run before deployment; documented rollback.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 33 — Observability and operations (M23)
**Focus:** Logs, metrics, traces, SLOs and backups. **Resources:** R44, R45, R46, R25. **Video:** none reviewed.

- **Mon · 2h:** Add JSON logs and request correlation.
- **Tue · 2h:** Expose application/worker metrics.
- **Wed · 2h:** Instrument traces with OpenTelemetry.
- **Thu · 2h:** Add alerts and health/readiness endpoints.
- **Fri · 2h:** Define SLO, exercise DB restore and incident response.
- **Sat · 5h:** BUILD: Observability dashboard.
- **Weekly artefact:** Observability system.
- **Checkpoint:** Can trace a slow request and recover from failure.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 34 — PostgreSQL production optimization (M24)
**Focus:** Vacuum, PgBouncer, EXPLAIN, load tests. **Resources:** R22, R24, R47, R48, R49. **Video:** none reviewed.

- **Mon · 2h:** Inspect planner statistics and query profiles.
- **Tue · 2h:** Study autovacuum, bloat and index maintenance.
- **Wed · 2h:** Test PgBouncer and pool sizing.
- **Thu · 2h:** Explore partitioning/read replicas conceptually.
- **Fri · 2h:** Run Locust with latency/throughput metrics.
- **Sat · 5h:** BUILD: Performance tuning report.
- **Weekly artefact:** DB performance report.
- **Checkpoint:** Shows p50/p95, throughput, query plans and reproducible test.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 35 — Capstone build sprint (M24)
**Focus:** Multi-tenant SaaS backend complete features. **Resources:** R16, R30, R26, R43. **Video:** V05 V06.

- **Mon · 2h:** Design ERD, tenants and auth model.
- **Tue · 2h:** Implement tenant isolation, roles and users.
- **Wed · 2h:** Implement audited CRUD, sorting and pagination.
- **Thu · 2h:** Integrate caching, workers and notifications.
- **Fri · 2h:** Write end-to-end tests and migration checks.
- **Sat · 5h:** BUILD: SaaS feature-complete staging build.
- **Weekly artefact:** SaaS staging backend.
- **Checkpoint:** No cross-tenant data leaks, end-to-end tests pass.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

### Week 36 — Final production capstone (M24)
**Focus:** Production deployment, incident simulation and portfolio. **Resources:** R43, R44, R24, R25, R48. **Video:** V05 V09.

- **Mon · 2h:** Finalize API contracts and permissions.
- **Tue · 2h:** Deploy with Docker and CI/CD.
- **Wed · 2h:** Connect metrics, tracing and alerts.
- **Thu · 2h:** Load-test and remove measured bottlenecks.
- **Fri · 2h:** Run backup restore and rollback exercise.
- **Sat · 5h:** BUILD: Live SaaS capstone demonstration.
- **Weekly artefact:** Production SaaS capstone.
- **Checkpoint:** Secure, observable, tested, reproducible, documented.
- **Checklist:** [ ] Read [ ] Watch targeted chapters (if available) [ ] Code [ ] Test [ ] Explain [ ] Publish/record [ ] Pass.

## 8. Project ladder and acceptance criteria
| Stage | Project | Week(s) | Must demonstrate |
|---|---|---|---|
| P01 | CLI contact + expense management | 1–2 | Files, collections, functions, exceptions |
| P02 | Task Manager REST API | 5–6 | HTTP CRUD, request validation, errors |
| P03 | Book and Student APIs | 7–8 | Routers, Pydantic schemas, docs |
| P04 | Product Catalog | 10–12, 16 | Filtering, pagination, SQLAlchemy persistence |
| P05 | PostgreSQL Inventory | 17–18 | Relationships, atomic stock, Alembic |
| P06 | Secure Identity API | 19–24 | Argon2, JWT, OAuth concepts, RBAC, tests |
| P07 | Realtime Notification Worker | 26–27 | Redis, Celery, websockets/SSE, webhook security |
| P08 | E-commerce API | 28–30 | Transactions, idempotency, failures, caching |
| P09 | Multi-tenant SaaS capstone | 35–36 | Isolation, CI/CD, metrics, tests, rollback, restore |

**Repository requirements for each milestone:** `README.md` with prerequisites/setup/API contract, `.env.example` without real secrets, test instructions, sample requests, change log, a minimal architecture note. For DB stages include migration instructions and test data fixtures. For production stages include release and restore runbooks.

## 9. Checklists and assessment rubric
**Every 2-hour weekday:**
- [ ] State the intended outcome and prerequisites (5–10 min).
- [ ] Read the linked official section and write 3 key points.
- [ ] Watch **specific selected video chapters** only; note video date and caveats.
- [ ] Type, run and adapt an original example; write down the output.
- [ ] Answer 2–3 retrieval questions without notes.
- [ ] Commit/record the result, blockers and follow-up tasks.

**Every Saturday (5h):**
- [ ] Plan the project and read acceptance criteria.
- [ ] Implement the features independently.
- [ ] Write positive and negative tests; inspect logs and errors.
- [ ] Explain design decisions, document commands and publish code.
- [ ] Record proof (test output, URL or local demo), review rubric and address gaps.

| Assessment domain | 0 points | 1 point | 2 points |
|---|---|---|---|
| Understanding | Cannot explain | Explains with prompts | Explains independently |
| Implementation | Cannot implement | Partially working | Independently working |
| Debugging | Cannot locate defect | Fixes with guidance | Diagnoses & repairs |
| Testing | No meaningful evidence | Happy path only | Edge/error/security cases |
| Documentation | Unusable directions | Some setup notes | Reproducible & clear |
**Pass:** ≥8/10 **and** all critical project checks (e.g., no cross-tenant data access, no unhandled transaction corruption). A security defect overrides the numeric pass mark. A learner may continue browsing locked content, but mastery status must not be marked as passed.

## 10. Research gaps and ongoing maintenance
### Outstanding deep review — do not conceal this in the website
- Dedicated **verified timestamped videos** still needed for: advanced PostgreSQL internals, WebSockets/SSE, system design/distributed systems, GitHub Actions CI/CD, observability, and production query tuning. The documentation map is supplied; it is not a substitute for checking video quality.
- No exhaustive manual playback/code audit has been performed for every selected video. Publisher chapters and official descriptions were checked; a launch checklist must recheck URLs, chapter offsets, captions, region availability, and code compatibility.
- V10 older 2021 FastAPI video is publisher-verified and time-indexed, but must be marked **LEGACY_SUPPLEMENT**; do not promote as the default modern FastAPI course or copy its installation advice unchanged.
- Current PostgreSQL release/version should be specified when recording screenshots and exercises; official `/current/` documentation will advance over time.
- Video chapters are sometimes much longer than one daily lesson. Allocate a defined end time or maximum viewing budget instead of assigning the entire course.
### Maintenance checklist for a content editor
- [ ] Recheck each link with HEAD/GET and human inspection on initial import and every 90 days.
- [ ] Re-evaluate version-sensitive topics after each major FastAPI, Python, PostgreSQL, SQLAlchemy, Pydantic, Docker or OAuth guidance update.
- [ ] Flag inaccessible, deleted, paid or region-restricted videos; preserve the lesson with written alternatives.
- [ ] Inspect exact timestamp manually before labeling it editorially confirmed (vs publisher-listed).
- [ ] Save `last_reviewed_at`, `reviewer`, `verification_method`, `version_notes`, `source_type`, `approved_for_display`.
- [ ] Use creator-embeds and normal outbound links only. Do not copy complete transcripts or redistribute video assets.

## 11. Content contracts for website import
**Recommended structure (illustrative JSON):**
```json
{
  "resource": {
    "id": "R26",
    "title": "SQLAlchemy ORM Quick Start",
    "url": "https://docs.sqlalchemy.org/en/20/orm/quickstart.html",
    "type": "official_documentation",
    "topics": [
      "orm",
      "models",
      "sessions"
    ],
    "module_ids": [
      11
    ],
    "verification_status": "DOC_OFFICIAL",
    "last_reviewed_at": "2026-10-11"
  },
  "video_chapter": {
    "video_id": "V05",
    "youtube_id": "iukOehU5aF4",
    "title": "SQLAlchemy/database",
    "start_seconds": 7191,
    "timestamp_provenance": "publisher_listed",
    "module_ids": [
      11
    ],
    "weeks": [
      16
    ]
  },
  "lesson": {
    "week": 16,
    "day": "monday",
    "duration_minutes": 120,
    "resource_ids": [
      "R26",
      "R27"
    ],
    "video_chapter_refs": [
      {
        "video_id": "V05",
        "start_seconds": 7191
      }
    ],
    "activity_ids": [
      "read",
      "watch",
      "build",
      "test",
      "review"
    ],
    "mastery_assessment_required": true
  }
}
```
**Ingestion rules:** preserve provenance; never fabricate timestamps, durations, ratings or broken links; keep primary key IDs stable; store readable URLs, not HTML iframe strings; use `https://www.youtube.com/watch?v=<id>&t=<seconds>s` or official embed start support; maintain optional resource fallback; all website IDs and filters must resolve to real records. Reference the companion file `BACKEND_MASTERY_WEBSITE_BUILD_SPEC.md` for the full web application requirements.

---
**Research trace:** chapter data from original YouTube course descriptions: [Corey FastAPI](https://www.youtube.com/watch?v=iukOehU5aF4), [Beyond CRUD](https://www.youtube.com/watch?v=TO4aQ3ghFOc), [Bro Code Python](https://www.youtube.com/watch?v=ix9cRaBkVe0), [Git and GitHub](https://www.youtube.com/watch?v=mAFoROnOfHs), [PostgreSQL](https://www.youtube.com/watch?v=SpfIwlAYaKk), [APIs](https://www.youtube.com/watch?v=WXsD0ZgxjRw), [Tech With Tim AsyncIO](https://www.youtube.com/watch?v=Qb9s3UiMSTA), [Code With Tomi FastAPI](https://www.youtube.com/watch?v=tLKKmouUams), [Docker](https://www.youtube.com/watch?v=3c-iBn73dDE). Current FastAPI JWT advice verified at [FastAPI security docs](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/).
