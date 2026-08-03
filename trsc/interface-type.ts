/*
! interface vs type in TypeScript
Both let you describe the shape of an object, and for most everyday use they're interchangeable:

* interface User {
*  name: string;
*  age: number;
* }

* type User = {
*   name: string;
*   age: number;
* };
*/

/*
! 1. Declaration merging
interface can be declared multiple times, and TypeScript merges them automatically. 
type cannot — redeclaring it is an error.
This is why libraries (and .d.ts files) prefer interface — it lets consumers extend built-in types, like augmenting Express's Request object.
*/
interface IUser {
  name: string;
}
interface IUser {
  age: number;
}

type Person = { name: string };
// type Person = { age: number }; // ❌ Error: Duplicate identifier

/*
! 2. What they can represent
type is more flexible — it can alias unions, intersections, tuples, primitives, and mapped types. interface can only describe object/function shapes.
*/
type ID = string | number; // union — interface can't do this
type Point = [number, number]; // tuple
type Callback = (x: number) => void; // function type
type Partial<T> = { [K in keyof T]?: T[K] }; // mapped type

/*
! 3. Extending
Both support extension, with slightly different syntax:
*/
interface IAnimal {
  name: string;
}
interface IDog extends IAnimal {
  breed: string;
}

type TAnimal = { name: string };
type TDog = TAnimal & { breed: string }; // intersection
// Interfaces check compatibility with extends; intersections (&) can silently produce never if properties conflict, which is a subtle footgun.

/*
! 4. Performance
For large, complex object types, interface tends to type-check faster because TypeScript can cache/refer to it by name, whereas type aliases with intersections get re-evaluated more. This rarely matters unless you're at real scale.
*/

/*
! Rule of thumb
Use case   --	 Prefer
Public API / library object shapes -- interface (mergeable, extensible)
Unions, tuples, function types, mapped types -- type
React component props -- either works; many teams default to type
Just describing an object shape internally -- either — pick one and be consistent
*/

//* In practice: most style guides (including TypeScript's own) say use interface for object shapes you expect to be extended or implemented (like class contracts), and type for everything else — especially unions and utility-type compositions.
