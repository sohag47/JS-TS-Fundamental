//? TypeScript: readonly, Optional Properties, and Intersection Types

/*
? 1. readonly
Marks a property so it can only be set once (at creation), and can't be reassigned afterward.
 */

interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alex" };

user.name = "Sam"; // ✅ fine
//! user.id = 2;        // ❌ Error: Cannot assign to 'id' because it is a read-only property

/*
? 2. Optional Properties (?)

Marks a property as not required — it might be present or undefined.
*/
interface Product {
  name: string;
  price: number;
  discount?: number; // optional
}

const p1: Product = { name: "Book", price: 20 }; // ✅ discount omitted
const p2: Product = { name: "Pen", price: 5, discount: 10 }; // ✅ discount included

/*
? 3. Intersection Types (&)

Combines multiple types into one — the result has all properties from each type.
*/
interface Name {
  name: string;
}

interface Age {
  age: number;
}

type Person = Name & Age;

const p: Person = { name: "Alex", age: 30 }; // must satisfy BOTH

interface BaseEntity {
  readonly id: string;
  readonly createdAt: Date;
}

interface UserInfo {
  name: string;
  email: string;
  nickname?: string; // optional
}

type User2 = BaseEntity & UserInfo; // intersection

const user2: User2 = {
  id: "u1",
  createdAt: new Date(),
  name: "Alex",
  email: "alex@example.com",
  // nickname omitted — that's fine, it's optional
};

//! user.id = "u2"; // ❌ Error: readonly
//! user.nickname = "Al"; // ✅ fine, optional but assignable after creation
