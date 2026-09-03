// ! TypeScript Classes: Access Modifiers, Inheritance, Abstract Classes

/*
! Access Modifiers
TypeScript adds three keywords that control visibility of class members 
(properties/methods). Plain JavaScript classes don't have these — this is a 
TypeScript-only compile-time feature.
*/

class BankAccount {
  public owner: string;
  private balance: number;
  protected accountType: string;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = "generic";
  }

  /*
  class BankAccount {
  constructor(
    public owner: string,
    private balance: number,
    protected accountType: string = "generic"
  ) {}
}
  */

  public deposit(amount: number) {
    this.balance = amount;
  }

  private logTransaction(message: string): void {
    console.log(message);
  }
}

const account = new BankAccount("sohag", 100);
account.owner;
account.deposit;
//! account.accountType; not accessible
//! account.logTransaction("sdsds"); not accessible

/*
! Inheritance

Use extends to build a subclass, and super(...) to call the parent constructor.
*/
class Account {
  constructor(protected balance: number) {}

  public getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  constructor(
    balance: number,
    private interestRate: number,
  ) {
    super(balance); // must call super() before using `this`
  }

  public addInterest(): void {
    this.balance += this.balance * this.interestRate; // ✅ protected, visible here
  }
}

/*
! Abstract Classes

An abstract class can't be instantiated directly — it exists only to be extended. 
It can mix concrete (implemented) members with abstract members (no body — subclasses 
must implement them).
*/

abstract class Shape {
  abstract getArea(): number; // no implementation — subclass must provide one

  // concrete method, shared by all subclasses
  describe(): string {
    return `This shape has an area of ${this.getArea()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

//! const shape = new Shape(); // ❌ compile error: cannot create instance of abstract class
const c = new Circle(5);
console.log(c.describe()); // "This shape has an area of 78.54..."

//? Final example
abstract class Employee {
  constructor(
    public name: string,
    protected baseSalary: number,
  ) {}

  abstract calculatePay(): number;

  public printPaycheck(): void {
    console.log(`${this.name}: $${this.calculatePay()}`);
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private bonus: number,
  ) {
    super(name, baseSalary);
  }

  calculatePay(): number {
    return this.baseSalary + this.bonus;
  }
}

new Manager("Sam", 5000, 1000).printPaycheck(); // Sam: $6000
