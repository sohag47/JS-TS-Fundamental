# 6-Month DSA Interview Roadmap (TypeScript)

**Goal:** Job-ready for DSA/coding interviews (FAANG-style + mid-size companies)
**Time commitment assumed:** ~1.5–2.5 hrs/day, 6 days/week
**Total problems target:** ~350–450 (quality > quantity, but reps matter)
**Platform:** LeetCode (primary), with TypeScript as your solution language throughout

---

## How this roadmap is structured
Each month = 4 weeks. Each topic has:
- **Concept** you must understand deeply (not memorize)
- **Data structure/algorithm to implement from scratch in TS** (this is what separates strong candidates)
- **Problem count** to solve on that topic before moving on

Rule of thumb: **implement every core data structure yourself in TypeScript at least once** — Array-based list, Linked List, Stack, Queue, BST, Heap, Trie, Graph (adjacency list). This is the single highest-leverage thing for interview confidence.

---

## MONTH 1 — Foundations + Linear Structures

### Week 1: Complexity & Arrays/Strings
- Big-O, Big-Ω, Big-Θ, time vs space tradeoffs, amortized analysis
- TS specifics: `Array<T>` methods complexity (push/pop O(1), shift/unshift O(n), splice O(n))
- Two pointers, sliding window, prefix sums
- **Problems:** 20 (arrays + strings, easy→medium)

### Week 2: Hashing
- Hash Map / Hash Set — collision handling (chaining vs open addressing) conceptually
- Implement a simple HashMap class in TS (with generics `class MyMap<K,V>`)
- Frequency counting, anagram problems, subarray-sum patterns
- **Problems:** 20

### Week 3: Linked Lists
- Singly, Doubly, Circular linked lists — implement all 3 in TS with generics
- Fast/slow pointers (cycle detection), reversal, merge, dedup
- **Problems:** 20

### Week 4: Stacks & Queues
- Implement Stack and Queue (array-based + linked-list-based) in TS
- Monotonic stack/queue pattern
- Min-stack, valid parentheses, next greater element
- **Problems:** 15
- **Milestone review:** timed mixed quiz of Month 1 topics (10 problems, 90 min)

**Month 1 total:** ~75 problems, 4 custom data structure implementations

---

## MONTH 2 — Recursion, Sorting, Trees

### Week 1: Recursion & Backtracking basics
- Recursion tree, base cases, tail vs non-tail recursion
- Subsets, permutations, combinations
- **Problems:** 15

### Week 2: Sorting & Searching
- Implement from scratch: Merge Sort, Quick Sort, Heap Sort (know time/space + stability of each)
- Binary search + all its variants (search in rotated array, find boundary, etc.)
- **Problems:** 20

### Week 3: Trees I — Binary Trees & BST
- Traversals: inorder/preorder/postorder (recursive + iterative), level-order (BFS)
- Implement BST class in TS: insert, delete, search, height, balance check
- **Problems:** 20

### Week 4: Trees II — Balanced Trees & Heaps
- AVL/Red-Black concept only (know rotations conceptually, rarely coded live)
- Implement Min-Heap and Max-Heap in TS from scratch (array-based)
- Priority queue problems, k-largest/k-smallest patterns
- **Problems:** 15
- **Milestone:** mock interview #1 (45 min, 2 problems)

**Month 2 total:** ~70 problems, 3 more custom structures (BST, Min-Heap, Max-Heap)

---

## MONTH 3 — Tries, Graphs I

### Week 1: Tries
- Implement Trie class in TS (insert, search, startsWith)
- Word search, autocomplete-style problems
- **Problems:** 10

### Week 2: Graph Representation & Traversal
- Adjacency list vs matrix — implement Graph class in TS
- BFS, DFS (recursive + iterative), connected components
- **Problems:** 15

### Week 3: Graph Algorithms I
- Topological sort (Kahn's + DFS-based)
- Union-Find / Disjoint Set (implement with path compression + union by rank in TS)
- Cycle detection (directed & undirected)
- **Problems:** 15

### Week 4: Graph Algorithms II
- Shortest path: Dijkstra, Bellman-Ford (conceptual + coded)
- Minimum Spanning Tree: Prim's, Kruskal's (conceptual)
- **Problems:** 15
- **Milestone:** mock interview #2

**Month 3 total:** ~55 problems, 2 more custom structures (Trie, Graph + Union-Find)

---

## MONTH 4 — Dynamic Programming (the big one)

### Week 1: DP Foundations
- Memoization vs tabulation, state definition, transition
- 1D DP: climbing stairs, house robber, fibonacci-style
- **Problems:** 15

### Week 2: 2D DP
- Grid DP (unique paths, min path sum)
- Knapsack (0/1 and unbounded) — this pattern alone covers ~15% of DP interview questions
- **Problems:** 20

### Week 3: String DP
- Longest Common Subsequence, Edit Distance, Palindrome DP
- **Problems:** 20

### Week 4: DP on Trees/Graphs + Interval DP
- Interval DP (matrix chain, burst balloons style)
- Tree DP basics
- **Problems:** 15
- **Milestone:** mock interview #3

**Month 4 total:** ~70 problems — DP is the highest ROI month, don't rush it

---

## MONTH 5 — Greedy, Advanced Patterns, Bit Manipulation

### Week 1: Greedy Algorithms
- Interval scheduling, activity selection, Huffman-style problems
- Proving greedy correctness (helps you justify approach in interviews)
- **Problems:** 15

### Week 2: Bit Manipulation
- AND/OR/XOR tricks, bit masking for subsets, count set bits
- **Problems:** 10

### Week 3: Advanced patterns sweep
- Sliding window (advanced), two-heaps pattern, prefix-sum + hashmap combos
- Segment Trees / Fenwick Trees (BIT) — implement basic version in TS
- **Problems:** 15

### Week 4: Mixed hard problems + weak-area repair
- Re-solve your flagged/failed problems from Months 1–4
- **Problems:** 15
- **Milestone:** mock interview #4

**Month 5 total:** ~55 problems + 1 more structure (Segment Tree/BIT — optional but strong signal)

---

## MONTH 6 — Interview Simulation & Polish

### Week 1: Company-pattern review
- Pick target companies, review their commonly-asked question lists
- Re-attempt medium/hard problems under strict 25–35 min timer
- **Problems:** 20

### Week 2: System design light (for SDE roles, not pure DS/A but often paired)
- Basics: scalability, caching, load balancing — 1 mock system design if role requires it
- Continue DSA drilling: 15 problems

### Week 3: Full mock interview loop
- 3–4 mock interviews (Pramp, peers, or self-timed) covering random topics
- Focus on communication: think-aloud, clarifying questions, complexity stated upfront

### Week 4: Final polish
- Redo your personal "hardest 30" problem list cold, no hints
- Resume/behavioral prep in parallel
- Rest 1–2 days before real interviews begin

**Month 6 total:** ~50-60 problems, 4+ full mock interviews

---

## Running totals
| Category | Count |
|---|---|
| Core data structures implemented from scratch | ~10 (Array list, Linked List x3 variants, Stack, Queue, BST, Min/Max Heap, Trie, Graph+Union-Find, optional Segment Tree) |
| Core algorithm families | ~15 (sorting x3, BFS/DFS, backtracking, binary search, topological sort, Dijkstra, Bellman-Ford, MST, DP, greedy, bit manipulation, two pointers, sliding window) |
| Total problems solved | ~375+ |
| Mock interviews | 4–6 |

## TypeScript-specific tips throughout
- Use `interface`/`type` to define node shapes (`interface ListNode<T> { val: T; next: ListNode<T> | null }`)
- Use generics (`<T>`) when implementing structures — interviewers notice this and it mirrors real engineering
- Know `Map`/`Set` built-ins cold (O(1) average ops) so you don't reinvent them mid-interview unless asked
- Watch out for `==` vs `===`, array reference vs value semantics, and `undefined` vs `null` — small TS/JS gotchas that cost interview points

## Suggested weekly rhythm
- 5 days: new topic + problems
- 1 day: review/re-solve missed problems from that week
- 1 day: rest or light reading (articles/YouTube on the week's topic)

## Tracking
Keep a spreadsheet with columns: Problem | Topic | Date | Time Taken | Solved Alone? | Pattern Learned | Revisit Date (spaced repetition — revisit at 3 days, 1 week, 1 month).
