/**
 * Encapsulation with Closures
 * -------------------------------------------------------------
 * A closure lets an inner function keep access to variables from the
 * scope where it was created, even after that outer scope has returned.
 *
 * Here `count` lives inside `createCounter`. Nothing outside can read or
 * write it directly — the only way to touch it is through the returned
 * methods. That is data privacy / encapsulation in plain JavaScript.
 *
 * Run: node Javascript/closure/encapsulation.js
 */

function createCounter() {
  let count = 0; // private state, not reachable from the outside

  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
  };
}

// ---- Demo ----------------------------------------------------
const counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getValue()); // 2

counter.decrement();
console.log(counter.getValue()); // 1

// `count` is private: there is no `counter.count` to tamper with.
console.log(counter.count); // undefined

// Each counter keeps its own independent state.
const other = createCounter();
other.increment();
console.log(other.getValue()); // 1
console.log(counter.getValue()); // 1 (unaffected by `other`)
