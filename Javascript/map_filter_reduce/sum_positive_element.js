/**
 * map / filter / reduce
 * -------------------------------------------------------------
 * The three core array transformations:
 *   - map()    : build a new array by transforming every element.
 *   - filter() : build a new array keeping only elements that pass a test.
 *   - reduce() : fold the array down to a single value.
 *
 * Example task: sum only the positive elements of an array.
 *
 * Note on reduce: always pass an initial value (here `0`). Without it,
 * reduce seeds the accumulator with the first element and skips it — so a
 * negative first element would be wrongly included in the sum.
 *
 * Run: node Javascript/map_filter_reduce/sum_positive_element.js
 */

const input = [1, -4, 12, 0, -3, 29, -150];

// reduce: add each positive number onto the running total (seed = 0)
const sumOfPositives = input.reduce((acc, curr) => {
  return curr > 0 ? acc + curr : acc;
}, 0);
console.log('sum of positives:', sumOfPositives); // 42

// map: returns a NEW array with every value transformed (x2 here)
const doubled = input.map((n) => n * 2);
console.log('doubled:', doubled);
// [ 2, -8, 24, 0, -6, 58, -300 ]

// filter: returns a NEW array keeping only values that pass the test
const nonNegative = input.filter((n) => n >= 0);
console.log('non-negative:', nonNegative); // [ 1, 12, 0, 29 ]

console.log('original is unchanged:', input);
// [ 1, -4, 12, 0, -3, 29, -150 ]
