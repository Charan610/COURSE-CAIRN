# DSA MASTERY ACADEMY — RESEARCHED CURRICULUM + NON-DESTRUCTIVE CODEX INTEGRATION

**Edition:** 2026-10-11 · **Status:** Implementation-ready curriculum specification; individual external links must be rechecked at import time · **Main language:** C++17 (optional C++20) · **Language bridges:** Java (current LTS supported by local JDK) and Python 3 · **Duration:** 48 weeks × 15 study hours = **720 planned hours** · **Study days:** 288 (6/week) · **Phases:** 8 × 6 weeks · **Objective:** Strong DSA fundamentals, advanced algorithmic problem solving, product-company / campus placement readiness, and independent interview performance.

> **CODEX: READ FIRST.** Add this as a **new, independent DSA learning track** to the existing Backend Mastery Academy. **DO NOT REPLACE OR REWRITE** existing FastAPI/PostgreSQL/REST curriculum files, 36-week / 24-module backend data, routes, feature logic, database tables, styles, theme tokens, progress, authentication, or existing users' content. Use additive, namespaced models, routes, components, migrations and seeds. All old tests must continue to pass. Read **§13 Non-destructive integration** and **§14 Acceptance tests** before editing code.
>
> **DESIGN INVARIANT:** Continue the existing website's premium warm-ivory / forest-green / terracotta / amber theme. **NO BLUE, PURPLE, INDIGO OR VIOLET SHADES** in any new DSA UI, code highlight, graph, badge, hover, focus ring, loading state or dark mode. Respect existing CSS tokens; avoid global CSS replacement.
>
> **ACADEMIC HONESTY:** There is no universal company DSA question list, no guaranteed interview pattern and no guaranteed placement. Company expectations vary by role, location, seniority and hiring cycle. Only describe officially documented assessments as official. Do not imply LeetCode/NeetCode/Striver are employer-sponsored. Public video chapters below were verified against published **video descriptions**, not frame-by-frame reviewed. C++ is the main teaching language; Java/Python are supported translations, not three full 48-week simultaneous curricula.

## Table of contents (what is where)

1. [Vision, study hours, assumptions](#1-vision-study-hours-assumptions)
2. [Research method, source trust levels and limitations](#2-research-method-source-trust-levels-and-limitations)
3. [Resource library: official docs, worksheets and courses](#3-resource-library-official-docs-worksheets-and-courses)
4. [Video library with real verified chapter-start timestamps](#4-video-library-with-real-verified-chapter-start-timestamps)
5. [C++ main track + Java/Python language bridges](#5-c-main-track--javapython-language-bridges)
6. [Eight-phase roadmap overview and milestones](#6-eight-phase-roadmap-overview-and-milestones)
7. [Complete 48-week / 288-day guided plan](#7-complete-48-week--288-day-guided-plan)
8. [Pattern-to-resource and practice map](#8-pattern-to-resource-and-practice-map)
9. [Practice ladder, revision protocol, weekly assessments](#9-practice-ladder-revision-protocol-weekly-assessments)
10. [Product-company and Indian placement preparation](#10-product-company-and-indian-placement-preparation)
11. [Sample lessons, exercise rubrics, and example practice questions](#11-sample-lessons-exercise-rubrics-and-example-practice-questions)
12. [Content data format, attribution, and resource integrity](#12-content-data-format-attribution-and-resource-integrity)
13. [Codex non-destructive integration requirements](#13-codex-non-destructive-integration-requirements)
14. [Definition of done and verification checklist](#14-definition-of-done-and-verification-checklist)
15. [Source provenance and maintenance schedule](#15-source-provenance-and-maintenance-schedule)

---

## 1. Vision, study hours, assumptions

**Learner promise:** Open DSA track → choose language (default **C++**) → see today's exact goal, previous prerequisites, 1 primary article, 1 selected video chapter (with real start time if published), 2–5 targeted problems, a written complexity explanation, a test checklist, and a mastery checkpoint. On Saturday, complete a 5-hour applied lab, contest, or mock interview. Do not unlock progress based only on watching videos.

**Weekly rhythm: 15 hours:** Mon–Fri = 2 hours/day (20 min reading, 25 min selected video/visuals, 60 min solving, 15 min reflection and test cases); Sat = 5 hours (90 min review, 150 min lab or timed problem set, 60 min independent mock/contest, 30 min solution review); Sun = rest or optional spaced repetition. The 2h mix is a suggested allocation, not an enforced timer. Difficult topics may require longer than 48 weeks.

**Track intent:** C++ is used for solutions and deep container/memory understanding. Java and Python have dedicated early bridges and contextual translations throughout the course. Students applying to internships / early-career SDE roles also study communication, CS fundamentals, role-specific screening, debugging and resume/project evidence. Competitive-programming-only topics are labeled **stretch** where applicable.

**Output expectation:** 48 week entities, 288 day entities, resources/video links attached by IDs (not copied prose), real problem links, saved problem attempts, independent mastery status, progress that does not interfere with backend mastery, and ability to switch code language per lesson.

## 2. Research method, source trust levels and limitations

- **Level A — authoritative**: official language docs, CSES/USACO/MIT course pages, authoritative vendor interview guides, maintainers' own teaching sites. Confirmed page identity/source. Does not imply every lesson subpage is manually audited.
- **Level B — verified published video metadata:** YouTube's surfaced video title/channel/publication information and creator-published timestamp list are matched; the linked chapter start exists in the description. **NOT** a claim the full content is bug-free or that the video remains accessible in every region.
- **Level C — curated third party:** NeetCode, takeUforward, CP-Algorithms, LearnCpp, VisuAlgo, GFG, competitive practice sheets. High educational value but not official standards or employer policy. Content, free/premium status and question counts change: query/import at runtime; don't promise a fixed count or free access to everything.
- **Review pending:** Some specialist topics lack individually reviewed videos. Prefer docs or an entire official lecture, with `timestamp_status: not_available`; **never invent timestamps**, video IDs, difficulty ratings or company frequency counts.
- **Rating policy:** Evaluate correctness 30%, clarity 20%, real exercise value 20%, update/compatibility 15%, topic fit 10%, accessibility 5%. A popularity metric is never evidence of correctness. Published counts/syllabus are snapshots (research dated 2026-10-11).
- **Copyright:** Link/embed videos only through allowed official player features. Do not scrape full proprietary tutorials/solutions or bulk copy paid question banks. Store titles, links, instructor attribution, user-authored notes and our own exercises.

---

## 3. Resource library: official docs, worksheets and courses

Use IDs throughout this document. **A** = authoritative/primary or maintainer; **C** = useful curated external. Free tier/terms vary; verify before labeling a resource entirely free.

### 3.1 Programming languages and toolchain

| ID | Resource URL | What is specifically there / where to use | Trust |
|---|---|---|---|
| `L-CPP-01` | [LearnCpp — chapter index](https://www.learncpp.com/) | Modern C++ getting started, builds, variables, functions, arrays, classes, pointers, references and templates; weeks 1–4 | A for publisher identity, C educational |
| `L-CPP-02` | [cppreference: containers](https://en.cppreference.com/w/cpp/container) | `vector`, `deque`, `map`, `set`, `unordered_map`, `stack`, `queue`, `priority_queue`, operations, iterator invalidation; weeks 3–24 | A reference |
| `L-CPP-03` | [cppreference: algorithms](https://en.cppreference.com/w/cpp/algorithm) | `sort`, `lower_bound`, `upper_bound`, `binary_search`, heaps, permutations and standard algorithms | A reference |
| `L-CPP-04` | [cppreference: unordered_map](https://en.cppreference.com/w/cpp/container/unordered_map) | Hash map operations and average vs worst-case complexity | A reference |
| `L-CPP-05` | [cppreference: priority_queue](https://en.cppreference.com/w/cpp/container/priority_queue) | Heap API, default max heap, comparators, O(log n) insertion/extraction | A reference |
| `L-JAVA-01` | [dev.java: Learn Java](https://dev.java/learn/) | Java first steps, language basics, collections, classes and modern official learning pathway; weeks 5–6 | A official Java ecosystem |
| `L-JAVA-02` | [Oracle Java API reference](https://docs.oracle.com/en/java/javase/25/docs/api/index.html) | API signatures and complexity-relevant collections contract; version-specific reference (use installed-version selector) | A official |
| `L-PY-01` | [Python tutorial](https://docs.python.org/3/tutorial/) | Core syntax, data structures, functions, classes, imports and exceptions | A official |
| `L-PY-02` | [Python collections](https://docs.python.org/3/library/collections.html) | `deque`, `Counter`, `defaultdict`; weeks 5–6 and translations | A official |
| `L-PY-03` | [Python heapq](https://docs.python.org/3/library/heapq.html) | Python min-heaps and heap operations | A official |
| `L-TOOLS-01` | [Git book](https://git-scm.com/book/en/v2) | Git repo, branches, commits and portfolio history | A official Git project |
| `L-TOOLS-02` | [GCC manuals](https://gcc.gnu.org/onlinedocs/) | Compiler flags, optimization, sanitizer diagnostics | A official |

### 3.2 Core DSA theory and structured practice

| ID | Resource URL | Contents / guidance | Trust |
|---|---|---|---|
| `D-STRIVER` | [Striver A2Z DSA Sheet](https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet) | Curated foundational → advanced modules, problem links, editorials/video associations. **Primary ordered breadth spine** for weeks 7–36; live count changes | C maintainer |
| `D-NEET150` | [NeetCode 150 + pattern roadmap](https://neetcode.io/roadmap) | Interview pattern order with 150 problems and solution videos, Python/Java/C++ support; use weeks 13–48 | C maintainer |
| `D-NEET250` | [NeetCode practice/course home](https://neetcode.io/practice) | Additional practice lists; check current free/premium access | C maintainer |
| `D-LC75` | [LeetCode 75](https://leetcode.com/studyplan/leetcode-75/) | Interview-focused starter list, use for phased revision | C platform |
| `D-LC150` | [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/) | Broad 150-question interview track officially described as suitable for 3+ months | C platform |
| `D-CSES` | [CSES Problem Set](https://cses.fi/problemset/) | Introductory, searching/sorting, DP, graphs, range queries, trees, mathematics, strings | A contest organizer |
| `D-CSES-GUIDE` | [CSES introduction](https://cses.fi/problemset/text/2433) | Format and supported languages; CSES itself states C++/Java/Python are supported | A organizer |
| `D-USACO` | [USACO Guide](https://usaco.guide/) | Progressive Bronze/Silver/Gold/Platinum lessons, implementations and practice; deeper contest enrichment | A publisher |
| `D-USACO-USE` | [How to use USACO Guide](https://usaco.guide/general/using-this-guide) | How lessons/practice/stars work; warning it is **not an official future contest syllabus** | A publisher |
| `D-USACO-INTRO` | [USACO expected knowledge](https://usaco.guide/general/expected-knowledge) | Baseline loops, functions, arrays, recursion | A publisher |
| `D-CPALG` | [CP-Algorithms](https://cp-algorithms.com/) | Reference implementations/explanations for graph algorithms, DP, string algorithms, math, segment trees | C community reference |
| `D-MIT` | [MIT OCW 6.006 Spring 2020](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) | Theoretical DSA lectures, notes, problem sets and solutions; particularly complexity, graphs, dynamic programming | A university |
| `D-MIT-VIDEOS` | [MIT 6.006 lecture video index](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/video_galleries/lecture-videos/) | Individual lecture videos; choose by lecture title (no fabricated timestamps) | A university |
| `D-MIT-NOTES` | [MIT 6.006 lecture notes](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/) | Lecture 1 analysis → sorting/hash → trees/heaps → BFS/DFS → shortest paths → DP | A university |
| `D-VIS` | [VisuAlgo](https://visualgo.net/en) | Interactive animations for sorting, trees, heaps, graph algorithms and data structures | C educational |
| `D-GFG` | [GeeksforGeeks DSA tutorial](https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/) | Alternative explanations and Java/Python/C++ examples; cross-check claims with reference docs | C |
| `D-ATCODER-DP` | [AtCoder Educational DP tasks](https://atcoder.jp/contests/dp/tasks?lang=en) | 26 named DP tasks A–Z, from Frog and Knapsack to advanced DP | A contest organizer |
| `D-CF` | [Codeforces](https://codeforces.com/) | Timed programming contests, tags, editorial discussion; **optional deeper CP track** | A platform |
| `D-KATTIS` | [Kattis problems](https://open.kattis.com/problems) | Format-specific parsing and contest programming practice | A platform |
| `D-PRINCETON` | [Princeton Algorithms, 4th ed website](https://algs4.cs.princeton.edu/home/) | Sorting, searching, priority queues, strings and graphs, Java-based companion exercises | A authors/publisher |
| `D-COURSE-UCSD` | [UC San Diego DSA specialization](https://www.coursera.org/specializations/data-structures-algorithms) | Structured algorithm puzzles and graded exercises; **some content/payment may require subscription** | A course organizer |

### 3.3 Placement and interviewing: prefer employers' own guidance

| ID | Resource URL | What it actually supports |
|---|---|---|
| `I-MS` | [Microsoft official technical interview tips](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing) | Problem clarification, design, coding, testing, common DS/algorithms, communication, role-dependent interview skills |
| `I-MS-STUDENT` | [Microsoft student interviews](https://careers.microsoft.com/v2/global/en/hiring-tips/student-interviewing) | Student/early-career interview format and preparation resources |
| `I-AMAZON` | [Amazon official university SDE online assessment preparation](https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa) | Official early-career SDE online assessment preparation; process and timing vary by location, position and candidate instructions |
| `I-AMAZON-TOPICS` | [Amazon official software development topics](https://prod.gamma.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics) | Interview preparation videos/coding examples and leadership-principle context |
| `I-GOOGLE-JOBS` | [Google Careers job search](https://www.google.com/about/careers/applications/) | Check exact role's **current** qualifications, interview instructions from recruiter; role postings vary |
| `I-LC150` | [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/) | General practice only; NOT the official exam of any employer |
| `I-NEET` | [NeetCode 150](https://neetcode.io/roadmap) | Guided general interview practice; NOT employer-provided frequency data |

**Company coverage policy:** Amazon, Microsoft, Google, Meta, Apple, Adobe, Atlassian, Salesforce, Uber, Flipkart, Walmart Global Tech, Oracle, Intuit, PayPal, ServiceNow and other product firms can appear as learner **target tags**, not as unverified claims that each uses an identical interview round, problem distribution or difficulty threshold. Add role/location/date/sourcing to every company-specific claim. Placement pipeline for Indian campus/off-campus recruiting may additionally involve online assessments, aptitude, CS fundamentals, projects, resume and HR/behavioral rounds; requirements depend on the specific posting. The DSA course does not replace role-specific preparation.

---

## 4. Video library with real verified chapter-start timestamps

**Provenance:** The chapter timestamps below were transcribed from the video publishers' YouTube descriptions as surfaced in research on 2026-10-11. They are **starting positions**, not guaranteed lesson end times. Link each chapter as `watch?v=VIDEO_ID&t=SECONDSs`. When a publisher edits/removes chapters or restricts viewing, flag it in resource status. **No other video in this document has a claimed timestamp**. For non-chaptered lectures, link the course/lecture page directly with `timestamp_status: unavailable`.

### 4.1 Verified video sources and use cases

| Video ID | Creator/course | Used in | Limitation |
|---|---|---|---|
| `V-CPP` | [Bro Code C++ Full Course](https://www.youtube.com/watch?v=-TkoO8Z07hI) | Weeks 1–4 and recursion refresher | Introductory C++; older, little modern STL detail |
| `V-JAVA` | [Bro Code Java Full Course 2025](https://www.youtube.com/watch?v=xTtL8E4LzTQ) | Weeks 5–6 Java bridge | Select relevant segments; games and threads optional |
| `V-PY` | [Bro Code Python Full Course 2024](https://www.youtube.com/watch?v=ix9cRaBkVe0) | Weeks 5–6 Python bridge | Skip unrelated GUI sections |
| `V-FISET` | [William Fiset / freeCodeCamp Data Structures](https://www.youtube.com/watch?v=RBSGKlAvoiM) | Weeks 7–35 by chapter | Animated concepts, worked implementations in Java |
| `V-MIT` | [MIT 6.006 lecture videos](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/video_galleries/lecture-videos/) | Sorting, hashing, trees, graphs, DP | Separate lecture videos, **no verified chapter timestamps** |
| `V-STRIVER` | [Striver A2Z maintainer sheet with teaching links](https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet) | Weeks 7–36 | Video links per lesson may change; pull from source; no speculative timestamps |
| `V-NEET` | [NeetCode 150 roadmap/videos](https://neetcode.io/roadmap) | Weeks 13–48 | Use problem-associated solution explanations **after** attempt |
| `V-USACO` | [USACO Guide modules](https://usaco.guide/) | Weeks 27–42 | Primarily articles and problems, not one indexed video |

### 4.2 Timestamp directory (actual chapter starts)

All rows are based on creator-published chapters. Times use **HH:MM:SS**. `video_status: description_chapter_verified`.

#### V-CPP: Bro Code — C++ Full Course (2022)

Beginner syntax; not a modern STL mastery course. Use LearnCpp and cppreference for modern details.

| Chapter | Start | Direct jump |
|---|---:|---|
| Intro | 00:00:00 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=0s) |
| Variables | 00:13:30 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=810s) |
| Input | 00:47:05 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=2825s) |
| If | 00:58:44 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3524s) |
| While loops | 01:35:51 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=5751s) |
| For loops | 01:42:15 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=6135s) |
| Functions | 02:03:10 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=7390s) |
| Arrays | 02:51:11 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=10271s) |
| Memory addresses | 03:57:42 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=14262s) |
| Pass by value/reference | 04:00:31 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=14431s) |
| Pointers | 04:17:56 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=15476s) |
| Dynamic memory | 04:46:26 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=17186s) |
| Recursion | 04:52:15 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=17535s) |
| Function templates | 04:58:35 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=17915s) |
| OOP | 05:18:38 | [Watch chapter](https://www.youtube.com/watch?v=-TkoO8Z07hI&t=19118s) |

#### V-JAVA: Bro Code — Java Full Course (2025)

Published January 2025. Java code examples, not a substitute for official collections contracts.

| Chapter | Start | Direct jump |
|---|---:|---|
| Introduction | 00:00:00 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=0s) |
| Variables | 00:10:58 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=658s) |
| Input | 00:31:30 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=1890s) |
| If | 01:09:00 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=4140s) |
| While loops | 03:21:23 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=12083s) |
| For loops | 03:43:33 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=13413s) |
| Methods | 04:04:27 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=14667s) |
| Arrays | 05:03:26 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=18206s) |
| 2D arrays | 05:34:36 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=20076s) |
| OOP | 06:41:47 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=24107s) |
| Inheritance | 07:22:04 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=26524s) |
| Interfaces | 08:01:30 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=28890s) |
| ArrayLists | 08:55:51 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=32151s) |
| Exceptions | 09:05:29 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=32729s) |
| Generics | 10:38:16 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=38296s) |
| HashMaps | 10:52:09 | [Watch chapter](https://www.youtube.com/watch?v=xTtL8E4LzTQ&t=39129s) |

#### V-PY: Bro Code — Python Full Course (2024)

Skip PyQt/GUI for DSA; use official Python tutorial + collections/heapq for DSA.

| Chapter | Start | Direct jump |
|---|---:|---|
| Intro | 00:00:00 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=0s) |
| Variables | 00:05:49 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=349s) |
| If | 00:51:46 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=3106s) |
| While loops | 01:51:55 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=6715s) |
| For loops | 02:06:28 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=7588s) |
| Lists, sets and tuples | 02:23:03 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=8583s) |
| Dictionaries | 03:03:27 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=11007s) |
| Functions | 03:52:12 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=13932s) |
| List comprehensions | 04:45:56 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=17156s) |
| Modules | 05:02:13 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=18133s) |
| OOP | 06:32:32 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=23552s) |
| Exception handling | 08:14:57 | [Watch chapter](https://www.youtube.com/watch?v=ix9cRaBkVe0&t=29697s) |

#### V-FISET: William Fiset via freeCodeCamp — Data Structures Easy to Advanced (2019)

High-quality animated foundations; example source code is **Java**, while our primary lab implementations remain C++. Advanced topics are optional for interviews.

| Chapter | Start | Direct jump |
|---|---:|---|
| Abstract data types | 00:00:00 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=0s) |
| Big-O | 00:04:28 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=268s) |
| Static and dynamic arrays | 00:17:00 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=1020s) |
| Linked lists | 00:35:03 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=2103s) |
| Stack | 00:58:26 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=3506s) |
| Queue | 01:15:58 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=4558s) |
| Priority queue | 01:31:32 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=5492s) |
| DSU/Union Find | 02:28:26 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=8906s) |
| BST | 03:03:54 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=11034s) |
| BST traversals | 03:34:47 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=12887s) |
| Hash tables and hash functions | 03:59:26 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=14366s) |
| Open addressing | 04:35:44 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=16544s) |
| Fenwick tree | 05:45:36 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=20736s) |
| Suffix arrays | 06:14:47 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=22487s) |
| Balanced BST rotations | 06:48:13 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=24493s) |
| Indexed priority queue | 07:30:49 | [Watch chapter](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=27049s) |

### 4.3 Videos without verified per-chapter timestamps

- MIT OCW **6.006 Spring 2020**: [lecture-video index](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/video_galleries/lecture-videos/): specifically choose *Lecture 1 Algorithms and Computation*, *Lecture 3 Sets and Sorting*, *Lecture 4 Hashing*, *Lecture 8 Binary Heaps*, *Lecture 9 BFS*, *Lecture 10 DFS*, *Lectures 11–14 Weighted Shortest Paths*, *Lectures 15–18 Dynamic Programming*. Publisher lists lectures separately, so use each page's beginning rather than inventing a chapter time.
- Striver **A2Z**: pick the row in [maintainer sheet](https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet) matching the day's topic and use its linked video if there is one. Some videos are Hindi-English; offer English alternatives via MIT/NeetCode where needed. No invented video timestamps.
- NeetCode: select the relevant [roadmap node](https://neetcode.io/roadmap), **try the problem first** and then watch its associated explanation. No invented individual video ID or timestamp.
- Additional visuals: [VisuAlgo](https://visualgo.net/en) is interactive animation rather than video; pair with one exercise.

**Quality action:** Codex should implement a resource admin review field and display "Timestamp verified from published chapter list" vs "Timestamp not supplied". Do not label these as personally frame-by-frame watched or claim machine validation of YouTube playback.

---

## 5. C++ main track + Java/Python language bridges

### 5.1 Language policy

1. **Main language: C++17** for all 48 weeks, reference implementations, contest templates, correctness and complexity walkthroughs. Use C++20 only when environment supports it; avoid nonstandard `bits/stdc++.h` in portable reference examples (mention as optional contest convenience). Enable warnings/sanitizers locally; do not mistake sanitizer availability for platform support.
2. **Java track:** learn basics + Java Collections Framework; for each major DSA unit offer Java implementation notes: `ArrayList`, `HashMap`, `HashSet`, `PriorityQueue`, `ArrayDeque`, `TreeMap`, `TreeSet`, comparator, `StringBuilder`, `int[]`, `long` overflow considerations, fast input.
3. **Python track:** learn basics + `list`, `dict`, `set`, `collections.deque/Counter/defaultdict`, `heapq`, `bisect`, `functools.lru_cache`/`cache`, recursion limits and big-integer/memory/time tradeoffs.
4. **No forced triple implementation:** conceptual skills travel across languages; major weekly Saturday lab is solved in C++; optional translation of **one** pattern into Java or Python each week earns a language-bridge badge, not a substitute for C++ mastery.

### 5.2 Cross-language equivalence table

| Concept | C++17 (main) | Java | Python 3 | Caution |
|---|---|---|---|---|
| dynamic array | `vector<int>` | `ArrayList<Integer>` | `list[int]` | Java boxing costs / Python object overhead |
| hash map | `unordered_map<K,V>` | `HashMap<K,V>` | `dict[K,V]` | expected O(1) not worst-case guarantee |
| ordered map | `map<K,V>` | `TreeMap<K,V>` | use `bisect`+list or specialized library | Python built-in dict not sorted by key |
| set | `unordered_set<T>` | `HashSet<T>` | `set[T]` | no guaranteed iteration order |
| ordered set | `set<T>` | `TreeSet<T>` | no built-in tree set | O(log n) operations typically |
| stack | `vector<T>` / `stack<T>` | `ArrayDeque<T>` | `list` | pick based on needed iteration |
| queue | `queue<T>` / `deque<T>` | `ArrayDeque<T>` | `collections.deque` | Python `list.pop(0)` is O(n) |
| min-heap | `priority_queue<T, vector<T>, greater<T>>` | `PriorityQueue<T>` | `heapq` | C++ default is **max**-heap |
| sort | `sort(v.begin(),v.end())` | `Arrays.sort` / `Collections.sort` | `list.sort()` | compare algorithm + cost |
| binary search | `lower_bound` | custom/`Collections.binarySearch` | `bisect_left` | boundary and insertion-point semantics differ |
| integer range | `int` / `long long` | `int` / `long` | arbitrary-size `int` | avoid silent 32-bit overflow |

### 5.3 What not to teach as best practice

- Do not teach manual raw `new/delete` as the routine way to store every linked list or tree. Explain ownership/lifetime and use clean RAII or judicious node demos; note judge interfaces may provide raw nodes.
- Do not claim `unordered_map` is worst-case O(1), recursion always safe, heap operations O(1), or that `std::sort` is stable.
- Do not claim all DSA interview problems require C++; many employers accept Java or Python. Language choice is primarily a pedagogical default.
- Do not share copied paid editorial text or unlicensed competitive problem statements. Link original problem pages and write original solution explanations.

---

## 6. Eight-phase roadmap overview and milestones

| Phase | Weeks | Hours | Expected capability | Gate |
|---|---:|---:|---|---|
| 1. Programming Languages | 1–6 | 90 | C++ primary, Java/Python bridges | Week 6 independent assessment |
| 2. Fundamental DSA | 7–12 | 90 | Analysis, arrays, sorting, search, math | Week 12 independent assessment |
| 3. Interview Patterns I | 13–18 | 90 | Two pointers, windows, recursion, lists, stacks | Week 18 independent assessment |
| 4. Trees and DS Design | 19–24 | 90 | Trees, heaps, hashes, tries | Week 24 independent assessment |
| 5. Graphs | 25–30 | 90 | Traversal, shortest paths, MST, advanced graphs | Week 30 independent assessment |
| 6. Greedy and Dynamic Programming | 31–36 | 90 | Greedy proof and systematic DP | Week 36 independent assessment |
| 7. Advanced Algorithms and Contests | 37–42 | 90 | Range queries, strings, number theory, contest practice | Week 42 independent assessment |
| 8. Product-Company Placement Readiness | 43–48 | 90 | Timed OA, mock interviews, CS fundamentals, role-specific research | Week 48 independent assessment |

**Note on practice volumes:** Aim for ~300–450 **distinct** problems across 48 weeks depending on experience, plus spaced re-solves. This is a **planning target**, NOT a claim that a particular sheet provides that exact number or an employer requires it. Quality and retention matter more than raw totals. Give each week a modest differentiated problem target (usually 6–12); reduce volume for mathematically hard graph/DP topics and increase revisits.

---

## 7. Complete 48-week / 288-day guided plan

**Daily structure:** Monday–Friday **2 hours each**, Saturday **5 hours**. The weekday sentence is the central learning exercise; each day's user interface must expand it to: 10-min recall → 20-min theory → 20-min selected chapter/visual → 60-min solve/test → 10-min reflection (modifiable). Saturday is a project/mock gate; a checked item alone does not prove competency. **Week resource IDs map to full URLs in §3–4**. For all DSA weeks, main code is C++17, Java/Python examples optional.

### Phase 1: Programming Languages — Weeks 1–6

**Outcome:** C++ primary, Java/Python bridges. Complete the gate at Week 6; do not advance if unable to implement a fresh exercise without tutorial assistance.

#### Week 01 — C++ setup, first programs & variables

**Primary resources:** `L-CPP-01`, `V-CPP` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Install modern C++ compiler/IDE, compile a hello-world. |
| Tuesday | 2 h | Study types, literals, integer division and overflow. |
| Wednesday | 2 h | Practice input/output, conditionals and booleans. |
| Thursday | 2 h | Use loops for number and pattern printing. |
| Friday | 2 h | Debug five broken programs; test edge inputs. |
| Saturday | 5 h | **Applied lab / mock:** Build CLI grade calculator + 8 warmups. |

**Checkpoint:** Explain compilation, input handling, loop invariant basics. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 02 — C++ functions, strings, vectors

**Primary resources:** `L-CPP-01`, `V-CPP` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Functions, value/reference parameters and scope. |
| Tuesday | 2 h | std::string indexing, substrings, conversions. |
| Wednesday | 2 h | C-style array vs std::array vs vector. |
| Thursday | 2 h | Nested loops, 2D vectors and iteration. |
| Friday | 2 h | Solve palindrome, frequency and matrix tasks. |
| Saturday | 5 h | **Applied lab / mock:** Build a text analyzer using vector/string and tests. |

**Checkpoint:** Use vector and function signatures from memory. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 03 — C++ memory, pointers, STL

**Primary resources:** `L-CPP-02`, `L-CPP-04`, `L-CPP-05`, `V-CPP` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | References, const, pointer basics, lifetime. |
| Tuesday | 2 h | Classes/structs, constructors, RAII principles. |
| Wednesday | 2 h | STL vector/deque/pair and iterator basics. |
| Thursday | 2 h | map/unordered_map/set/multiset; comparison. |
| Friday | 2 h | priority_queue/stack/queue; complexity lookup. |
| Saturday | 5 h | **Applied lab / mock:** Create STL cookbook with ten tiny examples. |

**Checkpoint:** Choose correct container and identify iterator invalidation. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 04 — C++ modern patterns, recursion & tooling

**Primary resources:** `L-CPP-01`, `L-CPP-03`, `L-TOOLS-01` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Recursive function calls and base cases. |
| Tuesday | 2 h | Pass-by-reference, copies, const correctness. |
| Wednesday | 2 h | Lambdas, custom comparators, stable vs unstable sorting. |
| Thursday | 2 h | Complexity of STL operations, bounds and heap API. |
| Friday | 2 h | Git, debugging, sanitizers and unit smoke tests. |
| Saturday | 5 h | **Applied lab / mock:** Build C++ problem-solving starter kit and 12 warmups. |

**Checkpoint:** Explain integer overflow, O() and recursion stack. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 05 — Java language bridge

**Primary resources:** `L-JAVA-01`, `V-JAVA` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Install JDK and run Java class; primitives and I/O. |
| Tuesday | 2 h | Conditions, loops, methods, arrays. |
| Wednesday | 2 h | Classes/objects and ArrayList, generics. |
| Thursday | 2 h | HashMap, HashSet, ArrayDeque, PriorityQueue. |
| Friday | 2 h | Comparator, StringBuilder, int/long overflow. |
| Saturday | 5 h | **Applied lab / mock:** Port 5 C++ exercises into Java, compare complexities. |

**Checkpoint:** Explain Java collections vs STL analogues. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 06 — Python language bridge & language assessment

**Primary resources:** `L-PY-01`, `L-PY-02`, `L-PY-03`, `V-PY` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Python setup, list/tuple/dict/set syntax. |
| Tuesday | 2 h | Functions, comprehensions and recursion. |
| Wednesday | 2 h | deque, Counter, defaultdict, heapq. |
| Thursday | 2 h | bisect, sort keys and input parsing. |
| Friday | 2 h | Compare code complexity and memory across languages. |
| Saturday | 5 h | **Applied lab / mock:** Port 5 C++ solutions into Python and complete language exam. |

**Checkpoint:** Pick primary C++ and demonstrate alternate-language basics. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

### Phase 2: Fundamental DSA — Weeks 7–12

**Outcome:** Analysis, arrays, sorting, search, math. Complete the gate at Week 12; do not advance if unable to implement a fresh exercise without tutorial assistance.

#### Week 07 — Complexity, proofs & input bounds

**Primary resources:** `D-MIT`, `D-STRIVER`, `V-FISET` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Big-O, Theta, Omega and growth plots. |
| Tuesday | 2 h | Nested loops, logarithms and amortized complexity. |
| Wednesday | 2 h | Worst/average cases, memory and call stack. |
| Thursday | 2 h | Loop invariants, correctness proofs by induction. |
| Friday | 2 h | Estimate allowable complexity from input constraints. |
| Saturday | 5 h | **Applied lab / mock:** Build benchmarking lab for linear vs quadratic vs nlogn. |

**Checkpoint:** Derive and justify time/space for 10 snippets. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 08 — Arrays and basic hashing

**Primary resources:** `D-STRIVER`, `D-CSES`, `D-NEET150` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Static/dynamic arrays and in-place operations. |
| Tuesday | 2 h | Frequency counting with vectors and maps. |
| Wednesday | 2 h | Prefix/suffix sums and difference arrays basics. |
| Thursday | 2 h | Duplicate detection and Two Sum variants. |
| Friday | 2 h | Sliding sum and min/max patterns. |
| Saturday | 5 h | **Applied lab / mock:** Solve 12 array/hashing tasks, document tradeoffs. |

**Checkpoint:** Implement prefix sums without hints. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 09 — Sorting and comparator design

**Primary resources:** `D-MIT-NOTES`, `D-STRIVER`, `D-VIS` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Selection, insertion, bubble conceptual comparison. |
| Tuesday | 2 h | Merge sort implementation and stability. |
| Wednesday | 2 h | Quick sort partition, recursion and worst case. |
| Thursday | 2 h | Counting/radix basics and std::sort comparator. |
| Friday | 2 h | Test duplicates, negatives, nearly sorted inputs. |
| Saturday | 5 h | **Applied lab / mock:** Implement merge sort, quick sort and benchmark. |

**Checkpoint:** Explain O(nlogn), stable vs unstable, partition invariant. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 10 — Binary search mastery

**Primary resources:** `D-STRIVER`, `D-NEET150`, `D-USACO` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Classic binary search boundaries and invariants. |
| Tuesday | 2 h | lower_bound/upper_bound, first/last occurrence. |
| Wednesday | 2 h | Rotated sorted arrays and peaks. |
| Thursday | 2 h | Binary search on answer/feasibility predicate. |
| Friday | 2 h | Floating point binary search caveats. |
| Saturday | 5 h | **Applied lab / mock:** Solve 10 binary-search cases including parametric search. |

**Checkpoint:** State monotonic predicate and prevent infinite loops. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 11 — Strings, character counts and KMP intro

**Primary resources:** `D-STRIVER`, `D-CPALG`, `D-NEET150` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Character encodings and C++ string functions. |
| Tuesday | 2 h | Anagram, frequency, palindrome algorithms. |
| Wednesday | 2 h | Naive pattern matching, prefix-function intuition. |
| Thursday | 2 h | KMP prefix-function implementation and tests. |
| Friday | 2 h | String hashing as optional concept, collision caution. |
| Saturday | 5 h | **Applied lab / mock:** Build string matcher, compare naive and KMP. |

**Checkpoint:** Explain KMP prefix fallback with one dry run. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 12 — Math, bits and foundation checkpoint

**Primary resources:** `D-CSES`, `D-STRIVER`, `D-CPALG` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | GCD/LCM, Euclid and sieve fundamentals. |
| Tuesday | 2 h | Modular arithmetic and fast exponentiation. |
| Wednesday | 2 h | Bitwise ops, shifts, XOR tricks and masks. |
| Thursday | 2 h | Counting, divisibility, primes and overflow. |
| Friday | 2 h | Mixed timed practice and review weak topics. |
| Saturday | 5 h | **Applied lab / mock:** Complete 90-minute fundamentals mock + 10 tasks. |

**Checkpoint:** Pass foundation gate: arrays, sorting, binary search, complexity. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

### Phase 3: Interview Patterns I — Weeks 13–18

**Outcome:** Two pointers, windows, recursion, lists, stacks. Complete the gate at Week 18; do not advance if unable to implement a fresh exercise without tutorial assistance.

#### Week 13 — Two pointers

**Primary resources:** `D-NEET150`, `D-LC75` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Opposite-direction pair sum and sorted arrays. |
| Tuesday | 2 h | Fast/slow pointers and cycle detection intuition. |
| Wednesday | 2 h | Deduplication and partitioning. |
| Thursday | 2 h | Container area and 3Sum reasoning. |
| Friday | 2 h | Solve 5 mixed two-pointer problems. |
| Saturday | 5 h | **Applied lab / mock:** Timed medium set + dry-run edge cases. |

**Checkpoint:** Choose pointer motion invariant correctly. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 14 — Sliding windows

**Primary resources:** `D-NEET150`, `D-STRIVER` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Fixed-size windows and O(n) reuse. |
| Tuesday | 2 h | Variable windows with counts/maps. |
| Wednesday | 2 h | Longest unique substring problems. |
| Thursday | 2 h | At most K vs exactly K transformations. |
| Friday | 2 h | Minimum window and negative-number caveats. |
| Saturday | 5 h | **Applied lab / mock:** Solve 8 windows and compare O(n) vs O(n²). |

**Checkpoint:** Derive window validity and shrinking rule. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 15 — Prefix sums, maps and subarray patterns

**Primary resources:** `D-STRIVER`, `D-CSES` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | One-dimensional and 2D prefix sums. |
| Tuesday | 2 h | Subarray sum = K using hash counts. |
| Wednesday | 2 h | Difference arrays and range updates. |
| Thursday | 2 h | Modulo prefix and divisibility cases. |
| Friday | 2 h | Kadane algorithm and negative-only arrays. |
| Saturday | 5 h | **Applied lab / mock:** Build subarray pattern notebook and 8 problems. |

**Checkpoint:** Explain when two pointers fails and prefix hash works. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 16 — Recursion and backtracking

**Primary resources:** `D-NEET150`, `D-STRIVER`, `D-USACO` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Recursion trees, frames and pruning. |
| Tuesday | 2 h | Subsets and permutations. |
| Wednesday | 2 h | Combination sum with deduplication. |
| Thursday | 2 h | N-Queens, constraint checking. |
| Friday | 2 h | Grid word search and restoration of state. |
| Saturday | 5 h | **Applied lab / mock:** Implement generic backtracking templates and 6 tasks. |

**Checkpoint:** Explain pruning, duplicate avoidance and recursion space. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 17 — Linked lists from scratch

**Primary resources:** `D-STRIVER`, `V-FISET` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Singly list, node ownership and traversals. |
| Tuesday | 2 h | Insert, delete, reverse and dummy node. |
| Wednesday | 2 h | Cycle detection, midpoint and merge. |
| Thursday | 2 h | Two-list merge and k-group/reversal variants. |
| Friday | 2 h | Doubly list, LRU design intro. |
| Saturday | 5 h | **Applied lab / mock:** Implement linked list toolkit and tests. |

**Checkpoint:** Handle null, one-node, cycles and memory cleanup. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 18 — Stacks and queues + mixed checkpoint

**Primary resources:** `D-NEET150`, `D-STRIVER`, `V-FISET` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Stack, queue and deque abstraction. |
| Tuesday | 2 h | Balanced brackets, next greater via stack. |
| Wednesday | 2 h | Monotonic stack / daily temperatures. |
| Thursday | 2 h | Monotonic deque / sliding window max. |
| Friday | 2 h | Expression parsing, postfix and evaluation. |
| Saturday | 5 h | **Applied lab / mock:** Mixed 90-minute patterns mock and queue mini-lab. |

**Checkpoint:** Recognize stack vs deque, derive amortized bound. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

### Phase 4: Trees and DS Design — Weeks 19–24

**Outcome:** Trees, heaps, hashes, tries. Complete the gate at Week 24; do not advance if unable to implement a fresh exercise without tutorial assistance.

#### Week 19 — Binary trees I

**Primary resources:** `D-STRIVER`, `D-NEET150`, `D-MIT` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Node representation; DFS traversals recursive. |
| Tuesday | 2 h | Iterative preorder/inorder/postorder. |
| Wednesday | 2 h | Level-order BFS, depth/height. |
| Thursday | 2 h | Diameter and balanced tree checks. |
| Friday | 2 h | Same/symmetric/subtree problems. |
| Saturday | 5 h | **Applied lab / mock:** Implement traversal visualizer data + 8 tree tasks. |

**Checkpoint:** Explain DFS recursion and level-order space. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 20 — Binary trees II

**Primary resources:** `D-STRIVER`, `D-NEET150` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Lowest common ancestor patterns. |
| Tuesday | 2 h | Path sum, root-to-leaf variants. |
| Wednesday | 2 h | Tree construction from traversal arrays. |
| Thursday | 2 h | Serialize/deserialize trees. |
| Friday | 2 h | Views, boundary, vertical-order traversal. |
| Saturday | 5 h | **Applied lab / mock:** Implement tree codec and timed tree mock. |

**Checkpoint:** Derive tree recursion state and avoid quadratic recomputation. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 21 — Binary search trees & balancing

**Primary resources:** `D-MIT-NOTES`, `V-FISET`, `L-CPP-02` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | BST invariant, search, insert and delete. |
| Tuesday | 2 h | Validate BST and kth smallest. |
| Wednesday | 2 h | Successor/predecessor and bounds. |
| Thursday | 2 h | Ordered sets/maps and balanced BST overview. |
| Friday | 2 h | AVL/RB rotation intuition, no reinventing every library. |
| Saturday | 5 h | **Applied lab / mock:** Implement BST and compare against std::set. |

**Checkpoint:** Explain BST worst-case vs balanced complexity. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 22 — Heaps and priority queues

**Primary resources:** `D-NEET150`, `V-FISET`, `L-CPP-05` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Binary heap array representation. |
| Tuesday | 2 h | Build heap and heapify operations. |
| Wednesday | 2 h | Kth largest and top-K frequent. |
| Thursday | 2 h | Merge K sorted lists and heap merging. |
| Friday | 2 h | Two-heaps median and interval scheduling prep. |
| Saturday | 5 h | **Applied lab / mock:** Build min/max heap from scratch, solve 8 tasks. |

**Checkpoint:** Choose heap correctly, compare O(log n) operations. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 23 — Hash tables and design tasks

**Primary resources:** `D-NEET150`, `V-FISET`, `L-CPP-04` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Hashing, load factor, collisions and rehash. |
| Tuesday | 2 h | Implement chaining hash table basic. |
| Wednesday | 2 h | Frequency tables, grouping, deduplication. |
| Thursday | 2 h | LRU cache: hash + doubly list. |
| Friday | 2 h | Time/space profiling and pathological collisions. |
| Saturday | 5 h | **Applied lab / mock:** Implement LRU cache and check O(1) average operations. |

**Checkpoint:** Explain collision resolution and ownership. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 24 — Tries and core-DS assessment

**Primary resources:** `D-NEET150`, `D-STRIVER`, `D-CPALG` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Trie insert, find and prefix lookup. |
| Tuesday | 2 h | Trie delete and memory model. |
| Wednesday | 2 h | Word dictionary wildcard search. |
| Thursday | 2 h | Word search II and pruning. |
| Friday | 2 h | Autocomplete prefix scoring design. |
| Saturday | 5 h | **Applied lab / mock:** Build autocomplete trie + 90-minute DS mock. |

**Checkpoint:** Implement trie from memory, state complexity clearly. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

### Phase 5: Graphs — Weeks 25–30

**Outcome:** Traversal, shortest paths, MST, advanced graphs. Complete the gate at Week 30; do not advance if unable to implement a fresh exercise without tutorial assistance.

#### Week 25 — Graphs representation and traversal

**Primary resources:** `D-MIT-VIDEOS`, `D-CSES`, `D-NEET150` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Graph types, adjacency list vs matrix. |
| Tuesday | 2 h | BFS shortest paths in unweighted graphs. |
| Wednesday | 2 h | DFS connectivity and components. |
| Thursday | 2 h | Grid BFS/DFS, flood fill and island counts. |
| Friday | 2 h | Bipartite check using coloring. |
| Saturday | 5 h | **Applied lab / mock:** Implement graph toolkit and solve 10 traversal tasks. |

**Checkpoint:** Explain visited marking and O(V+E). **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 26 — Directed graphs and topological ordering

**Primary resources:** `D-MIT-NOTES`, `D-CPALG`, `D-NEET150` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Cycle detection undirected via DFS/DSU. |
| Tuesday | 2 h | Directed cycle detection recursion colors. |
| Wednesday | 2 h | Kahn algorithm and indegrees. |
| Thursday | 2 h | DFS topological ordering and validation. |
| Friday | 2 h | Course schedule and dependency planning. |
| Saturday | 5 h | **Applied lab / mock:** Build dependency scheduler; test cycles. |

**Checkpoint:** Prove topo exists iff DAG. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 27 — Shortest paths

**Primary resources:** `D-MIT-VIDEOS`, `D-CPALG`, `D-CSES` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Dijkstra with heap; nonnegative weights. |
| Tuesday | 2 h | Bellman-Ford and negative cycles. |
| Wednesday | 2 h | 0-1 BFS and edge-weight constraints. |
| Thursday | 2 h | Floyd–Warshall all-pairs and memory. |
| Friday | 2 h | Choose proper algorithm for constraints. |
| Saturday | 5 h | **Applied lab / mock:** Implement 3 shortest-path solvers and compare. |

**Checkpoint:** Know negative-weight limitations of Dijkstra. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 28 — MST and disjoint sets

**Primary resources:** `D-CPALG`, `D-USACO`, `V-FISET` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | DSU parent, rank/size, path compression. |
| Tuesday | 2 h | Kruskal and edge sorting. |
| Wednesday | 2 h | Prim with heap and disconnected graphs. |
| Thursday | 2 h | Cycle detection, islands with DSU. |
| Friday | 2 h | Dynamic connectivity conceptual problems. |
| Saturday | 5 h | **Applied lab / mock:** Build network cost optimizer + 8 graph questions. |

**Checkpoint:** Explain MST cut intuition and DSU amortized cost. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 29 — Advanced graph patterns

**Primary resources:** `D-CSES`, `D-CPALG`, `D-USACO` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Multi-source BFS and state graph modeling. |
| Tuesday | 2 h | Graph state BFS (keys, distance, grid). |
| Wednesday | 2 h | Bridges/articulation points low-link intuition. |
| Thursday | 2 h | SCC Kosaraju/Tarjan basics. |
| Friday | 2 h | Eulerian paths and optional network flow intro. |
| Saturday | 5 h | **Applied lab / mock:** Solve 8 intermediate graph pattern tasks. |

**Checkpoint:** Know when state graph needs extra dimension. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 30 — Graph assessment and contest

**Primary resources:** `D-CSES`, `D-MIT`, `D-USACO` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Revisit BFS/DFS/toposort without notes. |
| Tuesday | 2 h | Revisit shortest paths and DSU. |
| Wednesday | 2 h | Proofs: cycles, reachable components, shortest paths. |
| Thursday | 2 h | Practice 2 medium + 1 hard graph problems. |
| Friday | 2 h | Timed graph mock, compare optimized solutions. |
| Saturday | 5 h | **Applied lab / mock:** Complete 2.5h graph contest + postmortem. |

**Checkpoint:** Pass graph gate, explain memory and weighted edges. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

### Phase 6: Greedy and Dynamic Programming — Weeks 31–36

**Outcome:** Greedy proof and systematic DP. Complete the gate at Week 36; do not advance if unable to implement a fresh exercise without tutorial assistance.

#### Week 31 — Greedy and interval techniques

**Primary resources:** `D-STRIVER`, `D-NEET150`, `D-USACO` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Greedy proof by exchange argument. |
| Tuesday | 2 h | Activity selection and interval merging. |
| Wednesday | 2 h | Jump Game and reachability. |
| Thursday | 2 h | Gas station, partitioning and heaps. |
| Friday | 2 h | Counterexamples to incorrect greedy choices. |
| Saturday | 5 h | **Applied lab / mock:** Solve 10 greedy problems + proof write-up. |

**Checkpoint:** Prove or disprove greedy strategy. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 32 — Dynamic programming foundation

**Primary resources:** `D-MIT-VIDEOS`, `D-ATCODER-DP`, `D-STRIVER` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Recurrence, overlapping subproblems. |
| Tuesday | 2 h | Memoization to tabulation. |
| Wednesday | 2 h | 1D DP: stairs, house robber. |
| Thursday | 2 h | 2D DP: grid paths and minimum path sums. |
| Friday | 2 h | Space optimization, state definition. |
| Saturday | 5 h | **Applied lab / mock:** Solve 8 DP intros; start AtCoder Frog/Vacation. |

**Checkpoint:** Explain state, transition, base and iteration order. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 33 — Knapsack, coin change and subsequences

**Primary resources:** `D-ATCODER-DP`, `D-STRIVER`, `D-CPALG` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | 0/1 knapsack and dimensions. |
| Tuesday | 2 h | Unbounded knapsack / coin change. |
| Wednesday | 2 h | Subset sum, partition variants. |
| Thursday | 2 h | LIS O(n²) and binary-search O(nlogn). |
| Friday | 2 h | Target sum and counting formulations. |
| Saturday | 5 h | **Applied lab / mock:** Solve AtCoder Knapsack/LCS + 6 equivalents. |

**Checkpoint:** Distinguish permutations vs combinations count. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 34 — String DP and interval DP

**Primary resources:** `D-MIT-VIDEOS`, `D-ATCODER-DP` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | LCS and reconstructing solution. |
| Tuesday | 2 h | Edit distance and alignment. |
| Wednesday | 2 h | Palindrome substring vs subsequence. |
| Thursday | 2 h | Interval DP: matrix chain and burst balloons. |
| Friday | 2 h | DP state compression and boundary pitfalls. |
| Saturday | 5 h | **Applied lab / mock:** Build DP workbook with state tables and 7 tasks. |

**Checkpoint:** Reconstruct a DP answer, not only length. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 35 — Tree DP, graph DP and bitmask

**Primary resources:** `D-ATCODER-DP`, `D-CPALG`, `D-USACO` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Tree take/skip DP and reroot overview. |
| Tuesday | 2 h | DAG longest path and topological DP. |
| Wednesday | 2 h | Bitmask state representation. |
| Thursday | 2 h | TSP subset DP and matching intuition. |
| Friday | 2 h | Digit DP optional stretch and optimization. |
| Saturday | 5 h | **Applied lab / mock:** Solve 6 advanced DP tasks, classify complexity. |

**Checkpoint:** Identify feasible 2^n constraints and transitions. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 36 — Advanced DP exam & recurrence review

**Primary resources:** `D-ATCODER-DP`, `D-STRIVER`, `D-LC150` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Translate recursion -> memoization -> tabulation. |
| Tuesday | 2 h | Recover decisions and verify base cases. |
| Wednesday | 2 h | Knapsack/LIS/LCS revisit on fresh tasks. |
| Thursday | 2 h | Review negative cases and optimization correctness. |
| Friday | 2 h | Timed DP mock with two medium + one hard. |
| Saturday | 5 h | **Applied lab / mock:** Complete 5-hour DP lab and postmortem. |

**Checkpoint:** Pass DP gate by deriving recurrences independently. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

### Phase 7: Advanced Algorithms and Contests — Weeks 37–42

**Outcome:** Range queries, strings, number theory, contest practice. Complete the gate at Week 42; do not advance if unable to implement a fresh exercise without tutorial assistance.

#### Week 37 — Range queries: Fenwick and segment trees

**Primary resources:** `D-CPALG`, `V-FISET`, `D-CSES` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Prefix sums vs Fenwick suitability. |
| Tuesday | 2 h | Fenwick point-update prefix-query implementation. |
| Wednesday | 2 h | Segment tree build, point update, range query. |
| Thursday | 2 h | Lazy propagation intro: range update. |
| Friday | 2 h | Comparison with sparse table and constraints. |
| Saturday | 5 h | **Applied lab / mock:** Implement both structures with random testing. |

**Checkpoint:** Pick DS based on update/query operations. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 38 — Advanced strings

**Primary resources:** `D-CPALG`, `D-CSES`, `D-STRIVER` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | KMP full implementation and prefix function. |
| Tuesday | 2 h | Z algorithm and substring match. |
| Wednesday | 2 h | Rabin-Karp rolling hash collision awareness. |
| Thursday | 2 h | Trie, suffix array and LCP concepts. |
| Friday | 2 h | Aho-Corasick intro as optional stretch. |
| Saturday | 5 h | **Applied lab / mock:** Build multi-algorithm string search lab. |

**Checkpoint:** State complexity, hashing collision caveat. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 39 — Number theory and combinatorics

**Primary resources:** `D-CPALG`, `D-CSES`, `D-USACO` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Sieve and segmented sieve ideas. |
| Tuesday | 2 h | Mod inverse, Fermat conditions, Euclid. |
| Wednesday | 2 h | nCr precomputation and modular arithmetic. |
| Thursday | 2 h | Fast power, factorials and constraints. |
| Friday | 2 h | Combinatorics/counting pattern contest. |
| Saturday | 5 h | **Applied lab / mock:** Build modular toolkit and 8 tasks. |

**Checkpoint:** Use modular inverses only when valid. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 40 — Advanced tree / graph enrichment

**Primary resources:** `D-CPALG`, `D-USACO`, `D-CSES` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Euler tour, subtree flattening. |
| Tuesday | 2 h | LCA binary lifting. |
| Wednesday | 2 h | Sparse table and RMQ. |
| Thursday | 2 h | SCC review, bridges and articulation. |
| Friday | 2 h | Optional network flow and matching basics. |
| Saturday | 5 h | **Applied lab / mock:** Implement LCA + tree query lab. |

**Checkpoint:** Explain logarithmic lifting and preprocessing. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 41 — Competitive programming workflow

**Primary resources:** `D-CF`, `D-USACO`, `D-CSES` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Learn contest IO speed and safe templates. |
| Tuesday | 2 h | Analyze constraints and choose algorithm. |
| Wednesday | 2 h | Solve mixed A/B/C-style practice. |
| Thursday | 2 h | Observe editorial after independent attempt. |
| Friday | 2 h | One timed contest; build error log. |
| Saturday | 5 h | **Applied lab / mock:** Join a public practice contest / virtual contest. |

**Checkpoint:** Improve time management and test coverage. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 42 — Algorithm mastery diagnostic

**Primary resources:** `D-LC150`, `D-NEET150`, `D-CSES` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Mixed easy/medium triage. |
| Tuesday | 2 h | Timed arrays/trees/graphs mock. |
| Wednesday | 2 h | Timed DP/greedy/strings mock. |
| Thursday | 2 h | Review error log and weak topic microdrills. |
| Friday | 2 h | Full 90-minute mixed technical simulation. |
| Saturday | 5 h | **Applied lab / mock:** Complete stretch problem and architecture recap. |

**Checkpoint:** Meet pacing and communication goals before placement phase. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

### Phase 8: Product-Company Placement Readiness — Weeks 43–48

**Outcome:** Timed OA, mock interviews, CS fundamentals, role-specific research. Complete the gate at Week 48; do not advance if unable to implement a fresh exercise without tutorial assistance.

#### Week 43 — Coding assessment execution

**Primary resources:** `I-MS`, `I-AMAZON-TOPICS`, `D-LC150` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Online assessment structure, proctoring ethics. |
| Tuesday | 2 h | Timed two-question medium mock. |
| Wednesday | 2 h | Debug template failures, test boundaries. |
| Thursday | 2 h | Complexity and memory under time limits. |
| Friday | 2 h | Communicate solution plan verbally. |
| Saturday | 5 h | **Applied lab / mock:** 3-hour mock OA plus review + 2 CS quizzes. |

**Checkpoint:** Solve under timer without unauthorized assistance. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 44 — Interview patterns I

**Primary resources:** `D-NEET150`, `D-LC150`, `I-MS` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Arrays/hashing and two pointers rapid review. |
| Tuesday | 2 h | Sliding window and interval patterns. |
| Wednesday | 2 h | Binary search and searching answer. |
| Thursday | 2 h | Linked list and stack/queue review. |
| Friday | 2 h | Live mock: think aloud, test, optimize. |
| Saturday | 5 h | **Applied lab / mock:** 2 coding interviews + 1 peer review. |

**Checkpoint:** Show brute force to optimized progression. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 45 — Interview patterns II

**Primary resources:** `D-NEET150`, `D-LC150`, `I-MS` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Trees/BST and heaps timed review. |
| Tuesday | 2 h | Graphs BFS/DFS/topo path choices. |
| Wednesday | 2 h | Dynamic programming explanations. |
| Thursday | 2 h | Backtracking and pruning. |
| Friday | 2 h | Mixed interview with ambiguous constraints. |
| Saturday | 5 h | **Applied lab / mock:** 2 interviewer-style mocks + behavioral story. |

**Checkpoint:** No pattern keyword hints needed. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 46 — Core CS + OOP + project evidence

**Primary resources:** `I-MS-STUDENT`, `I-GOOGLE-JOBS`, `L-TOOLS-01` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | OOP design, SOLID basics relevant to coding. |
| Tuesday | 2 h | DBMS SQL/joins/index fundamentals. |
| Wednesday | 2 h | OS processes/threads/memory/deadlocks. |
| Thursday | 2 h | Networks HTTP/TCP/DNS fundamentals. |
| Friday | 2 h | Resume, GitHub, explain a project with tradeoffs. |
| Saturday | 5 h | **Applied lab / mock:** Build project walk-through and 30 Q CS flashcards. |

**Checkpoint:** Communicate engineering tradeoffs credibly. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 47 — Role/company-specific preparation

**Primary resources:** `I-AMAZON`, `I-MS`, `I-GOOGLE-JOBS` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | Target role and geography research via official careers. |
| Tuesday | 2 h | Tailor mock to relevant DS topics, not folklore. |
| Wednesday | 2 h | Amazon LP STAR stories / Microsoft testing & design. |
| Thursday | 2 h | Optional online aptitude / verbal / SQL as posting demands. |
| Friday | 2 h | Behavioral + code review mock. |
| Saturday | 5 h | **Applied lab / mock:** Conduct 2 role-targeted mock loops and revise resume. |

**Checkpoint:** Source each company claim to official posting or prep page. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

#### Week 48 — Final placement-readiness assessment

**Primary resources:** `I-MS`, `I-AMAZON-TOPICS`, `D-LC150` (link lookup in §3–4). **Duration:** 15 h.

| Day | Time | Specific learning task / exercise |
|---|---:|---|
| Monday | 2 h | 90-min independent mock OA with reports. |
| Tuesday | 2 h | 45-min interactive DSA interview + tests. |
| Wednesday | 2 h | 45-min second DSA interview, alternate pattern. |
| Thursday | 2 h | Behavioral round + project discussion. |
| Friday | 2 h | Review failure log; make future 8-week plan. |
| Saturday | 5 h | **Applied lab / mock:** Final capstone: multi-round simulated loop and portfolio submission. |

**Checkpoint:** Final gate: independent solution, tests, explanations, ethical record. **Evidence:** C++ source, passing edge cases, independent complexity explanation, and notes on mistakes. **Optional bridge:** translate one representative solution into Java OR Python.

---

## 8. Pattern-to-resource and practice map

A single coherent spine prevents resource overload: **Striver A2Z for breadth → NeetCode 150 for interview pattern synthesis → CSES/USACO for proof and robust programming → MIT/CP-Algorithms for theory and advanced enrichment**. Never assign four full courses for the same topic. Watch a video only when targeted conceptual help adds value.

| Pattern / skill | Learn | Practice (real destination) | First scheduled weeks |
|---|---|---|---|
| C++ STL | `L-CPP-01` + `L-CPP-02` | [CSES Intro](https://cses.fi/problemset/) | 1–4 |
| Complexity / amortized analysis | `D-MIT`, `V-FISET` 00:04:28 | [CSES introductory set](https://cses.fi/problemset/) | 7 |
| Arrays/hashing | `D-STRIVER`, `D-NEET150` | [Two Sum](https://leetcode.com/problems/two-sum/), [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/), [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | 8,15 |
| Sorting | `D-MIT-NOTES`, `D-STRIVER` | [CSES Sorting/Searching category](https://cses.fi/problemset/) | 9 |
| Binary search | `D-STRIVER`, `D-CPALG` | [Binary Search](https://leetcode.com/problems/binary-search/), [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | 10 |
| Strings | `D-STRIVER`, `D-CPALG` | [Valid Anagram](https://leetcode.com/problems/valid-anagram/), [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 11,38 |
| Two pointers | `D-NEET150` | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/), [3Sum](https://leetcode.com/problems/3sum/) | 13 |
| Sliding window | `D-NEET150` | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/), [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | 14 |
| Prefix sums | `D-STRIVER` | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/), [CSES](https://cses.fi/problemset/) | 15 |
| Backtracking | `D-NEET150`, `D-STRIVER` | [Subsets](https://leetcode.com/problems/subsets/), [Combination Sum](https://leetcode.com/problems/combination-sum/), [N-Queens](https://leetcode.com/problems/n-queens/) | 16 |
| Linked lists | `V-FISET` 00:35:03 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/), [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | 17 |
| Monotonic stack | `D-NEET150` | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/), [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | 18 |
| Binary trees | `V-FISET` 03:03:54, `D-STRIVER` | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/), [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | 19–21 |
| Heaps | `V-FISET` 01:31:32, `L-CPP-05` | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/), [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | 22 |
| LRU / hashing | `V-FISET` 03:59:26 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | 23 |
| Trie | `D-NEET150`, `D-STRIVER` | [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/), [Word Search II](https://leetcode.com/problems/word-search-ii/) | 24 |
| Graph BFS/DFS | `D-MIT-VIDEOS`, `D-CSES` | [Number of Islands](https://leetcode.com/problems/number-of-islands/), [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | 25 |
| Toposort | `D-CPALG`, `D-NEET150` | [Course Schedule](https://leetcode.com/problems/course-schedule/) | 26 |
| Shortest paths | `D-MIT-VIDEOS`, `D-CPALG` | [Network Delay Time](https://leetcode.com/problems/network-delay-time/), [CSES graph tasks](https://cses.fi/problemset/) | 27 |
| DSU / MST | `V-FISET` 02:28:26 | [Number of Connected Components](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) (some problems may require premium), [CSES graph tasks](https://cses.fi/problemset/) | 28 |
| Greedy | `D-STRIVER`, `D-NEET150` | [Jump Game](https://leetcode.com/problems/jump-game/), [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | 31 |
| DP 1D/2D | `D-MIT-VIDEOS`, `D-ATCODER-DP` | [House Robber](https://leetcode.com/problems/house-robber/), [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | 32 |
| Knapsack/LIS/LCS | `D-ATCODER-DP` | [AtCoder DP D Knapsack](https://atcoder.jp/contests/dp/tasks/dp_d), [AtCoder DP F LCS](https://atcoder.jp/contests/dp/tasks/dp_f) | 33–34 |
| Advanced DP | `D-MIT-VIDEOS`, `D-ATCODER-DP` | [AtCoder DP problems](https://atcoder.jp/contests/dp/tasks?lang=en) | 35–36 |
| Fenwick/segment tree | `V-FISET` 05:45:36, `D-CPALG` | [CSES Range Queries category](https://cses.fi/problemset/) | 37 |
| Number theory / string algorithms | `D-CPALG` | [CSES Math and Strings categories](https://cses.fi/problemset/) | 38–40 |
| Placement mocks | `I-MS`, `I-AMAZON-TOPICS` | `D-LC150`, `D-NEET150` | 43–48 |

**Problem availability caveat:** Some LeetCode problems/editorials may require login or premium access. For any gated link, show the CSES/Striver/NeetCode alternate instead. Do not rehost protected content. For each attached problem store `canonical_url`, `slug`, `difficulty_snapshot` only if actually obtained from the source, `paid_status` (verified or unknown), `language`, and a user-generated attempt log; don't hardcode employer frequencies.

---

## 9. Practice ladder, revision protocol, weekly assessments

### 9.1 Concrete repeatable method (all topics)

1. Read problem; restate inputs, outputs, constraints and one sample in your own words.
2. Write naive approach + Big-O before seeing editorial.
3. Try independent implementation for 20–35 min (easy) / 35–50 min (medium) / 50–70 min (hard/stretch), adjusted to ability. Hints first, full solution only after meaningful attempt.
4. Dry-run special cases: empty, n=1, duplicates, negative, overflow, large n, disconnected graph, cycles, etc as applicable.
5. After accepted answer, explain the invariant and time/space complexity; compare one alternative approach.
6. Re-solve without looking after 1 day, 7 days, 21 days and 45 days if errors/slow recognition occurred. Record `due_at` and result, not only a single `completed` boolean.
7. Mark **mastered** only after independent correct re-solve or validated assessment, not a passive video checkbox.

### 9.2 Recommended practice amounts

- Weeks 1–6: 5–10 syntax mini-exercises/week, 1 Saturday program, no arbitrary LeetCode quota.
- Weeks 7–12: 8–12 introductory problems/week; more short puzzles than hard tasks.
- Weeks 13–24: 7–11 mixed easy/medium/week (one stretch if ready).
- Weeks 25–36: 5–9 deeper graph/DP tasks/week with proofs.
- Weeks 37–42: 5–8 advanced tasks/week + at least one timed contest/mock every 2 weeks.
- Weeks 43–48: 5–8 unseen problems/week + interview communication and review, prioritize weak patterns.

**Measurement:** Store distinct problems attempted/solved, time-to-first-correct, editorial-used boolean, solution language, explanation quality, complexity correctness, test coverage, 7/21/45-day recall, interviewer rubrics. No fake accuracy percentages. Suggested self-evaluation rubric (0–2 each): problem modeling, algorithm choice, correctness, complexity, communication = 10 possible. Aim for >=8/10 **and** a passing independent task; not a claim that employers score this way.

### 9.3 Phase gates

| Week | Gate task | Pass evidence |
|---|---|---|
| 6 | Recreate 5 C++ problems; port 2 into Java and Python | Correct outputs and explain differences |
| 12 | Arrays/sorting/search/math assessment | 80% rubric and complexity justifications |
| 18 | 90-min mixed patterns assessment | New medium tasks without recipe prompts |
| 24 | Tree/heap/hash/trie build from scratch | Implementation + tests + memory explanation |
| 30 | Graph contest | BFS/DFS, topo, shortest path and DSU on fresh examples |
| 36 | DP assessment | Correct state/recurrence/tabulation for at least 2 unseen tasks |
| 42 | Mixed algorithms mock | Clear communication and sustained performance |
| 48 | Placement-ready simulated interview loop | Timed OA + two live mocks + behavioral/project explanation |

**No forced locks:** Record `ready`, `needs_revision`, `mastered` but let learner review any content regardless of progress. Retakes should create new attempts, not overwrite prior scores.

---

## 10. Product-company and Indian placement preparation

### 10.1 What reliable employer evidence supports

- **Microsoft official technical interviewing guide** explicitly discusses problem-solving, design, coding in your strongest language, testing, complexity and common arrays/strings/lists/trees/hashmaps/graphs; it also emphasizes communication and explaining tradeoffs. Source: `I-MS`.
- **Amazon official software development interview topics** provides employer preparation material on coding examples, Leadership Principles and system design context. Source: `I-AMAZON-TOPICS`. Prepare behavioral STAR stories, but never promise every candidate has the same rounds.
- **Google Careers** role descriptions differ. Research the exact job requisition and preferred qualifications; do not make blanket claims based on old LeetCode tags. Source: `I-GOOGLE-JOBS`.
- **Other product firms / campus drives:** discover the actual job posting and assessment instructions first; if no official interview outline is found, label any proposed preparation plan as **general recommended practice**, not verified company-specific interview data.

### 10.2 Optional target-company clusters (unverified interview specifics)

| Candidate focus | Companies to track (illustrative) | Personalized emphasis, not a promised company exam |
|---|---|---|
| Big tech and major global products | Google, Microsoft, Amazon, Meta, Apple | Medium/hard patterns, explanation, correctness, role-specific architecture |
| SaaS, enterprise, cloud | Salesforce, Atlassian, ServiceNow, Adobe, Oracle, Intuit | DSA + practical coding/OOP/SQL/design based on role |
| E-commerce / fintech / marketplaces | Flipkart, Uber, Walmart Global Tech, PayPal, PhonePe, Razorpay | Coding tests, data modeling, concurrency and relevant engineering judgment |
| Indian campus/off-campus broader roles | Company-specific campus drives including product and service roles | Online tests, possible aptitude, DBMS/OS/CN/OOP, resume, English/communication as required |

**Target view must show:** organization, role, location, graduation eligibility, actual posting URL, collected-on date, official interview prep URL if available, status (verified/unverified), candidate-selected focus and no invented latest hiring deadlines.

### 10.3 Weeks 43–48 placement sprint

- **43 — Online assessment:** set 60/90/120-minute timers, code without autocomplete if testing environment demands, analyze TLE/MLE and hidden edge cases, practice ethical exam conditions.
- **44 — Coding interviews: arrays/patterns:** verbally clarify, give brute-force baseline, optimize, test and state time+space.
- **45 — Coding interviews: trees/graphs/DP:** distinguish recognized pattern from reasoning; handle unexpected constraints.
- **46 — CS fundamentals & resume:** OOP, OS, DBMS, computer networks, SQL joins, 2 project stories, GitHub code walkthrough.
- **47 — Company/role tailoring:** official interview pages, ask recruiter for format, Amazon LP examples if relevant, behavioral STAR, optional aptitude if job posting demands.
- **48 — Final mock loop:** 1 OA + 2 technicals + 1 behavioral/project session. Keep scores and deficiencies; no guarantee of hiring.

### 10.4 Extra study (separate from 15h base when necessary)

A deep independent OS/DBMS/CN course and system design interview preparation are broader than DSA. These are **placement companion modules** and should not silently consume the entire algorithms schedule. Provide a separate optional companion planner (2–4 extra hours/week) or reschedule the 48-week track if student cannot allocate more time.

---

## 11. Sample lessons, exercise rubrics, and example practice questions

### Example: Week 10 Day 2 — First/last occurrence (2 hours)

- **Outcome:** Given sorted array and target, use binary search boundaries to return first/last indices. Handle no match and duplicates.
- **Prerequisites:** W08 arrays, W09 sort, W10 Day 1 binary-search invariant.
- **Read (20 min):** `L-CPP-03` for `lower_bound` and `upper_bound` contracts, `D-STRIVER` Binary Search section.
- **Watch/visualize (20 min):** Choose exact matching Striver A2Z lesson link **from current sheet** or binary-search animation. **No invented timestamp**.
- **Code (60 min):** Implement two manual binary searches in C++17, compare with STL and solve two variations. Prove `lo`/`hi` convergence.
- **Review (20 min):** Table of tests: empty, one target, one nontarget, all equal, beginning/end matches, repeated duplicates, negative values.
- **Checklist:** reading done; video or animation done; two accepted implementations; complexity explained; 3 edge cases tested; can re-implement in 10 min.
- **Mastery criterion:** Explain `lower_bound` vs `upper_bound` and return `[-1,-1]` for absent values without off-by-one bugs.

### Example: Week 25 Day 2 — Unweighted BFS (2 hours)

- **Outcome:** Show why BFS yields shortest **edge-count** path in an unweighted graph, not shortest weighted path.
- **Resources:** MIT Lecture 9 from `D-MIT-VIDEOS`; `D-CSES` graph category; VisuAlgo BFS animation.
- **Practice:** [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/), [CSES task directory](https://cses.fi/problemset/) + fresh graph instances.
- **Coding requirement:** adjacency vector, queue, distance initialized as sentinel, parent reconstruct, visit marking. Complexity `O(V+E)` on adjacency lists.
- **Test cases:** isolated node, disconnected nodes, cycles, single-node graph, multiple sources, no path.

### Example: Week 33 Day 1 — 0/1 Knapsack (2 hours)

- **Outcome:** Derive recurrence from item index and remaining capacity, demonstrate why in-place 1D DP loops **descending** for 0/1 knapsack.
- **Resources:** [AtCoder DP D](https://atcoder.jp/contests/dp/tasks/dp_d), MIT lectures 15–18, Striver DP sheet.
- **Exercise:** brute-force small n, top-down memo, bottom-up 2D, bottom-up 1D; randomized compare on tiny cases.
- **Checkpoint:** explain why forward-order reuse changes the mathematical problem.

### Assessment rubric template (reuse for each weekly Saturday)

| Criterion | 0 | 1 | 2 |
|---|---|---|---|
| Problem understanding | Misreads constraints | Mostly right, misses edge | Correctly models constraints/edge cases |
| Algorithm | Incorrect/inefficient | Works with hint | Independently selects/proves approach |
| Correctness | Fails basic cases | Passes common cases | Passes normal and adversarial tests |
| Complexity | Missing/incorrect | Partially reasoned | Correct time and auxiliary space |
| Explanation/testing | No coherent explanation | Partial explanation | Clear walkthrough + deliberate tests |

The app must store scoring evaluator (self/mentor/automated tests) separately and never show “verified mastery” when only self-checked. Every unsupervised timer is a personal practice measurement, not a formal proctored assessment.

---

## 12. Content data format, attribution, and resource integrity

### 12.1 Canonical namespaced schema (example; adapt to actual existing project)

```json
{
  "track_id": "dsa-cpp-main-v1",
  "track_slug": "dsa",
  "title": "DSA Mastery Academy",
  "primary_language": "cpp17",
  "supported_languages": ["cpp17", "java", "python3"],
  "total_weeks": 48,
  "scheduled_hours_per_week": 15,
  "phase_count": 8,
  "theme_ref": "existing-academy-design-tokens",
  "additive_only": true,
  "week": {
    "id": "dsa-w10",
    "day_id": "dsa-w10-d02",
    "lesson_slug": "binary-search-first-last-occurrence",
    "duration_minutes": 120,
    "resource_ids": ["L-CPP-03", "D-STRIVER"],
    "video_chapter_ids": [],
    "tasks": ["read", "watch_or_visualize", "implement", "test", "explain"],
    "mastery": {"required": true, "rubric_version": "dsa-v1"}
  }
}
```

### 12.2 Resource object and strict timestamp rules

```json
{
  "id": "V-FISET-BIGO",
  "course_id": "V-FISET",
  "kind": "video_chapter",
  "title": "Introduction to Big-O",
  "creator": "William Fiset / freeCodeCamp.org",
  "url": "https://www.youtube.com/watch?v=RBSGKlAvoiM&t=268s",
  "start_seconds": 268,
  "timestamp_status": "description_chapter_verified",
  "content_audit_status": "not_frame_by_frame_audited",
  "original_published_year": 2019,
  "verified_at": "2026-10-11",
  "language": "java",
  "curriculum_use": ["dsa-w07"],
  "version_warning": "Demonstrations in Java; main track lab is C++17"
}
```

**Validation rules:** URL and video ID must match actual catalog; start_seconds >=0; no dynamic timestamp automatically invented; resource foreign keys must exist; one canonical problem per platform+slug; week 1–48, day 1–6; lessons accessible without requiring all previous checkboxes; background fetch must not erase saved resource notes. Mark unavailable/paid instead of silently substituting invented alternatives.

### 12.3 Suggested relation groups

- `learning_tracks(id, slug, title, description, color_token, published_version)`
- `learning_phases(id, track_id, sort_order, title)`
- `learning_weeks(id, track_id, phase_id, week_number, milestone)`
- `learning_days(id, week_id, day_number, minutes, objective)`
- `learning_resources(id, canonical_url, source_type, provenance_status, last_checked_at)`
- `learning_video_chapters(id, resource_id, start_seconds, label, timestamp_status)`
- `learning_day_resources(day_id, resource_id, role, sort_order)`
- `learning_problems(id, provider, canonical_slug, canonical_url, paid_status)`
- `learning_day_problems(day_id, problem_id, intent, sort_order)`
- `learning_user_progress(user_id, track_id, day_id, status, last_attempt_at)`
- `learning_problem_attempts(user_id, track_id, problem_id, language, status, hint_used, duration_seconds, reflection)`
- `learning_assessments(id, track_id, week_id, rubric_version)` and append-only `learning_assessment_attempts`
- `learning_review_queue(user_id, track_id, problem_id, due_at, recall_quality)`

If equivalent tables already exist, **extend them additively** with a track discriminator and backfill existing backend entries as `backend` without changing semantics; only create new tables when needed. Never create a second incompatible user/auth system.

---

## 13. Codex non-destructive integration requirements

### 13.1 Mandatory execution order

1. **Inspect the existing project** before any changes: framework, routes, auth, persistence, content loader, test runner, style tokens, backend seed pipeline, existing traffic paths.
2. **Create a protection baseline:** run existing tests/typecheck/build; record result; `git status` baseline; avoid overwriting uncommitted work. If a project file already exists, **read first** and patch minimally.
3. Add `DSA_MASTERY_RESEARCH_ROADMAP_CODEX.md` as a new content source; treat backend research and backend website spec as **immutable references** except a non-breaking index/navigation addition.
4. Add a new learning track with `track_id=dsa-cpp-main-v1`, slug `/dsa`; provide navigational choice **Backend** vs **DSA**, preserve existing backend defaults and deep links.
5. Add DSA content models/routes/components under a dedicated namespace, such as `features/dsa/`, `/dsa/roadmap`, `/dsa/weeks/[week]`, `/dsa/weeks/[week]/days/[day]`, `/dsa/resources`, `/dsa/practice`, `/dsa/interviews`, `/dsa/progress`. Adapt exact paths to router in use; **do not rename backend routes**.
6. Run additive database migration(s). Never truncate, reset, delete or rewrite backend-related rows. Preserve user account IDs, checkpoints, bookmarks, progress, local state, timestamps and assessment records.
7. Import 8 phases, 48 weeks, 288 study days. Link actual resources by IDs from §3–4. Do not fabricate individual question difficulty/solution/author/timestamp data when not available.
8. Reuse existing global layout, auth, navigation patterns and color system; DSA has new sidebar groups/cards but does not change backend's hierarchy or theme. No blue/purple/indigo anywhere; use existing forest/terracotta/ivory/amber styles.
9. Feature test and regression test. If backend baseline fails due to unrelated existing issues, **report it separately**; do not silently edit backend curriculum to make new DSA code pass.
10. Document migration, rollback, fixtures, sample learner journey, known research gaps and data provenance.

### 13.2 Must preserve unchanged

- Backend 36-week / 24-module course, all existing lesson text and source URLs
- Existing FastAPI/PostgreSQL/REST UI routes, auth/roles, account data and data-fetching behavior
- Progress/checklists/bookmarks/notes/review queues and original IDs
- Site identity, typography, warm-neutral/forest/terracotta/amber tokens
- SEO and navigation of backend pages; redirects should only be added if necessary and never remove original paths
- Existing CI checks, seed order and migrations; avoid rewriting historical migration files
- Existing responsive behavior, keyboard focus, screenreader semantics and error handling

### 13.3 UI requirements: separate but coherent DSA track

- New track picker card on dashboard, with **Backend Mastery** preserved and **DSA Mastery** added.
- DSA roadmap: 8 phase rows × 6 weekly cards each; progress segmented by topic and required checkpoint.
- Lesson: objectives, prerequisites, short concept notes, chosen code-language tab (default C++), verified documentation link, timestamped video chapter if available, editor/notes, manual/validated problem evidence, test cases, quiz.
- Resource browser: filter `video | official reference | practice | visualizer | interview`; sort by phase/week, skill, status and language; link provenance and last verification date.
- Coding drill history: problem links to **original platform**, timer, self-reported results, hint use, C++/Java/Python notes, spaced repetition.
- Interview dashboard: target organization tags, source-status warnings, timed mocks, CS companions and STAR story notes; never render unverified “top 50 company questions” lists as fact.
- Accurate progress: watched vs completed vs solved vs mastered separately; persistence in existing auth/store architecture; no decorative fake percentages.
- Navigation/accessibility: deep link to any DSA day; skip-to-content, keyboard focus, contrast checking, reduced motion, mobile responsive and search indexing.

### 13.4 CSS/design hard restrictions

Reuse the existing spec's light palette: canvas `#F8F5EE`, paper `#FCFAF5`, ink `#263329`, forest `#2E6748`, terracotta `#B35435`, amber `#C9952B`, line `#DDD5C6`, charcoal terminal `#202A23`. **Do not introduce blue or purple hues**, including focus outlines, syntax themes, charts, gradients, DSA logos, badge fills or external UI libraries. In chart libraries override all default palettes. Do not edit site-global tokens to solve a local DSA styling problem.

### 13.5 Conservative file placement recommendation

```text
content/
  backend/                            # existing content: DO NOT REWRITE
  dsa/
    DSA_MASTERY_RESEARCH_ROADMAP_CODEX.md
    phases/                           # generated structured phase files if app uses them
    weeks/                            # W01..W48 lesson data
    resources/                        # shared canonical reference index
features/
  backend/                            # existing: leave intact
  dsa/                                # new isolated feature components
...
```

If project's actual structure differs, use native conventions instead of force-creating this tree. Key rule: **additive isolation, not wholesale restructure**.

---

## 14. Definition of done and verification checklist

**Curriculum correctness**

- [ ] Exactly **8 phases, 48 weeks, 288 daily sessions**, with 15h/week; week/day titles and assignments match §7.
- [ ] C++17 defaults; Java/Python references/bridges are available where meaningful.
- [ ] 48 weekly checkpoints, independent assessment and spaced-repetition options.
- [ ] Resource IDs resolve, URLs valid or visibly flagged unavailable; a resource is never misrepresented as officially endorsed by an employer.
- [ ] Video chapter starts match source description and use correct `t=` seconds; no made-up lengths or unsupported chapter ranges.
- [ ] Original problem platform attribution and canonical links; gated/premium problems are marked.

**Non-regression**

- [ ] Existing backend URL navigation and all 36 weeks still work.
- [ ] Backend progress, notes, bookmarks and activity history remain intact after migration.
- [ ] Backend research MD and existing builder spec unchanged unless explicit user asks.
- [ ] Old and new tracks have separate slugs, entity IDs, week progress and completion counts.
- [ ] Existing sign-in and permission checks still apply; users cannot read/edit others' progress.
- [ ] Backend-only learner sees no forced DSA onboarding or loss of previous 'continue learning' behavior.
- [ ] DB migration has a reversible non-destructive plan and test seed is idempotent.
- [ ] Existing regression tests pass; new track has smoke/unit/integration tests.
- [ ] Light and dark (if shipped) color audit shows **no blue, purple, indigo or violet**; contrast meets WCAG.
- [ ] Mobile, keyboard, screen readers, loading, empty and error states behave correctly.
- [ ] Staging deploy is verified; no invented badge/progress/company statistics.

**Suggested automated checks:** snapshot critical backend routes before/after; migration row-count and checksum for backend data; DSA count assert phase=8/week=48/day=288; resource table FK integrity; video start must be >=0; no duplicated slug/track collisions; color token lint; responsive screenshots; JS build/TS typecheck; DB permission and ownership tests.

---

## 15. Source provenance and maintenance schedule

**Research as of 2026-10-11.** Sources were checked by locating their public web pages and, for the four chaptered YouTube courses, checking the surfaced creator-description chapter list; this does **not** mean each video minute or every problem statement was manually inspected. Source URLs may change; counts and catalog availability are dynamic.

- **Primary language sources:** [LearnCpp](https://www.learncpp.com/), [cppreference](https://en.cppreference.com/w/cpp/container), [dev.java](https://dev.java/learn/), [Python docs](https://docs.python.org/3/tutorial/).
- **Core curricula:** [Striver A2Z](https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet), [NeetCode roadmap](https://neetcode.io/roadmap), [CSES](https://cses.fi/problemset/), [USACO Guide](https://usaco.guide/), [MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/), [CP-Algorithms](https://cp-algorithms.com/), [AtCoder DP](https://atcoder.jp/contests/dp/tasks?lang=en).
- **Chaptered video identities and timestamps:** [C++ Bro Code](https://www.youtube.com/watch?v=-TkoO8Z07hI), [Java Bro Code](https://www.youtube.com/watch?v=xTtL8E4LzTQ), [Python Bro Code](https://www.youtube.com/watch?v=ix9cRaBkVe0), [William Fiset](https://www.youtube.com/watch?v=RBSGKlAvoiM).
- **Interview-specific evidence:** [Microsoft Technical Interviewing](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing), [Amazon SDE topic videos](https://prod.gamma.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics), [Google Careers](https://www.google.com/about/careers/applications/). Match current role-specific details instead of extrapolating universal hiring stages.
- **Monthly content task:** Check dead links, major URL redirects, whether YouTube creator chapter markers changed, if a course now has a paywall, and languages supported by each judge. Put changes in an editorial changelog; preserve user progress even if a resource is deprecated. Keep company prep snapshots dated and do not store unverified anonymous "asked at X" lists as fact.
- **Quarterly curriculum task:** Compare source coverage with current interview/contest skills; audit sample reference implementations for C++17 correctness using compiler warnings, unit tests, sanitizers and randomized differential testing where practical.

**Codex instruction in one sentence:** Add this DSA course as a fully functional **independent sibling track**, anchored in authentic resources, honest source statuses, C++ first/Java-Python support, 48 × 6 study sessions, and rigorous regression protection for every existing backend feature.

