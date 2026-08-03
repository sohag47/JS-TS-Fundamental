/*
! TypeScript Basic Types
TypeScript extends JavaScript by adding a static type system. Here's a detailed breakdown of the basic types.
*/

/* 
! 1. number
Represents all numbers — integers, floats, hex, binary, octal.
*/
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;
let binary: number = 0b1010;
let big: bigint = 100n;

/*
! 2. string
Textual data, supports single quotes, double quotes, and template literals.
*/
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;

// ! 3. boolean
let isActive: boolean = true;
let isComplete: boolean = false;

/*
! 4. null and undefined
Both have their own types. By default they are subtypes of every other type, 
but with strictNullChecks enabled (recommended), they only accept their own value unless explicitly unioned in.
*/
let null_data: null = null;
let undefined_data: undefined = undefined;
let string_null: string | null = null;

/*
! 5. any
Disables type checking entirely — the escape hatch. Use sparingly since it defeats the purpose of TypeScript.
*/
let data: any = 5;
data = "hello";
data = true;

/*
! 6. unknown
Like any, but safer — you must narrow the type before using it.
*/
let value: unknown = 10;
value = "hello";

/*
! 7. void
Used for functions that don't return a value.
*/
function logMessage(message: string): void {
  console.log(message);
}

/*
! 8. never
Represents values that never occur — functions that always throw or never finish (infinite loops).
*/
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

/*
! 9. Arrays
Two syntaxes for typed arrays:
*/
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

/*
! 10. Tuples
Fixed-length arrays with known types at each position.
*/
let person: [string, number] = ["Alice", 30];
let entry: [string, number, boolean?] = ["key", 1];

/*
! 11. enum
Named constants — numeric or string-based.
*/

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
let move: Direction = Direction.Up;

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

/*
! 12. Object
Represents any non-primitive type.
*/
let user: object = { name: "Alice", age: 30 };
let profile: { name: string; age: number } = { name: "Bob", age: 25 };

/*
! 13. symbol
Represents unique identifiers.
*/
let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");
console.log(sym1 === sym2);
