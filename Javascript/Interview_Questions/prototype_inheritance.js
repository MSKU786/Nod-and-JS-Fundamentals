/**
 * Classical Inheritance with Constructor Functions
 * -------------------------------------------------------------
 * How to make one constructor inherit from another (before `class`/`extends`):
 *
 *   1. Call the parent constructor on `this` to copy its instance fields:
 *        Parent.call(this, ...)
 *   2. Link the child prototype to the parent prototype so inherited
 *      methods are found on the chain:
 *        Child.prototype = Object.create(Parent.prototype)
 *   3. Restore the `constructor` pointer, which step 2 overwrote:
 *        Child.prototype.constructor = Child
 *
 * Run: node Javascript/Interview_Questions/prototype_inheritance.js
 */

// Parent
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

// Child
function Employee(name, age, jobTitle) {
  // 1. Reuse Person's initialization for name/age.
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// 2. Inherit Person's prototype methods.
Employee.prototype = Object.create(Person.prototype);
// 3. Fix the constructor reference (otherwise it points to Person).
Employee.prototype.constructor = Employee;

// Child-specific method
Employee.prototype.describeJob = function () {
  console.log(`I work as a ${this.jobTitle}.`);
};

// ---- Demo ----------------------------------------------------
const alice = new Employee('Alice', 30, 'Software Engineer');

alice.introduce(); // Hi, I'm Alice and I'm 30 years old.  (inherited)
alice.describeJob(); // I work as a Software Engineer.         (own method)

console.log(alice instanceof Employee); // true
console.log(alice instanceof Person); // true
console.log(alice.constructor === Employee); // true (thanks to step 3)
