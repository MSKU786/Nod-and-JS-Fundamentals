/**
 * Prototype Inheritance — constructor functions vs. ES6 classes
 * -------------------------------------------------------------
 * Two ways to create many objects that share the same methods.
 *
 *   ES5: a constructor function + methods on `Constructor.prototype`.
 *   ES6: the `class` syntax, which is sugar over the exact same mechanism.
 *
 * In BOTH cases the method is defined once on the prototype and shared by
 * every instance (memory efficient) — not copied onto each object.
 *
 * (The two versions use different names, PersonES5 / PersonES6, because a
 *  single scope cannot declare the same identifier twice.)
 *
 * Run: node Javascript/Prototype_Inheritance/example2.js
 */

// ---- ES5: constructor function -------------------------------
function PersonES5(name, age) {
  this.name = name;
  this.age = age;
}

// Defined once, shared by all instances via the prototype.
PersonES5.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name} (${this.age})`);
};

const manish = new PersonES5('Manish', 25);
const raj = new PersonES5('Raj', 27);
manish.sayHi(); // Hi, I'm Manish (25)
raj.sayHi(); // Hi, I'm Raj (27)

// Both instances share the SAME function object on the prototype:
console.log(manish.sayHi === raj.sayHi); // true

// ---- ES6: class (same thing under the hood) ------------------
class PersonES6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name} (${this.age})`);
  }
}

const alice = new PersonES6('Alice', 30);
alice.sayHi(); // Hi, I'm Alice (30)

// The class method also lives on the prototype, exactly like ES5:
console.log(alice.sayHi === PersonES6.prototype.sayHi); // true
console.log(Object.getPrototypeOf(alice) === PersonES6.prototype); // true
