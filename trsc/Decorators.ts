namespace DecoratorsImplement {
  /*
    ? 1. Class Decorators

    Applied to a class constructor. Can observe, modify, or replace the class definition.
    */
  function Logger(prefix: string) {
    return function (constructor: Function) {
      console.log(`${prefix}: ${constructor.name}`);
    };
  }

  @Logger("LOG")
  class Person {
    constructor(public name: string) {}
  }

  /*
  2. Method Decorators

    Receives the target (prototype), method name, and property descriptor. 
    Useful for wrapping behavior (e.g., logging, memoization).
  */

  function LogExecution(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyKey} with`, args);
      return original.apply(this, args);
    };
  }

  class Calculator {
    @LogExecution
    add(a: number, b: number) {
      return a + b;
    }
  }
}
