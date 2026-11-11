/**
 * Function.prototype.bind
 * -------------------------------------------------------------
 * `bind` returns a NEW function with `this` permanently set to the value
 * you pass. Unlike call/apply it does not invoke the function right away.
 *
 * Two classic uses:
 *   1. Locking `this` so it survives being passed around as a callback.
 *   2. Partial application — pre-filling some leading arguments.
 *
 * Run: node Javascript/apply_bind_call/bind.js
 */

// 1. Fixing `this` when a method is detached from its object
const user = {
  name: 'Manish',
  greet() {
    return `Hello, ${this.name}`;
  },
};

const detached = user.greet;
// `detached()` would lose `this` (undefined/global) -> "Hello, undefined".

const boundGreet = user.greet.bind(user);
console.log(boundGreet()); // Hello, Manish

// 2. Partial application — pre-fill the first argument
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // fixes a = 2
console.log(double(5)); // 10
console.log(double(9)); // 18
