/**
 * Prototype Inheritance — Object.create
 * -------------------------------------------------------------
 * Every object has a hidden link to another object called its prototype.
 * When you read a property, JS checks the object itself first, then walks
 * up the prototype chain until it finds the property or hits null.
 *
 * `Object.create(proto)` makes a brand new object whose prototype is
 * `proto`. Methods on the prototype are SHARED, not copied — so changing
 * the child's own data does not duplicate the method.
 *
 * Run: node Javascript/Prototype_Inheritance/example1.js
 */

const user = {
  name: 'Manish',
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// `admin`'s prototype is `user`.
const admin = Object.create(user);

// `sayHello` is not an own property of admin; it is found on the prototype.
admin.sayHello(); // Hello, my name is Manish

// Giving admin its OWN `name` shadows the inherited one.
admin.name = 'Admin';
admin.sayHello(); // Hello, my name is Admin

// Proof of how lookup works:
console.log(admin.hasOwnProperty('name')); // true  (own property set above)
console.log(admin.hasOwnProperty('sayHello')); // false (lives on prototype)
console.log(Object.getPrototypeOf(admin) === user); // true
