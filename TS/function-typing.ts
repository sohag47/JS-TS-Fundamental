//! Function typing

//? 1. Basic Parameter & Return Types

function add(a: number, b: number): number {
  return a + b;
}
// Arrow function version
const multiply = (a: number, b: number): number => a * b;

/*
? 2. void Return Type
Use void when a function doesn't return a meaningful value:
*/
function logMessage(msg: string): void {
  console.log(msg);
}

/*
? 3. Optional Parameters (?)
Add ? after the parameter name to make it optional. 
Optional params must come after required ones.
*/
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}!`;
}
console.log('greet("Alice") => ', greet("Alice")); // "Hello, Alice!"
console.log('greet("Alice", "Hi") =>', greet("Alice", "Hi")); // "Hi, Alice!"

/* 
? 4. Default Parameters
Give a parameter a default value directly — TypeScript infers its type from the default:
*/
function greet2(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`;
}

greet2("Bob"); // "Hello, Bob!"
greet2("Bob", "Hey"); // "Hey, Bob!"

function example(a: number, b = 10, c: number): number {
  return a + b + c;
}
example(10, undefined, 20);

/* 
? 5. Rest Parameters
Collects remaining args into a typed array:
*/
function sum(...salaries: number[]): number {
  return salaries.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4);

// ? 6. Function Type Expressions (typing a variable that holds a function)
interface FetchOptions {
  timeout?: number;
}

function onComplete(message: string): void {
  console.log("message:", message);
}

// for general function
function fetchData(
  url: string,
  options: FetchOptions,
  onComplete?: (data: string) => void,
): void {
  const timeout = options.timeout ?? 5000;
  console.log(`Fetching ${url} with timeout ${timeout}`);
  onComplete?.("some data");
}

// for arrow function
type TFetchData = (
  url: string,
  options: FetchOptions,
  onComplete?: (data: string) => void,
) => void;

const arrowFetchData: TFetchData = (url, options = {}, onComplete) => {
  const timeout = options.timeout ?? 5000;
  console.log(`Fetching ${url} with timeout ${timeout}`);
  onComplete?.("some data");
};

arrowFetchData("/users", { timeout: 5000 }, onComplete);

// Exercise
type TCreateUserReturn = {
  name: string;
  age: number;
  isAdmin: boolean;
};
type TCreateUserProps = (
  name: string,
  age: number,
  isAdmin?: boolean,
) => TCreateUserReturn;

const createUser: TCreateUserProps = (name, age, isAdmin = false) => {
  return {
    name,
    age,
    isAdmin,
  };
};
