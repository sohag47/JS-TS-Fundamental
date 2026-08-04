/*
! Function Overloads

Function overloads let you define multiple call signatures for a single function — 
useful when a function behaves differently (different param/return types)
depending on how it's called, in a way generics or union types can't cleanly express.
*/

/* 
? 1. The Problem

Say you want a function that can accept either a number or a string, 
and its return type should depend on which one you passed:
*/

// function process(value: number): number;
// function process(value: string): string;

function process(value: number | string): number | string {
  return value;
}

/*
? 2. Overload Syntax

You write overload signatures (no body) followed by a single implementation signature (with body) 
that must be compatible with all of them:
 */

function createDate(timestamp: number): Date;
function createDate(year: number, month: number, day: number): Date;
function createDate(
  yearOrTimestamp: number,
  month?: number,
  day?: number,
): Date {
  if (month !== undefined && day !== undefined) {
    return new Date(yearOrTimestamp, month - 1, day);
  }
  return new Date(yearOrTimestamp);
}

console.log("createDate(1690000000000)", createDate(1690000000000));
console.log("createDate(2024, 6, 15)", createDate(2024, 6, 15));
// console.log("createDate(2024, 6)", createDate(2024, 6));

interface User {
  id: number;
  name: string;
}
interface Admin extends User {
  permissions: string[];
}

function getAccount(id: number): User;
function getAccount(id: number, isAdmin: true): Admin;
function getAccount(id: number, isAdmin?: boolean): User | Admin {
  if (isAdmin) {
    return { id, name: "Admin User", permissions: ["all"] };
  }
  return { id, name: "Regular User" };
}
