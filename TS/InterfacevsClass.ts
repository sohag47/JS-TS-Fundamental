/* 
! Interface vs Class

A class creates something real — you can new it up, it has actual code running, actual memory allocated, 
actual methods that execute.

An interface is just a shape description. It exists only at compile time. 
TypeScript uses it to check your code, then deletes it entirely — there's zero trace of it in the compiled JavaScript.
*/
interface Animal {
  name: string;
  makeSound(): string;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Woof!";
  }
}

const d = new Dog("Rex"); // works — Dog is a real class
// const a = new Animal();  // ERROR — interfaces can't be instantiated

//! abstract class
abstract class Shape {
  // real, shared implementation — inherited by all subclasses
  describe(): string {
    return `This shape has an area of ${this.getArea()}`;
  }

  // no body — subclasses MUST implement this
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  getArea(): number {
    return this.side ** 2;
  }
}

// const s = new Shape();      // ERROR — can't instantiate abstract class
const c = new Circle(5);
console.log(c.describe()); // uses inherited method, calls Circle's getArea()

//! Optional and readonly properties on interfaces
interface IUser {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const employee: IUser = {
  id: 1,
  name: "Sohag",
  email: "sohag@emil.com",
  createdAt: new Date(),
};

function greet(user: IUser): void {
  if (user?.id) {
    console.log(user);
  }
}

greet(employee);
