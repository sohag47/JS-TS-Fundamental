namespace enumsImplementation {
  /*
! TypeScript Enums — In Depth

An enum (short for "enumerated type") lets you define a set of named constants. 
Instead of using magic numbers or strings scattered through your code, you give them meaningful names.
*/

  //* 1. By default, TypeScript auto-increments values starting at 0. You can override the starting point:
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }

  let move: Direction = Direction.Right;
  console.log("move:", move);

  enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
  }
  console.log("Status:", StatusCode.Success);

  /*
? 2. Heterogeneous Enums (mixed) — generally avoid
*/
  enum Mixed {
    No = 0,
    Yes = "YES",
  }

  /*
? 3. Const Enums

A const enum is fully erased at compile time — no object is generated in the compiled JS, 
just inlined values. This makes it faster and lighter:
*/
  const enum Direction2 {
    Up,
    Down,
  }

  let d = Direction2.Up;

  /*
? 4. Reverse mapping (numeric enums only)
Numeric enums generate a two-way mapping — you can go from name → value and value → name:
*/
  console.log("UP: ", Direction.Up);
  console.log("0:", Direction[1]);

  //* String enums have no reverse mapping
  enum DirectionStatus {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  console.log("Up:", DirectionStatus.Up);

  /*
? 5. Computed Members

Enum values can also be computed from expressions (numeric enums only), though this is less common:
*/

  enum FileAccess {
    None,
    Read = 1 << 1, // 2
    Write = 1 << 2, // 4
    ReadWrite = Read | Write, // 6
  }
  console.log("FileAccess", FileAccess.None);
  console.log("FileAccess", FileAccess.Read);
  console.log("FileAccess", FileAccess.Write);
  console.log("FileAccess", FileAccess.ReadWrite);

  /*
6. Enums as Types

An enum isn't just values — it's also a type you can use for annotations:
*/
  function showValue(value: Direction) {
    console.log("value", value);
  }
  showValue(Direction.Up);
  showValue(1);

  /*
? 7. Enum Members as Types (Literal narrowing)

Each enum member can itself act as its own type, useful for discriminated unions:
*/
  enum ShapeKind {
    Circle,
    Square,
    Triangle,
  }

  interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
  }

  interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
  }
  type Triangle = {
    kind: ShapeKind.Triangle;
    base: number;
    height: number;
  };

  type Shape = Circle | Square | Triangle;

  function getArea(shape: Shape): number {
    switch (shape.kind) {
      case ShapeKind.Circle:
        return Math.PI * shape.radius ** 2;
      case ShapeKind.Square:
        return shape.sideLength ** 2;
      case ShapeKind.Triangle:
        return (shape.base * shape.height) / 2;

      default:
        const _exhaustive: never = shape; // ❌ errors if a case was missed
        return _exhaustive;
    }
  }

  console.log("Circle Area", getArea({ kind: ShapeKind.Circle, radius: 10 }));
  console.log(
    "Square Area",
    getArea({ kind: ShapeKind.Square, sideLength: 10 }),
  );
  console.log(
    "Triangle Area",
    getArea({ kind: ShapeKind.Triangle, base: 10, height: 50 }),
  );

  //   console.log("_exhaustive", getArea({ kind: "_exhaustive" }));

  /* 
  ? 8. Enums vs. Union of String Literals (a common alternative)
    Many TypeScript style guides (including some at companies and the official TS team's recent guidance) actually prefer union types over enums for simple cases:
    */

  type TDirectionStatus =
    (typeof DirectionStatus)[keyof typeof DirectionStatus];
  // function showDirectionStatus(status: DirectionStatus): void {
  //     console.log('status', status)
  // }
  // showDirectionStatus("")
}
