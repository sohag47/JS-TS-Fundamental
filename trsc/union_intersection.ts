/* eslint-disable no-console */
// union and intersection types

export default function UnionIntersectionTypes(): void {
  //? 1. Union Types (|)
  type ID = string | number;
  let userId: ID;
  userId = 123; // valid
  userId = "abc"; // valid
  // userId = true; // ❌ Error: Type 'boolean' is not assignable to type 'ID'.
  console.log("userId :>> ", userId);

  // Union with Objects
  type Circle = { kind: "circle"; radius: number };
  type Square = { kind: "square"; side: number };
  type Shape = Circle | Square;

  function area(shape: Shape): number {
    if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
    return shape.side ** 2;
  }
  console.log("area :>> ", area({ kind: "circle", radius: 10 })); // valid

  type Person = { name: string };
  type Contact = { email: string };
  type User = Person | Contact;

  const user: User = { name: "John Doe", email: "john@email.com" }; // valid
  console.log("user :>> ", user);

  //? 2. Intersection Types (&)

  type Employee = Person & Contact;
  const employee: Employee = { name: "John Doe", email: "john@email.com" };
  console.log("employee :>> ", employee);
}
