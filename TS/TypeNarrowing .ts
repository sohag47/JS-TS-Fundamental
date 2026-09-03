/*
? typeof narrowing

Works for primitives: string, number, boolean, bigint, symbol, undefined, function, object.
*/
function printLength(value: string | number | boolean) {
  if (typeof value === "string") {
    // TypeScript knows `value` is a string here
    console.log(value.length);
  } else if (typeof value === "boolean") {
    console.log(value);
  } else {
    // and here it knows it's a number
    console.log(value.toFixed(2));
  }
}

//! Gotcha: typeof null === "object", so typeof alone can't distinguish null from other objects.

/*
? instanceof narrowing

Works for class instances — checks the prototype chain.
*/
class Dog {
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // narrowed to Dog
  } else {
    animal.meow(); // narrowed to Cat
  }
}

/*
? Custom type guards (is)

For cases typeof/instanceof can't handle — like distinguishing between two object shapes — you write a 
function that returns a type predicate: paramName is Type.
*/

interface Fish {
  swim: () => void;
}
interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // narrowed to Fish
  } else {
    pet.fly(); // narrowed to Bird
  }
}

/*
? Other narrowing tools worth knowing  (in)

in operator — checks if a property exists, useful for object shapes without a custom guard:
*/
function move2(pet: Fish | Bird) {
  if ("swim" in pet) {
    pet.swim();
  } else {
    pet.fly();
  }
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}
