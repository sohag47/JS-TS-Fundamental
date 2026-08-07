/*
! TypeScript Generics — Deep Dive

Generics are how you write code that works with many types while keeping full type safety. 
Instead of hardcoding a type, you make it a variable — a "type parameter."
*/

//! problem
// Option A: use `any` — you lose all type checking
function identity(arg: any): any {
  return arg;
}
let output = identity("hello"); // output is `any`, TS can't help you anymore

// Option B: write one function per type — doesn't scale
function identityString(arg: string): string {
  return arg;
}
function identityNumber(arg: number): number {
  return arg;
}

//? Generics Solutions
function identity2<T>(arg: T): T {
  return arg;
}
let output1 = identity2<string>("hello"); // output1: string
let output2 = identity2(42);

//? 3. Generic functions with multiple type parameters
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const p = pair("age", 30); // [string, number]

//? 4. Generic interfaces and types
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "hi" };
const numberBox: Box<number> = { value: 5 };

// Generic type alias
type Pair<A, B> = { first: A; second: B };

//? 5. Generic classes
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
// numberStack.push("two"); // ❌ Error: string not assignable to number

/*
? 6. Constraints — extends

Sometimes you want T to be any type, but with a guarantee it has certain properties. That's what extends does in a generic context 
(different from class inheritance — this means "must satisfy this shape").
*/
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length); // safe — TS knows T has `.length`
  return arg;
}

logLength("hello"); // ✅ strings have .length
logLength([1, 2, 3]); // ✅ arrays have .length
// logLength(42); // ❌ numbers don't have .length

//? 7. keyof with generics — a huge combo
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 30 };

getProperty(person, "name"); // ✅ returns string
getProperty(person, "age"); // ✅ returns number
// getProperty(person, "email"); // ❌ Error: "email" is not a key of person

//? 8. Default type parameters
interface Container<T = string> {
  value: T;
}

const c1: Container = { value: "hello" }; // T defaults to string
const c2: Container<number> = { value: 42 }; // explicit override

//? 9. Generic constraints with default + multiple params
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const merged = merge({ name: "Alice" }, { age: 30 });
// merged: { name: string } & { age: number }

//? 10. Conditional types (generics get "if/else" logic)

type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

type Unwrap<T> = T extends Promise<infer U> ? U : T;
type AA = Unwrap<Promise<string>>; // string
type BB = Unwrap<number>; // number (not wrapped, passes through)

//? 11. Built-in generic utility types (use these constantly)
interface User {
  id: number;
  name: string;
  email: string;
}
type PartialUser = Partial<User>; // all props optional
type ReadonlyUser = Readonly<User>; // all props readonly
type UserPreview = Pick<User, "id" | "name">; // subset of props
type UserWithoutEmail = Omit<User, "email">; // all except email
type UserRecord = Record<string, User>; // { [key: string]: User }

//? 12. Generic constraints in real-world code — a repository pattern
interface Entity {
  id: string;
}

class Repository<T extends Entity> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

interface Product extends Entity {
  name: string;
  price: number;
}

const productRepo = new Repository<Product>();
productRepo.add({ id: "1", name: "Widget", price: 9.99 });

const found = productRepo.findById("1"); // Product | undefined
