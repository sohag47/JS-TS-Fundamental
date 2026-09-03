namespace Validation {
  /* 
! Union Types
A union type lets a variable hold more than one possible type.
You use the | symbol to say "this OR that.
*/

  let id: string | number;
  id = 101;
  id = "abc123";

  function printId(id: string | number): void {
    if (typeof id === "string") {
      console.log("id:", id.toLowerCase());
    } else {
      console.log("id:", id.toFixed(2));
    }
  }
  printId(101);
  printId("Sohag");

  /*
? Literal Types

A literal type is even more specific than a normal type — instead of saying 
"this is a string," it says "this is exactly this string (or number, or boolean)." 
*/
  type Status = "loading" | "success" | "error";

  function handleStatus(status: Status) {
    if (status === "loading") {
      console.log("Please wait...");
    } else if (status === "success") {
      console.log("Done!");
    } else {
      console.log("Something went wrong.");
    }
  }
  //! handleStatus("done");  not working

  /* 
? Discriminated Unions
This is where union + literal types really shine. The idea: you create several object types that share one 
common literal field (called the discriminant), and TypeScript uses that field to figure out exactly which 
shape you're dealing with.
*/
  type Circle = {
    kind: "circle";
    radius: number;
  };

  type Square = {
    kind: "square";
    sideLength: number;
  };
  type Triangle = {
    kind: "triangle";
    base: number;
    height: number;
  };
  type Shape = Circle | Square | Triangle;

  function getArea(shape: Shape): number {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      case "triangle":
        return (shape.base * shape.height) / 2;

      default:
        const _exhaustive: never = shape; // ❌ errors if a case was missed
        return _exhaustive;
    }
  }

  console.log("Circle Area", getArea({ kind: "circle", radius: 10 }));
  console.log("Square Area", getArea({ kind: "square", sideLength: 10 }));
  console.log(
    "Triangle Area",
    getArea({ kind: "triangle", base: 10, height: 50 }),
  );

  // console.log("_exhaustive", getArea({ kind: "_exhaustive" }));
}
