/**
 * Function.prototype.call and Function.prototype.apply
 * -------------------------------------------------------------
 * Both invoke a function immediately with an explicit `this` value.
 * The only difference is how extra arguments are passed:
 *
 *   func.call(thisArg, arg1, arg2, ...)   -> arguments listed one by one
 *   func.apply(thisArg, [arg1, arg2, ...]) -> arguments as a single array
 *
 * Run: node Javascript/apply_bind_call/call_apply.js
 */

const person = {
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
  },
};

const person1 = { firstName: 'John', lastName: 'Doe' };
const person2 = { firstName: 'Jane', lastName: 'Smith' };

// ---- call(): borrow `fullName`, pass args individually -------
console.log(person.fullName.call(person1, 'New York', 'USA'));
// John Doe from New York, USA

console.log(person.fullName.call(person2, 'London', 'UK'));
// Jane Smith from London, UK

// ---- apply(): same idea, args as an array --------------------
console.log(person.fullName.apply(person1, ['Paris', 'France']));
// John Doe from Paris, France

// apply shines when the data is already in an array.
const numbers = [5, 6, 2, 3, 7];
console.log(Math.max.apply(null, numbers)); // 7
