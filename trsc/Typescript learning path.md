# TypeScript Learning Path

A practical, stage-by-stage path to learning TypeScript. Use `tsx` to run every example as you go: `npx tsx file.ts`.

---

## Stage 1: JavaScript Fundamentals (skip if solid)

TypeScript is JavaScript + types, so shaky JS fundamentals will slow you down later.

- [ ] Variables, functions, arrays, objects
- [ ] `this`, closures, async/await, promises
- [ ] ES6+ features: destructuring, spread/rest, arrow functions, modules (import/export)

If you're already comfortable writing JS, skip straight to Stage 2.

---

## Stage 2: TypeScript Basics (1–2 weeks)

- [x] Basic types: `string`, `number`, `boolean`, `array`, `tuple`
- [x] `any`, `unknown`, `never`, `void`
- [x] Type inference vs explicit typing
- [x] Interfaces vs type aliases (`interface` vs `type`)
- [x] Function typing: parameters, return types, optional/default params
- [x] Function Overloading
- [ ] Union types (`|`) and literal types
- [ ] Enums

**Practice:** Rewrite small JS scripts you've already written (a calculator, a to-do list, a fetch wrapper) in TypeScript.

---

## Stage 3: Intermediate Concepts (2–3 weeks)

- [ ] Interfaces vs classes, implementing interfaces
- [ ] Classes: access modifiers (`public`/`private`/`protected`), inheritance, abstract classes
- [ ] Generics — this is the big one, spend real time here
- [ ] Type narrowing (`typeof`, `instanceof`, custom type guards)
- [ ] `readonly`, optional properties (`?`)
- [ ] Intersection types (`&`)
- [ ] Utility types: `Partial`, `Pick`, `Omit`, `Record`, `Required`

**Practice:** Build a small typed API client, or a generic data structure (Stack, Queue) using generics.

---

## Stage 4: Real Project Setup (1 week)

- [ ] `tsconfig.json` deep dive — `strict` mode, `target`, `module`, path aliases
- [ ] Working with `@types/*` packages (typing third-party JS libraries)
- [ ] Declaration files (`.d.ts`) — writing your own basic ones
- [ ] Type-checking npm packages that don't ship types

**Practice:** Add TypeScript to an existing small JS project, or start a new one from scratch (e.g. a CLI tool or small Express API).

---

## Stage 5: Advanced Types (2–3 weeks, optional but valuable)

- [ ] Mapped types
- [ ] Conditional types (`T extends U ? X : Y`)
- [ ] Template literal types
- [ ] `infer` keyword
- [ ] Discriminated unions (great for state machines / Redux-style patterns)
- [ ] Function overloads

This stage is where TypeScript gets genuinely powerful — most day-to-day work doesn't need it, but understanding it makes reading library type definitions (React, Zod, tRPC, etc.) much easier.

---

## Stage 6: Apply It to a Real Project (ongoing)

Pick one and build it fully typed, no shortcuts:

- [ ] A REST API with Express + TypeScript
- [ ] A React app with TypeScript
- [ ] A CLI tool (great with `tsx` — you already have the runner set up)
- [ ] A small library published to npm with proper `.d.ts` output

This is where it actually sticks — types matter most in context, not isolation.

---

## Resources

- **Official docs**: [typescriptlang.org/docs](https://www.typescriptlang.org/docs) — genuinely excellent, start here
- **TypeScript Playground**: [typescriptlang.org/play](https://www.typescriptlang.org/play) — test snippets instantly, see compiled JS side by side
- **Type Challenges** (GitHub: `type-challenges/type-challenges`) — once you hit Stage 5, these are great generic/advanced-type puzzles

---

## Rough Timeline

4–8 weeks to comfortable proficiency if you code a bit daily, faster if you already know JS well and are just adding types on top.
