# Visual — DSA Pattern Practice and Algorithm Lab

**Research and additive website specification**  
**Reviewed:** 11 October 2026  
**Primary references:** [RisingBrain sheet](https://risingbrain.org/sheet), [VisuAlgo](https://visualgo.net/en)  
**Companion files read:** `BACKEND_MASTERY_WEBSITE_BUILD_SPEC.md` and `DSA_MASTERY_RESEARCH_ROADMAP_CODEX.md`.

> IMPLEMENTING CODEX: Add a separate navigation tab labeled exactly **Visual** to the existing academy. Combine pattern-based practice with original interactive algorithm explanations. Preserve all Backend and DSA lessons, URLs, IDs, progress, accounts, notes, bookmarks, historical migrations and design tokens. C++17 remains the primary DSA language; Java and Python are supporting views. Do not introduce blue, purple, indigo or violet. Inspect the real repository before editing. This file is a researched implementation addendum, not evidence that a website has been built.

## Contents and where to find things

| Section | Contains |
|---|---|
| 1 | Research method, evidence status, limits and source directory |
| 2 | RisingBrain feature analysis and data-quality findings |
| 3 | VisuAlgo feature analysis and catalog coverage |
| 4 | What Visual adds; feature parity and original improvements |
| 5 | Navigation, routes and UI design |
| 6 | Animation workbench behavior and controls |
| 7 | Pattern sheet, problem tracking and revision |
| 8 | Module requirements, prerequisites, exercises and DSA week links |
| 9 | Four detailed teaching scenarios with expected results |
| 10 | Languages, documentation, videos and timestamp policy |
| 11 | Data contracts, trace architecture, persistence and API examples |
| 12 | Additive integration and regression protection |
| 13 | Implementation stages and release criteria |
| 14 | Acceptance tests and correctness requirements |
| 15 | Ready-to-use Codex implementation instruction |

## 1. Research method and source directory

### What was verified

Public pages were retrieved through web research, including the sheet pages, VisuAlgo catalog, representative visualization pages and a linked training page. Published text, available controls, topic lists and source terms were inspected. Existing academy specifications were read to ground the week mapping and preservation requirements.

Evidence labels used here:

- **Observed:** present in the retrieved public page text or control labels.
- **Publisher-described:** stated by the site's own public explanatory text; not independently exercised in a signed-in account.
- **Proposed:** an original requirement for your website, not a claim that either reference already implements it.
- **Unverified:** behavior that would require interaction testing, a signed-in session or more source evidence.

No signed-in progress synchronization, server persistence, runtime animation correctness, frame-by-frame lessons, mobile interactions, keyboard behavior or private APIs were tested. This is a detailed public-page feature analysis, not a complete interaction audit. Page retrieval is not proof that every button works. No project repository or hosted academy was identified in the supplied context; this deliverable therefore specifies integration rather than claiming deployed changes.

### Research source directory

| ID | Source | What it establishes | Status |
|---|---|---|---|
| RB-01 | [Sheet](https://risingbrain.org/sheet) | Sheet selections, counts, difficulty filters, topic/pattern hierarchy and recognition guidance | Public page observed |
| RB-02 | [Home](https://risingbrain.org/) | Descriptions of attached notes/bookmarks, hint-aware revision and the intended learning sequence | Publisher-described |
| RB-03 | [Last Minute 100](https://risingbrain.org/sheet/last-minute-100) | Revision collection and count/label mismatch | Public page observed |
| RB-04 | [SBC](https://risingbrain.org/sheet/sbc) | Service-company preparation collection | Public page observed; company frequency claims not independently verified |
| VA-01 | [Catalog and terms](https://visualgo.net/en) | Catalog, general input support, learning modes, comparison advice and reuse restrictions | Public page observed |
| VA-02 | [Sorting](https://visualgo.net/en/sorting) | Playback/code-trace controls, input presets and sorting choices | Public page observed |
| VA-03 | [Linked lists](https://visualgo.net/en/list) | Pointer operations, corner cases, stack and queue instruction | Public page observed |
| VA-04 | [Graph traversal](https://visualgo.net/en/dfsbfs) | Graph editing, BFS/DFS, topology, graph applications and language example links | Public page observed |
| VA-05 | [Shortest paths](https://visualgo.net/en/sssp) | Algorithm choices, graph cases and distance-learning exercises | Public page observed |
| VA-06 | [Recursion and DP](https://visualgo.net/en/recursion) | Recursion tree/DAG and recurrence exploration | Public page observed |
| VA-07 | [Sorting training](https://visualgo.net/training?diff=Medium&module=sorting&n=7&tl=0) | A live module-specific training destination | Retrieved; questions and grading were not exercised |

**Link caveat:** the attempted generic path `https://visualgo.net/en/training` failed retrieval. Use catalog-linked module destinations rather than inventing generic routes. Recheck external links before release; a failure through this research tool does not prove the destination is unavailable to every browser.

### Reuse boundary relevant to an exact-feature request

VisuAlgo's public terms prohibit downloading and hosting its client files and do not permit forks or VisuAlgo variants. [VA-02, Terms of use] Implement the requested educational capabilities with independently written code, original illustrations, original teaching text and original assessments. Link to the source site for comparison. Do not copy its application, brand, lecture slides, quiz bank or visual assets. Its separately linked teaching-code examples have their own explicit reuse statements; check the exact file's license before any reuse. [VA-04]

RisingBrain was inspected as a design/learning reference. No general redistribution permission for its explanations or entire curated sheet was established. Use original descriptions and an independently curated problem catalog with canonical external problem links. Record provenance for any licensed material. Exact educational functions can be specified without duplicating either site's proprietary presentation or content.

## 2. RisingBrain: feature analysis

### Observed sheet features

The sheet page groups practice into three collections, displays progress and difficulty totals, provides search and difficulty filtering, and nests problems under topics and solving patterns. Pattern blocks include recognition cues and approach guidance. [RB-01]

| Public snapshot | Value on 11 October 2026 |
|---|---:|
| Pattern Wise Sheet | 386 entries |
| Last Minute 100 | 106 entries |
| SBC | 129 entries |
| Displayed total across sheets | 621 entries |
| Displayed overall Easy / Medium / Hard | 124 / 425 / 72 |

The homepage describes notes/bookmarks attached to problems and revision informed by flags or hint use. These persistence behaviors remain publisher-described. [RB-02]

### Analytical findings

1. **Collection membership is not unique-problem count.** The displayed totals add up, but repeated problems across collections must be deduplicated in your app's global totals.
2. **Names can drift from data.** The revision collection label says 100 while its public count is 106. Your interface must compute counts and use an original neutral name such as Interview Revision. [RB-03]
3. **Tags need editorial validation.** The revision page places recursion/sorting entries in its Heap grouping. Your taxonomy must support multiple tags while retaining a reviewed primary concept. [RB-03]
4. **Company labels require evidence.** An SBC collection is useful, but its implied frequency/relevance is not proof of current hiring behavior. [RB-04]

### Original product interpretation

Adopt the practice organization and connect it to the algorithm lab. Each pattern should have an original explanation of when it applies, necessary conditions, counterexamples, a small trace, progressively harder exercises and a review queue. Keyword recognition alone is insufficient: a learner must explain why the algorithm's conditions hold.

Avoid unlimited tutorial hopping. Offer a recommended next action based on prerequisites and the existing DSA week. Keep all material browseable and support reassessment without punitive locks.

## 3. VisuAlgo: feature analysis

### Observed capabilities

The publisher reports 24 visualization modules; the visible catalog includes more named entries. Its published guidance describes custom inputs, e-Lecture/exploration modes and online training. Comparison advice uses two juxtaposed windows. [VA-01]

Sorting exposes beginning/end, previous/next, play/pause, speed, status/code-trace panels, algorithm selection and array presets. [VA-02]

Graph traversal exposes graph editing/input/examples and BFS/DFS/topological operations, with further graph-analysis choices. [VA-04]

Shortest paths offers several solvers and weighted, unweighted and negative-weight examples. [VA-05]

Linked-list instruction addresses pointer changes and boundary cases; recursion exploration covers call trees, shared subproblems and recurrences. [VA-03, VA-06]

### Catalog coverage as observed on the homepage

These are source catalog names, not a requirement to copy its organization. [VA-01]

| Group | Catalog areas |
|---|---|
| Foundations | Array; Sorting; Bitmask; Linked List |
| Data structures | Binary Heap; Hash Table; Binary Search Tree; Graph Structures; Union-Find DS; Fenwick Tree; Segment Tree |
| Traversal and analysis | Recursion Tree/DAG; Graph Traversal; Min Spanning Tree; SS Shortest Paths; Cycle Finding |
| Strings and geometry | Suffix Tree; Suffix Array; Geometry (Polygon); Convex Hull |
| Advanced graph theory | Network Flow; Graph Matching; Min Vertex Cover; Steiner Tree; Traveling Salesperson Problem; NP-complete Reductions |

**Counting caveat:** the retrieved page reports 24 modules but displays 26 named catalog entries, including NP-complete Reductions. The public text does not resolve that discrepancy. Do not assume all entries are equivalent interactive modules. Your total must reflect your own published native modules.

### Analysis of learning tradeoffs

- Playback explains intermediate state; it must remain tied to actual algorithm events rather than ornamental motion.
- Lecture and exploration serve different needs. A guided mode should make prerequisites explicit; exploration should allow small experiments.
- Side-by-side comparison inside your application is an original improvement over the published two-window comparison advice.
- A visualizer is not a compiler. Code highlighting should identify a supplied reference implementation, not imply arbitrary C++/Java/Python execution.
- Complex graphs require space. Your mobile design should offer numeric/table editing, panning and a step list, rather than depend on drag-only interactions or mandatory landscape orientation.

## 4. The Visual tab: feature mapping

**Main learning flow:** recognize conditions → inspect a small input → predict → step through → explain the invariant → implement in C++ → solve externally → revisit independently.

All requirements below are proposed for this academy. They do not assert parity has already been implemented.

| Capability | Reference basis | Requirement in your website | Release stage |
|---|---|---|---|
| Topic → pattern → problem grouping | RB-01 | Pattern Sheets inside Visual; reviewed many-to-many taxonomy | A |
| Search and difficulty filters | RB-01 | Combine topic, pattern, difficulty, status, week and query | A |
| Progress summaries | RB-01 | Unique problems and collection counts calculated separately | A |
| Notes, bookmarks and review flags | RB-02, publisher-described | User-scoped notes and explicit revision actions | A |
| Algorithm catalog | VA-01 | Searchable cards with prerequisite/week metadata | A |
| Guided learning vs free exploration | VA-01 | Learn and Explore modes on each native module | A |
| Playback, seeking and code trace | VA-02 | Deterministic state trace and all playback controls | A |
| Custom inputs/presets | VA-01/02 | Validated inputs and reproducible seeded examples | A |
| Graph editing | VA-04/05 | Visual editor plus keyboard-accessible edge table | B |
| Tree/list operations | VA-03 | Original pointer/tree simulations and clear invariants | B |
| Quiz training | VA-01/07 | Original prediction and result questions, explainable grading | A/B |
| Algorithm comparison | VA-01 gives two-window advice | Native side-by-side compare with a shared input | B |
| C++/Java/Python code views | VA-04 includes language links; existing DSA policy | Curated semantic-equivalent reference examples | A, per published module |
| Advanced catalog | VA-01 | Release tested modules incrementally; honest availability | C/D |
| Lesson deep links | Existing academy roadmap | Week/day → exact visual module with return navigation | A |
| Videos and documentation | Existing research file | Reuse verified source IDs; no guessed chapter times | A |
| Predict-next-state challenges | Original addition | Pause at a meaningful event and grade a prediction | A |
| Complexity counters and error cases | Original addition | Count operations and expose conditions/counterexamples | A/B |
| Trace bookmarks/export | Original addition | Save input/algorithm/version/cursor and personal notes | B |

Do not publish unimplemented features as functional tiles. Planned items may appear in a separate labeled roadmap, without Play buttons or false completion percentages. External-reference cards must say Open external reference and never count as native coverage.

## 5. Navigation, page architecture and UI

### Keep Visual separate

- Add one persistent top-level navigation item **Visual**; route `/visual`.
- Backend and DSA track navigation continue to work as before.
- Visual defaults to DSA. Existing backend curriculum is linked only where relevant; optional backend simulations are separate future work.
- A DSA lesson's Open Visual Lab action leads to a module and preserves the originating lesson for Return to lesson.
- Visual sessions do not auto-complete the DSA lesson or mark any practice problem solved.

| Proposed route | Purpose |
|---|---|
| `/visual` | Overview, next relevant lab, catalog, saved sessions |
| `/visual/algorithms` | Published native modules and external references |
| `/visual/algorithms/[slug]` | Algorithm workbench |
| `/visual/patterns` | Pattern-oriented practice sheets |
| `/visual/patterns/[slug]` | Conditions, explanation, lab and practice |
| `/visual/problems/[id]` | Personal attempt context and canonical external problem action |
| `/visual/compare` | Compatible algorithm comparisons |
| `/visual/challenges` | Original trace quizzes and explainable feedback |
| `/visual/revision` | Due problems, weak patterns and retry actions |
| `/visual/saved` | Private saved lab configurations and trace notes |

Adapt file conventions to the actual router. If `/visual` already exists, inspect the collision before selecting a nonbreaking arrangement. No renaming of existing Backend/DSA routes.

### Visual home

1. Editorial title **See the algorithm. Understand every step.**
2. A useful Continue lab card based on an actual saved session or current DSA week.
3. Subnavigation: Algorithms, Pattern Sheets, Compare, Challenges, Revision.
4. Filters and compact cards: title, short purpose, difficulty/prerequisites, linked week, availability and Open lab.
5. Saved sessions and related resources below the catalog.

Do not show decorative user counts, invented mastery scores, fake streaks or dummy continuing sessions.

### Algorithm workbench desktop composition

| Area | Contents |
|---|---|
| Header | Module title, breadcrumb, week link, Learn/Explore/Challenge mode |
| Left inspector | Algorithm choice, input editor, presets, validation, parameters |
| Center stage | Original SVG visualization with text labels and legend |
| Right inspector | Pseudocode/C++/Java/Python, active lines, variables and invariant |
| Playback bar | First, Previous, Play/Pause, Next, Last, scrubber, speed, Reset |
| Below stage | Event explanation, trace table, complexity, practice and sources |

At smaller widths put inspectors in accessible panels and retain the stage plus playback controls. Mobile uses stacked stage → controls → explanation → code/variables. The page itself must not overflow horizontally; bounded code/trace regions may scroll.

### Design tokens: reuse existing values

| Token | Existing value | Visual role |
|---|---|---|
| Canvas | `#F8F5EE` | Page background |
| Paper | `#FCFAF5` | Stage and cards |
| Ink | `#263329` | Labels and primary text |
| Forest | `#2E6748` | Actions, settled nodes, correct state |
| Terracotta | `#B35435` | Active comparison, pointer, edge |
| Amber | `#C9952B` | Frontier, pivot, prediction prompt |
| Border | `#DDD5C6` | Grid and dividers |
| Charcoal | `#202A23` | Code panel |

No blue/purple/indigo/violet in authored controls, SVGs, charts, syntax highlighting, focus rings or dark mode. External destinations have their own independent appearance; this app cannot restyle them. Use existing font families and spacing. Never convey a state only by color: add labels, arrows, shapes, outlines or patterns. Check contrast on actual foreground/background combinations, including thin graph edges and disabled controls.

## 6. Workbench behavioral contract

### Playback

- **First/Last:** jump to initialized/final trace state.
- **Previous/Next:** move exactly one semantic event; no hidden state changes.
- **Play/Pause:** advance through the same recorded events as manual stepping.
- **Scrubber:** seek by event index; show `Step x of y` and a meaningful description.
- **Speed:** 0.25×, 0.5×, 1×, 2× and 4×; changes playback timing only.
- **Reset:** restores the run's original input and initialized state.
- **New input:** creates a new run; pause current playback and validate first.
- **Algorithm/language changes:** algorithm change regenerates trace; code-language change preserves semantic state and uses its own line map.
- **Reduced motion:** instant transitions with the same state and explanations.
- **Keyboard:** contextual Space for Play/Pause and arrow stepping when playback controls have focus. Never hijack arrows or Space inside inputs/editors; expose button labels and shortcut help.

Changing graph layout must not change graph connectivity or algorithm results. Changing graph edges/weights/source must create a new trace. Disable mutation during playback or explicitly pause/regenerate; never mix old and new events.

### Input requirements

- Parse arrays from comma/space-separated integers without executing text.
- Parameters have module-specific rules: positive window sizes, valid vertices, bounded capacities, sorted-input requirements and allowed weight domains.
- Offer empty/singleton/duplicates/sorted/reversed/negative presets only where the algorithm supports them.
- Random examples use a recorded seed; a saved run reproduces them exactly.
- Report useful validation errors while retaining the previous valid run.
- Explicitly bound array size, graph size, DP dimensions, recursion depth and event count. Initial suggested visualization limits: 64 array values, 40 nodes/100 edges, 40×40 DP cells and 20,000 events. These are engineering proposals to be profiled, not educational constraints or benchmarked facts.
- A capped trace ends with `Trace limit reached`; never display a partial result as a completed algorithm.

### State and reasoning

Every visible step includes a state snapshot, active line IDs, changed elements, variables, an original explanation and relevant counters. Show an invariant at meaningful checkpoints, explain termination and expose applicable restrictions.

Complexity panels distinguish theoretical analysis from counts for this particular run. Frame duration and browser animation speed are not algorithm runtime benchmarks. Auxiliary space excludes the visualization's rendering buffers unless explicitly discussing implementation overhead.

### Questions and grading

Use original questions with reproducible seeds: next queue contents, next pointer position, next distance update, legal range, resulting DP cell, invariant true/false or final result. Give feedback explaining why the answer follows from the current state.

For graph traversals accept every correct order allowed by the stated tie policy, or visibly state an exact deterministic neighbor order. Do not mark alternative valid topological orders incorrect. Track assisted vs independent attempts. A correct trace quiz does not prove coding mastery.

## 7. Pattern Sheets and personal practice

### Independently curated collections

| Collection | Purpose | Guardrail |
|---|---|---|
| Pattern Path | Full concept → problem progression | Original selection and sequence aligned to DSA weeks |
| Interview Revision | Smaller learner-specific revisit queue | Real count; no implied exact 100 unless there are 100 |
| Placement Foundations | Fundamentals, easier timed drills and role-selected companions | No unsupported company question-frequency claims |
| My Practice | User bookmarks and attempts | Private per user |

### Topic and pattern card

Each card includes: concept, applicability conditions, original recognition cues, counterexample, invariant, baseline approach, improved approach, time/space assumptions, native lab, relevant week, source links and practice actions.

For example, a window technique requires a property that makes pointer movement safe. Show why a simple shrink-on-sum strategy can fail when negative values invalidate monotonic behavior. Do not teach that words such as longest or substring alone prove sliding window is appropriate.

### Problem row

Display canonical title/link/platform; source-reviewed difficulty or Unknown; relevant patterns; Not started/Attempted/Solved self-reported/Solved verified if backed by trusted evidence; bookmark; review flag; language; last attempt; Open Visual where a relevant lab exists.

Difficulty snapshots must record source and review date. Do not invent platform IDs, paid/free status or employer tags. Link to original problem statements rather than copying them wholesale.

### Search, counts and progress

- Search title, tags, platform and canonical ID. Reflect query and filters in the URL.
- Combine sheet/topic/pattern/week/difficulty/status/bookmark filters.
- Deduplicate canonical problem IDs across sheets for global totals.
- A collection shows solved memberships divided by eligible collection memberships; global totals show distinct published canonical problems.
- After filtering, label result counts as matching problems, not total curriculum size.
- Keep Visual explored, quiz passed, problem solved and DSA mastered as separate metrics.

### Attempt and revision records

Record language, attempted time, test evidence, hint/editorial use, self-report vs trusted evaluation, complexity explanation and personal mistake notes. Store repeated attempts rather than replacing history.

Reuse the DSA roadmap's **1, 7, 21 and 45 day** review suggestions; treat these as curriculum policy, not a guaranteed learning result. Due dates use the user's configured timezone. Manual flags and assisted solutions can enter review; successful independent recall updates the schedule. Notes alone need not automatically make a problem weak.

## 8. Proposed native module plan and DSA mapping

The weeks below match the existing 48-week DSA file. Modules supplement existing sessions; they must not silently increase the 15-hour weekly budget. Usually substitute 10–20 minutes of the existing Watch/visualize block, leaving the coding exercise intact. No backend week mappings are invented here.

### A: foundations and first usable release

| Lab | DSA week(s) | Prerequisite and visual state | Hands-on checkpoint |
|---|---|---|---|
| Array operations | 2, 8 | Index/value cells, insertion shifts, logical size vs capacity | Explain index access vs insertion cost |
| Binary search and bounds | 10 | Sorted array, half-open interval, lo/mid/hi, excluded region | Find first occurrence and show interval shrink |
| Sorting | 9 | Bubble/insertion/merge/quick, compared values, swaps, merge buffer, partition boundaries | Explain stability using equal keys with original IDs |
| Two pointers | 13 | Pointer locations, pair sums, moved pointer and invariant | Solve a sorted pair-sum drill independently |
| Sliding window | 14 | Active range, running sum/count map, expand/shrink reasons | Distinguish fixed and variable windows |
| Prefix sums | 15 | Prefix cells, queried range, prefix map for sum counting | Explain `prefix[r+1]-prefix[l]` |
| Stack and queue | 18 | Push/pop/enqueue/dequeue, top/front/rear and logical contents | Trace underflow and a singleton transition |

A must include a small functional Pattern Path, persistence and prediction challenges; it is not merely a catalog page.

### B: core structures and graphs

| Lab | DSA week(s) | Prerequisite and visual state | Hands-on checkpoint |
|---|---|---|---|
| Recursion/backtracking | 4, 16 | Frames, choice stack, base cases, backtrack/undo | Trace subsets and distinguish call stack from output |
| Linked lists | 17 | Stable node IDs, head/tail, next/prev rewiring | Reverse list and preserve reachability |
| Monotonic stack/deque | 18 | Stack/deque entries and each removal's reason | Explain amortized linear cost |
| Binary trees | 19–20 | Traversal output, call stack/queue, height/path state | Reproduce preorder/inorder/postorder |
| BST and AVL | 21 | Search path, rotations, height/balance factors | Preserve BST order after a rotation |
| Heap and priority queue | 22 | Synchronized array/tree views, sift path | Show heap property after insert/extract |
| Hash tables and LRU | 23 | Chosen hash strategy, collisions; map/list relationship for LRU | Explain collision assumptions and eviction |
| Trie | 24 | Character edges, terminal counts, prefix path | Distinguish prefix from complete word |
| Graph representation | 25 | Node/edge IDs, adjacency list/matrix, directed/weighted flags | Build a disconnected graph |
| BFS/DFS | 25 | Visited/frontier, queue/stack, parent, distance or timestamps | Explain shortest edge-count path for BFS |
| Topological sort | 26 | Indegree or DFS color/order state | Return valid order or an explicit cycle finding |
| Shortest paths | 27 | Distances, parents, frontier and relaxations | Choose BFS/Dijkstra/Bellman-Ford for input conditions |
| DSU and MST | 28 | Parents, sizes/ranks, compression, candidate/accepted edges | Explain connectivity and a minimum spanning forest |
| SCC/bridges | 29, 40 | Discovery/low-link values, recursion stack/components | Explain why removing a bridge disconnects a component |

### C: DP, ranges and strings

| Lab | DSA week(s) | Prerequisite and visual state | Hands-on checkpoint |
|---|---|---|---|
| Greedy and intervals | 31 | Selected/rejected intervals and counterexample mode | Explain an exchange argument |
| DP foundations | 32 | Recursion tree vs memo DAG, 1D/2D cells and dependencies | Define state/transition/base/order |
| Knapsack/coin change/LIS | 33 | Capacity/item state, update direction, decisions | Explain 0/1 vs unbounded loop direction |
| LCS/edit distance | 34 | Table, dependencies, reconstructed path | Recover a valid optimal answer |
| Interval/tree/bitmask DP | 34–35 | Split candidates, subtree states, subset bits | Derive transition and feasible bounds |
| Fenwick/segment tree | 37 | Range coverage, query/update path, aggregation | Compare results against a plain-array oracle |
| KMP/Z/rolling hash | 11, 38 | Prefix matches/fallbacks, window hashes, comparison state | Explain overlapping matches and hash collisions |
| Suffix array/LCP | 38 | Ordered suffixes, ranks and shared prefixes | Connect sorted suffixes to substring lookup |
| Sieve/modular power | 12, 39 | Composite marks or exponent bits and accumulator | Explain overflow/domain restrictions |
| LCA/binary lifting | 40 | Ancestor table and depth equalization | Compare with naive ancestor walking |

### D: optional advanced enrichment

These do not add mandatory weeks to the existing curriculum. Place under Advanced enrichment with explicit prerequisites and estimated study time.

| Proposed lab | Scope and limitation |
|---|---|
| Floyd cycle detection | Slow/fast state in a functional graph or linked list; distinguish from graph cycle DFS |
| Network flow and matching | Residual edges, augmenting paths; optional weeks 29/40 extension |
| Convex hull/polygon geometry | Point orientation, edge choices, degeneracy handling; supplementary course |
| Suffix tree | Advanced string indexing; supplementary after suffix arrays |
| Vertex cover | Exact tree/bipartite cases; clearly distinguish general hard cases |
| TSP | Small-instance exact subset DP vs heuristics; optional week 35 connection |
| Steiner tree | Carefully bounded toy instances or explicitly labeled approximation/heuristic |
| Complexity/reductions | Original explanatory lessons; not a solver promising efficient solutions to every NP-hard problem |

Do not equate all advanced visualizations with placement essentials. Prioritize independent reasoning and coding in the existing roadmap.

## 9. Detailed original teaching scenarios

### Scenario 1 — Binary search first occurrence

**Week:** 10. **Input:** `[1,2,2,2,5]`, target `2`. **Convention:** half-open `[lo,hi)`.

| State before update | Decision | State after update |
|---|---|---|
| lo=0, hi=5, mid=2 | A[mid] >= target | hi=2 |
| lo=0, hi=2, mid=1 | A[mid] >= target | hi=1 |
| lo=0, hi=1, mid=0 | A[mid] < target | lo=1 |
| lo=1, hi=1 | Stop and check equality | First match at index 1 |

Prediction: after examining index 2, which boundary changes and why? Explain the excluded region. Practice variations: absent target, empty input, all duplicates, target at an endpoint. Never silently sort a custom array; reject unsorted input or offer an explicit Sort first action with changed input shown.

### Scenario 2 — Sliding-window restriction

**Week:** 14. Start with fixed-size maximum sum on `[2,1,5,1,3,2]`, k=3. Show windows, outgoing/incoming values and sums `8,7,9,6`; maximum is 9.

Then teach variable windows for minimum length with a positive sum threshold. Include `[1,-1,5]`, target=5 as a counterexample to a simplistic positive-input strategy: stopping the shrink loop at `[−1,5]` can miss the optimal `[5]`. Explain why negative numbers invalidate the monotonic condition and link to an appropriate alternate method in later study.

Checkpoint: learner states the input restrictions before choosing the algorithm. Do not show a heuristic as a generally correct solution.

### Scenario 3 — BFS vs weighted shortest path

**Week:** 25, revisited 27. Use directed edges `A→B (1)`, `A→C (10)`, `B→C (1)`.

For unweighted edge count, BFS reaches C in one edge. For total weight, Dijkstra obtains cost 2 via B. Show queue vs priority frontier and distinguish edge-count distance from cost. With neighbor order B then C, explain visited-on-enqueue and why a BFS discovery is not a weighted optimality proof.

Reject negative weights for the standard Dijkstra lab, offer Bellman-Ford, and test unreachable vertices. A Bellman-Ford negative-cycle warning must distinguish reachable cycles from unrelated disconnected cycles when answering single-source questions.

### Scenario 4 — 0/1 knapsack and update direction

**Week:** 33. One item: weight=2, value=3, capacity=4.

- Correct 0/1 result is 3 because the item is available once.
- Descending capacity iteration uses the previous item's state.
- Ascending iteration can produce 6 by using this one item twice: this corresponds to unbounded reuse, not the intended problem.

Show read-cell and write-cell labels, explain dependency order, and challenge the learner to choose a legal update direction. Include zero capacity and too-heavy items. Initial lab can require strictly positive integer weights, declaring that restriction rather than silently mishandling weight zero.

### Common session guidance

Use 2 minutes of recall, 5 minutes of guided trace, 3 minutes of prediction, 5 minutes of exploration and 5 minutes of explanation within the existing visual/video time block. Then return to the assigned independent C++ implementation. The 20-minute breakdown is a proposed instructional allocation, not a source claim.

## 10. Languages, documentation, videos and timestamps

### Language policy

- Default C++17, matching the DSA file.
- Java and Python examples must implement the same semantics and documented tie-breaking.
- Distinguish pseudocode from compilable examples. Code panels are reference listings unless a real runner is implemented.
- Every semantic event maps to stable logical line IDs; each language listing maps those IDs to its own lines.
- Preserve original element IDs where stability matters; display zero-based indices consistently.
- Explain value/reference differences, integer overflow, stack depth and container operations where relevant.
- Do not label a display-only listing as Run C++. Animation executes the native trace engine, not the listing.

### Existing resource IDs to reuse

| Need | Existing DSA source IDs |
|---|---|
| C++ language and containers | `L-CPP-01`, `L-CPP-02`, `L-CPP-03` |
| Theory and proofs | `D-MIT`, `D-MIT-NOTES`, `D-CPALG` |
| Guided pattern practice | `D-STRIVER`, `D-NEET150` |
| Additional practice | `D-CSES`, `D-USACO`, `D-ATCODER-DP` |
| External animation reference | `D-VIS` |
| Existing data-structure video | `V-FISET` |

These identifiers were read in the existing file; reuse their canonical records rather than creating duplicates or claiming a fresh full-course audit. The earlier video's age/compatibility labels still apply.

### Timestamp integrity

This research did not audit new video chapters. Import the existing resource file's chapter metadata and verification status. Do not invent new timestamps for RisingBrain videos, VisuAlgo, or arbitrary search results.

A video card stores creator, canonical URL, mapped concept/week, language, source of chapter time, last review and verification status. A timestamp is optional; omit it when unsupported. A known start does not imply a known end/duration. VisuAlgo module links are interactive references, not timestamped videos.

For additional videos use an editorial workflow: identify a specific lesson → inspect published chapters → verify coverage/version → record exact start seconds → optionally spot-check playback → label the achieved verification level. Do not mark publisher-listed chapters frame-verified.

## 11. Data contracts and engineering

### Keep the deployed stack

The backend website spec recommends Next.js/TypeScript/React with PostgreSQL and Prisma or Drizzle for website records. The course itself teaches FastAPI. Inspect the actual project and retain its working stack; do not replace its application backend just because a lesson teaches a different framework. The contracts below can be implemented in its existing server framework.

### Trace engine, independent of rendering

1. Validate typed input.
2. Run an independently implemented bounded algorithm generator, preferably in a worker for large traces.
3. Emit deterministic semantic events and replayable state.
4. Render SVG from the selected state; animation interpolates visual positions only.
5. Map event line IDs to the selected language.
6. Apply quizzes and counters to the same state sequence.

Use full snapshots for small traces or periodic snapshots plus deltas for larger traces. Previous/seek reconstructs state from the event log; do not try to reverse arbitrary mutating algorithms using animation callbacks.

```ts
type VisualRun = {
  schemaVersion: number;
  algorithmId: string;
  algorithmVersion: string;
  input: unknown; // validate with the module's typed schema
  seed?: number;
  cursor: number;
  events: VisualEvent[];
  status: 'complete' | 'capped' | 'invalid';
};

type VisualEvent = {
  index: number;
  kind: string; // module-specific discriminated union in implementation
  logicalLineIds: string[];
  explanationKey: string;
  explanationArgs: Record<string, string | number>;
  snapshotOrDelta: unknown;
  counters: Record<string, number>;
};
```

This is a conceptual contract, not production TypeScript ready to paste without module types. Algorithm version, input, seed and neighbor/tie order must reproduce a saved run. If a later version cannot replay an old run, retain its summary and offer explicit regeneration; never silently replace the user's saved evidence.

### Proposed additive records

| Record | Important fields |
|---|---|
| VisualModule | Stable ID, slug, status, prerequisites, week/day links, implementation version, input schema, source IDs |
| VisualPattern | Stable ID, original explanation, applicability, counterexample, invariant, module IDs |
| ProblemPattern / SheetMembership | Canonical existing problem ID, pattern/sheet ID, ordering; reviewed attribution |
| VisualSession | User or guest identity, module/version, validated input/seed, cursor, mode, language, timestamps |
| VisualTraceNote | User ID, session ID, event index, body, revision |
| VisualChallengeAttempt | User, question version/seed, response, result, assistance flag, evaluator |
| VisualPreference | User, speed, motion, language and layout preferences |

Prefer the existing DSA Problem, Attempt, Note, Bookmark and Review records when present. Add adapters or linking tables rather than a second disconnected practice history. If absent, use a namespaced model and migration with stable IDs.

Enforce ownership server-side. Never trust client-supplied user IDs for authorization. Challenge attempts are append-only history; reference answers should not be trusted from the client as evidence of an independent assessment.

### Illustrative endpoints — adapt to the real app

| Endpoint | Behavior |
|---|---|
| `GET /api/visual/modules` | Public published catalog with provenance |
| `GET /api/visual/modules/{id}` | Metadata/reference content, not copied external assets |
| `GET /api/visual/patterns` | Search/filter pattern catalog |
| `POST /api/visual/sessions` | Authenticated bounded validated save |
| `PATCH /api/visual/sessions/{id}` | Owner-only cursor/config save with revision check |
| `GET /api/visual/sessions/{id}` | Owner-only restore |
| `POST /api/visual/challenges/{id}/attempts` | Validated attempt, honest evaluator status |

Reuse existing DSA APIs for attempts/notes/bookmarks/reviews. Do not invent external-site integrations or access their private APIs. Compute traces locally; server persistence should normally save compact configurations and evidence, not enormous event arrays.

### Guest/account persistence

Guest state uses a namespaced key such as `academy.visual.v1`; preserve existing Backend/DSA keys. On sign-in, offer an explicit guest-to-account merge with canonical IDs and conflict handling. Account state uses the existing authenticated store.

Save confirmed configuration/cursor changes with debounce; surface save errors, support retry and prevent stale updates overwriting newer notes. A refreshed page resumes the saved input/version/cursor. Personal shared-session URLs are off by default; never place notes or private attempt data into query strings. Public examples may encode bounded non-sensitive input.

### Comparisons

Comparison pairs must share compatible input and declared constraints: sorting vs sorting, BFS vs DFS exploration, Prim vs Kruskal, recursion vs memoization, or range-query structures under the same operation sequence.

Support independent playback first. Optional synchronized stepping uses labeled semantic checkpoints; two algorithms do not necessarily have matching event counts. Never pretend that step 10 of two different traces represents equal computational effort. Counters must define what is counted and avoid presenting browser time as proof of asymptotic speed.

## 12. Additive integration and protection

1. Inspect Git status, application structure, routes, DB schema, persistence keys, content loaders, components, design tokens and tests.
2. Record baseline test/typecheck/build results. Preserve uncommitted work and report unrelated pre-existing failures separately.
3. Resolve route/slug/entity collisions before changes. Add `/visual` and minimal navigation integration.
4. Prefer `features/visual/` and `content/visual/` or equivalent existing conventions. Do not restructure the entire app.
5. Link stable DSA lesson/resource/problem IDs. Preserve original Backend and DSA content byte-for-byte unless a small authorized navigation/link patch is needed.
6. Use new reversible migrations; never edit historical migration files, truncate tables, reset databases or regenerate existing IDs.
7. Introduce Visual independently, preferably behind an existing feature-flag mechanism if available. Feature-off must preserve original academy operation.
8. Seed only new data with idempotent upserts; a repeated seed must not overwrite user progress or notes.
9. Exercise guest and authenticated flows; verify original week deep links, resume logic and saved content after integration.
10. Document implemented modules, stage coverage, deferred features, provenance and known limitations. Publish only through the project's existing authorized deployment flow.

**Rollback:** disable Visual navigation/routes without deleting existing learner data. Do not roll back by dropping shared DSA records or user tables. Keep saved Visual data available for a later compatible release.

**Authoritative existing curriculum:** Backend = 36 weeks / 24 modules; DSA = 48 weeks / 8 phases / 288 sessions. Visual supplements these totals. It does not silently create a third compulsory full-length learning track.

## 13. Delivery stages

| Stage | Deliverable | Exit condition |
|---|---|---|
| 0 — inspection | Baseline, route/data mapping, original content policy and module registry | Existing app identified; no destructive changes |
| A — usable foundation | Visual tab; seven foundational lab groups; Pattern Path; original predictions; persistence | Full learn → trace → practice → save → resume journey passes |
| B — core DSA | Structures, editable graphs, traversal/paths/DSU, comparisons, trace bookmarks | Algorithm oracles and integration regressions pass |
| C — advanced DSA | DP, ranges, string modules and week/resource links | Correct recurrences/query outputs, independent challenge feedback |
| D — enrichment | Optional advanced visual lessons and solvers | Explicit assumptions, bounded instances, honest native coverage |

Stage A is the first useful release, not a claim of complete parity. Full requested breadth requires later stages. No calendar or implementation time estimate is guaranteed without inspecting the real codebase and running profiles.

Each published module requires original explanation, prerequisites, input presets, trace, language listings, counters, at least one prediction challenge, practice/week links, saved-session behavior, error states and correctness evidence. A half-built module remains unpublished or explicitly marked Preview outside the primary learning path.

## 14. Acceptance tests and correctness gates

### Core learner journey

- [ ] Visual appears as a separate tab without changing Backend/DSA navigation defaults.
- [ ] Week 10 opens the correct binary-search lab and returns to the exact originating lesson.
- [ ] Custom input validates; Play, Pause, Previous, Next, First, Last, speed and scrubber work.
- [ ] Seeking backward restores variables/counters/highlights exactly; replay is deterministic.
- [ ] Switching code language preserves state and highlights equivalent logical operations.
- [ ] Refresh restores the input/version/cursor/preferences; failed saves are visible.
- [ ] Prediction feedback explains the selected state's answer and tracks assistance.
- [ ] Practice opens the original platform and records honest self-reported/trusted evidence separately.
- [ ] Search/filter/back-forward navigation works; no-match and no-progress states are useful.
- [ ] The same canonical problem in two collections counts once globally.
- [ ] A video/animation visit does not falsely mark a problem solved or a lesson mastered.

### Algorithm correctness

| Module family | Required meaningful verification |
|---|---|
| Sorting | Compare results to a trusted sort; check permutation preservation and claimed stability |
| Binary search | Compare first/last bounds to linear oracle over empty, duplicates and absent targets |
| Windows/prefix | Compare small cases to brute force; reject or teach unsupported inputs |
| Lists/queues/stacks | Invariants, boundary operations, no lost nodes; underflow/overflow where applicable |
| BST/AVL/heap/trie | Ordering/height/heap/terminal invariants after every operation |
| BFS/DFS/topology | Reachability, parent consistency, queue policy; validate any accepted topological order |
| Shortest paths | Compare tiny valid cases to an independent oracle; unreachable/negative-cycle behavior |
| DSU/MST | Connectivity oracle; small-instance minimum-weight checks; disconnected forest semantics |
| DP | Exhaustive small instances, base cases, update order and reconstruction validity |
| Fenwick/segment | Random operation sequences compared with a plain-array oracle |
| KMP/strings | Compare matches to naive search; empty pattern policy and overlapping matches |

Test algorithm outputs and key invariants, not just snapshots of rendered SVG positions. Event traces may differ across valid implementations; the educational claims must remain correct.

### Regression and isolation

- [ ] All original Backend routes and 36 weeks remain browseable.
- [ ] Original DSA 48 weeks, 8 phases, 288 sessions and source IDs remain intact.
- [ ] Backend/DSA progress, notes, bookmarks and review history persist after migration.
- [ ] Existing continue-learning behavior remains correct for Backend-only learners.
- [ ] Existing auth/roles hold; user A cannot access user B's Visual sessions/notes/attempts.
- [ ] Seeds run twice without duplication or user-data changes.
- [ ] Feature-off returns the original navigation/workflow.
- [ ] Build, typecheck and appropriate original/new integration checks pass.

### Accessibility, presentation and operational checks

- [ ] Keyboard-operable stage alternatives, visible focus and 44px recommended touch controls.
- [ ] Text trace/table provides an equivalent way to understand visual state.
- [ ] Screen-reader announcements summarize meaningful user-requested changes; autoplay does not flood live regions.
- [ ] Reduced motion preserves learning content without animated transitions.
- [ ] No blue/purple/indigo/violet in authored UI, code highlighting or SVG defaults.
- [ ] Contrast checked for every actual interactive state and visual label.
- [ ] Works at 360px, tablet and desktop widths without page overflow.
- [ ] Bounded traces stay responsive; cancellation and cap warnings work.
- [ ] External links attributed; unavailable references visibly flagged; no copied applications or quiz banks.
- [ ] No invented counts, employer frequencies, timestamps, benchmark results or verification labels.

## 15. Ready-to-use Codex instruction

```text
Read VISUAL_TAB_RESEARCH_AND_CODEX_SPEC.md and the existing Backend and DSA
specifications. Inspect my current repository before editing.

Add a separate navigation tab named exactly Visual, with original algorithm
visualizers and pattern-based practice inspired by the educational capabilities
of RisingBrain and VisuAlgo. Follow the feature mapping and stage plan in the
addendum; report which stages are fully implemented.

Use C++17 as the primary reference language and provide reviewed Java/Python
views. Include deterministic step-by-step playback, custom inputs, code tracing,
variable inspection, explanations/invariants, honest complexity counters,
prediction challenges, pattern sheets, canonical external practice links,
notes/bookmarks/revision and real save/resume behavior.

Connect modules to the existing 48-week DSA plan and reuse existing reviewed
resource/video records. Never invent chapter timestamps or claim display-only
code is executable. Independently implement the native labs; do not download,
fork or rehost either reference application or copy protected teaching content.

Preserve existing Backend/DSA content, routes, identifiers, account data,
progress, notes, bookmarks, review history, authentication, tests and migrations.
Add namespaced files/models and minimal navigation hooks. Reuse the existing
ivory/forest/terracotta/amber palette; no blue, purple, indigo or violet.

Run the baseline checks, module correctness tests and full learner/regression
journeys described in the addendum. Do not claim complete feature parity while
modules are placeholders. Report actual implemented coverage and limitations.
```

**Deliverable boundary:** This document completes the research and implementation brief. Applying it requires the existing academy repository or identified hosted project; it does not claim that the Visual tab has already been added.
