/**
 * Infinite Currying
 * -------------------------------------------------------------
 * Currying turns a function that takes many arguments into a chain of
 * functions that each take one argument: fn(a)(b)(c)...
 *
 * "Infinite" currying keeps accepting arguments one at a time and only
 * computes the final result when it is called with no argument, which
 * acts as the terminator:
 *
 *     curry(1)(2)(3)(4)()  ->  10
 *
 * Each call closes over the running total `a` (a closure) and returns a
 * new function that waits for the next value.
 *
 * Run: node Javascript/closure/infinite_currying.js
 */

const curry = (a) => {
  return (b) => {
    // No argument passed -> stop and return the accumulated sum.
    if (b === undefined) return a;
    // Otherwise keep currying with the updated total.
    return curry(a + b);
  };
};

// ---- Demo ----------------------------------------------------
console.log(curry(1)(2)(3)(4)()); // 10
console.log(curry(5)(10)()); // 15
console.log(curry(7)()); // 7
