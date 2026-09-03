/*
Full OOP Concepts in TypeScript — One Example

This covers all four pillars — Encapsulation, Inheritance, Polymorphism, Abstraction — 
plus interfaces, static members, and generics, using a "Vehicle Rental System" theme.
*/

//! Interface = pure contract, no implementation
interface Rentable {
  rentalPricePerDay: number;
  calculateRentalCost(days: number): number;
}

//! Abstract class = partial implementation + forces subclasses to fill the rest
abstract class Vehicle implements Rentable {
  private _id: string;
  protected mileage: number;
  public rentalPricePerDay: number;
  private static totalVehicles: number = 0;

  constructor(
    public brand: string,
    public model: string,
    rentalPricePerDay: number,
  ) {
    this._id = `V-${++Vehicle.totalVehicles}`;
    this.mileage = 0;
    this.rentalPricePerDay = rentalPricePerDay;
  }

  // getter — controlled read access to a private field (encapsulation)
  public get id(): string {
    return this._id;
  }

  // encapsulated method to mutate protected state safely
  public addMileage(km: number): void {
    if (km < 0) throw new Error("Mileage can't be negative");
    this.mileage += km;
  }

  public getMileage(): number {
    return this.mileage;
  }

  // ABSTRACT METHOD: no body here, every subclass MUST implement it differently
  abstract calculateRentalCost(days: number): number;

  // concrete method shared by all subclasses
  public describe(): string {
    return `${this.brand} ${this.model} (${this._id}) - $${this.rentalPricePerDay}/day`;
  }

  public static getTotalVehicles(): number {
    return Vehicle.totalVehicles;
  }
}

//! 2. INHERITANCE + POLYMORPHISM
class Car extends Vehicle {
  constructor(
    brand: string,
    model: string,
    rentalPricePerDay: number,
    private seats: number,
  ) {
    super(brand, model, rentalPricePerDay); // must call super() first
  }

  // POLYMORPHISM: overrides the abstract method with Car-specific logic
  calculateRentalCost(days: number): number {
    const base = this.rentalPricePerDay * days;
    const luxuryFee = this.seats > 5 ? 20 : 0; // e.g., van/SUV surcharge
    return base + luxuryFee;
  }

  // extends the parent's describe() using super
  public describe(): string {
    return `${super.describe()} - ${this.seats} seats`;
  }
}

class Motorcycle extends Vehicle {
  // different cost formula entirely — same method name, different behavior
  calculateRentalCost(days: number): number {
    const base = this.rentalPricePerDay * days;
    const discount = days >= 7 ? base * 0.1 : 0; // weekly discount
    return base - discount;
  }
}

//! 3. GENERICS (bonus, common in real TS OOP)
class Fleet<T extends Vehicle> {
  private vehicles: T[] = [];

  add(vehicle: T): void {
    this.vehicles.push(vehicle);
  }

  totalRevenue(days: number): number {
    return this.vehicles.reduce(
      (sum, v) => sum + v.calculateRentalCost(days),
      0,
    );
  }

  list(): void {
    this.vehicles.forEach((v) => console.log(v.describe()));
  }
}

//! USAGE
const car1 = new Car("Toyota", "Camry", 40, 5);
const car2 = new Car("Ford", "Explorer", 60, 7); // luxury fee applies
const bike1 = new Motorcycle("Yamaha", "MT-07", 25);

//? POLYMORPHISM in action: treat all as Vehicle, call same method name,
// each runs its OWN implementation
const vehicles: Vehicle[] = [car1, car2, bike1];

for (const v of vehicles) {
  console.log(`${v.describe()} → 7 days = $${v.calculateRentalCost(7)}`);
}

//? Fleet using generics, restricted to Vehicle subtypes
const carFleet = new Fleet<Car>();
carFleet.add(car1);
carFleet.add(car2);
carFleet.list();
console.log("Fleet revenue (3 days):", carFleet.totalRevenue(3));
console.log("Total vehicles created:", Vehicle.getTotalVehicles());

//! const v = new Vehicle("x","y",10); // ❌ Error: can't instantiate abstract class
