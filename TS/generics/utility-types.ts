/* eslint-disable no-console */
// TypeScript Utility Types Cheat Sheet

export default function UtilityTypes(): void {
  /* 
    ! 1. Partial<Type>
    * all properties are optional
  */
  type UserRole = "admin" | "user" | "guest";
  type User = {
    id: number;
    name: string;
    age: number;
    email: string;
  };
  type PartialUser = Partial<User>;

  const partialUser: PartialUser = {
    name: "John Doe",
  };
  console.log("PartialUser:", partialUser);

  /* 
  ! 2. Required<Type>
  * all the properties are required and nullable properties also
  */
  type RequiredUser = Required<User>;
  const requiredUser: RequiredUser = {
    id: 1,
    name: "Jane Doe",
    age: 30,
    email: "sohag@email.com",
  };
  console.log("requiredUser :>> ", requiredUser);

  /* 
  ! 3. Readonly<Type>
  * all properties are readonly
  */
  // type ReadonlyUser = Readonly<User>;
  // const readonlyUser: ReadonlyUser = {
  //   name: 'GPT Bro', // ❌ Error: cannot assign to 'name'
  // };

  /* 
  ! 4. Pick<T, K>
  * pick some properties from an object type
  */
  type PublicUser = Pick<User, "name" | "email">;
  const publicUser: PublicUser = {
    name: "Public User",
    email: "test@email.com",
  };
  // publicUser.id = 1; // ❌ Error: Property 'id' does not exist on type 'PublicUser'.
  console.log("publicUser :>> ", publicUser);

  /* 
  ! 5. Omit<T, K>
  * omit some properties from an object type
  */
  type PrivateUser = Omit<User, "email" | "age">;
  const privateUser: PrivateUser = {
    id: 2,
    name: "Private User",
  };
  // privateUser.email = 'test@email.com'; // ❌ Error: Property 'email' does not exist on type 'PrivateUser'.
  console.log("privateUser :>> ", privateUser);

  /* 
  ! 6. Record<K, T>
  * create an object type with a set of properties K of type T
  */

  type UserPermissions = Record<UserRole, string[]>;
  const userPermissions: UserPermissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"],
  };
  console.log("userPermissions :>> ", userPermissions);

  /* 
  ! 7. Exclude<T, U>
  * exclude from T those types that are assignable to U
  */
  type Primitive = string | number | boolean | null | undefined;
  type NonNullablePrimitive = Exclude<Primitive, null | undefined>;
  const nonNullableValue: NonNullablePrimitive = "Hello";
  // const invalidValue: NonNullablePrimitive = null; // ❌ Error: Type 'null' is not assignable to type 'NonNullablePrimitive'.
  console.log("nonNullableValue :>> ", nonNullableValue);

  /* 
  ! 8. Extract<T, U>
  * extract from T those types that are assignable to U
  */
  type StringOrNumber = Extract<Primitive, string | number>;
  const stringValue: StringOrNumber = "Hello";
  const numberValue: StringOrNumber = 42;
  // const booleanValue: StringOrNumber = true; // ❌ Error: Type 'boolean' is not assignable to type 'StringOrNumber'.
  console.log("StringOrNumber :>> ", stringValue, numberValue);

  /* 
  ! 9. NonNullable<Type>
  * exclude null and undefined from Type
  */
  type NonNullableUser = NonNullable<User | null | undefined>;
  const nonNullableUser: NonNullableUser = {
    id: 3,
    name: "Non Nullable User",
    age: 25,
    email: "test@email.com",
  };
  console.log("nonNullableUser :>> ", nonNullableUser);

  /*  
  ! 10. ReturnType<Type>
  * get the return type of a function type
   */
  type GreetFunction = (name: string) => string;
  type GreetReturnType = ReturnType<GreetFunction>;

  const greet: GreetFunction = (name) => `Hello, ${name}!`;
  const greeting: GreetReturnType = greet("GPT Bro");
  console.log("greeting :>> ", greeting);

  // const hello: GreetFunction = (age: number) => {
  //   return age;
  // }; // ❌ Error: Type 'number' is not assignable to type 'string'.
  // console.log('hello :>> ', hello('Sohag'));

  /* 
  ! 11. Parameters<T>
  * get the parameters of a function type as a tuple type
  */
  function greetParameters(name: string, age: number): string {
    return `Hello ${name}, age ${age}`;
  }
  type GreetParams = Parameters<typeof greetParameters>; // [string, number]

  // use the function and the Params type to avoid unused-variable/type errors
  const greetParamsExample: GreetParams = ["Alice", 30];
  console.log(
    "greetParameters result :>> ",
    greetParameters(...greetParamsExample),
    "greetParamsExample :>> ",
    greetParamsExample,
  );

  /*
  ! 12. ThisParameterType<Type>
  * get the type of the 'this' parameter for a function type
  */
  function greetWithThis(this: { greeting: string }, name: string): string {
    return `${this.greeting}, ${name}!`;
  }
  type ThisType = ThisParameterType<typeof greetWithThis>; // { greeting: string }

  const thisContext: ThisType = { greeting: "Hello" };
  console.log(
    "greetWithThis result :>> ",
    greetWithThis.call(thisContext, "Bob"),
  );

  /* 
  ! 13. OmitThisParameter<Type>
  * remove the 'this' parameter from a function type
  */
  type GreetWithoutThis = OmitThisParameter<typeof greetWithThis>; // (name: string) => string
  const greetWithoutThis: GreetWithoutThis = (name) => `Hi, ${name}!`;
  console.log("greetWithoutThis result :>> ", greetWithoutThis("Charlie"));

  /* 
  ! 14. InstanceType<Type>
  * get the instance type of a constructor function type
  */
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    greet(): string {
      return `Hello, ${this.name}!`;
    }
  }
  type PersonInstance = InstanceType<typeof Person>; // Person
  const person: PersonInstance = new Person("David");
  console.log("person.greet() :>> ", person.greet());

  /* 
  ! 15. ConstructorParameters<Type>
  * get the parameters of a constructor function type as a tuple type
  */
  type PersonConstructorParams = ConstructorParameters<typeof Person>; // [string]
  const personParams: PersonConstructorParams = ["Eve"];
  const anotherPerson = new Person(...personParams);
  console.log("anotherPerson.greet() :>> ", anotherPerson.greet());

  /* 
  ! 16. Awaited<Type>
  * get the resolved type of a Promise
  */
  type PromiseType = Promise<string>;
  type ResolvedType = Awaited<PromiseType>; // string
  const promise: PromiseType = Promise.resolve("Hello, Promise!");
  promise.then((value) => {
    const resolvedValue: ResolvedType = value;
    console.log("resolvedValue :>> ", resolvedValue);
  });
}
