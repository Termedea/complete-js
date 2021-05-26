'use strict';

/* #region  S8L93 Scope and scope chain examples */

/* function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = `${firstName}, you are ${age} years old, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true; //var-variables are function-scoped.

      const firstName = 'Stephen'; //no lookup needed.
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);

    //add(2, 3); //only in if-scope for strict mode.
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991); */

/* #endregion */

/* #region  S8L95 Hoisting */

//very unwanted behaviour. Undefined is falsy.
/* if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted.');
}

//lesson: don't use var, declare variables at top of scope, declare functions first and use them after.

var x = 1; //vars become a property on the window object, let and const are not.
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false */
/* #endregion */

/* #region  S8L97 This */
/* console.log('--- global ---');
console.log(this);

console.log('--- regular function ---');
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined! (window unless strict)
};

calcAge(1991);

console.log('--- Arrow function ---');
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //window (surrounding context)
};

calcAgeArrow(1977);

console.log('--- Person Object ---');
class Person {
  calcAge(birthYear) {
    console.log(2037 - birthYear);
    console.log(this); //Object person
  }
}

let person = new Person();
person.calcAge(1986);

const person2 = {
  year: 1991,
  calcAge: function () {
    console.log('--- person2 - calcAge ---');
    console.log(this); // Object calling method.
    console.log(2037 - this.year);
  }
};

person2.calcAge();

const person3 = {
  year: 2017
};

person3.calcAge = person2.calcAge;
person3.calcAge();

const f = person2.calcAge;
f(); // f has now owner, just a regular function = this = undefined. */

/* #endregion */

/* #region  S8E98 Functions vs Arrow functions */
//not a code block - not own scope!! Object literal != own scope.
// const person = {
//   firstName: 'Mikaela',
//   year: 1986,
//   calcAge: function () {
//     console.log(this);
//     console.log(`${this.firstName} is ${2037 - this.year} years old`);

//     //Solution 1
//     // const self = this; //can also be called that. A way to preserve this pre es6.
//     // const isMillenial = function () {
//     //   console.log(this);
//     //   console.log(self);
//     //   if (self.year >= 1981 && self.year <= 1996) {
//     //     console.log("You're a millenial.");
//     //   }
//     //   if (this.year >= 1981 && this.year <= 1996) {
//     //     console.log("You're a millenial.");
//     //   }
//     // };
//     //isMillenial(); //regular function call, inside of a method -> this = undefined.

//     const isMillenial = () => {
//       console.log(this); //no own this, parent scope = function where this = calling object.

//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial(); //arrowfunction does not have own this, but the outer function has the object's this.
//   },
//   greet: () => {
//     console.log(`Hey ${this.firstName}`); //Hey, undefined.
//   }
// };

// person.calcAge();
// person.greet();

//arguments keyword doesn't exist on arrow functions either (just as this)
// const addExpr = function (a, b) {
//   console.log(arguments); //everything sent to the function
// };

// addExpr(1, 2, 3, 4, 5);

// const addArrow = (a, b) => {
//   console.log(arguments); //no access to arguments
// };

// addArrow(1, 2, 3);

// //Object is a code block.
// class Person {
//   firstName = 'Tobias';
//   year = 1983;

//   greet = () => {
//     console.log(`Hey ${this.firstName}`);
//   };
// }

// new Person().greet();
/* #endregion */

/* #region  S8L100 */
let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis'; //oldLastName gets a new piece of memory
console.log(lastName, oldLastName);

const person = {
  name: 'Mikaela',
  age: 35,
  family: ['Alice', 'Bob'] //object
};

console.log('-- friend = person --');
const friend = person;
friend.age = 41; //friend is changable, even though it's a const, because we don't change the value in the stack. The value in the stack is the reference to the object which hasn't changed.
console.log('person', person); //both gets the new age, because the variable names are just references to the same object in the stack.
console.log('friend', friend);

//copying objects with Object.assign
console.log('-- object.assign --');
const friend2 = Object.assign({}, person); //real copy. A new object was created and its properties was copied into the new object. Only works on one level (shallow copy).

friend2.name = 'Tobias';
friend2.family.push('Conrad'); //manipulating object within object - will have the same reference in stack and change everywhere.
friend2.family.push('Mary');
console.log('person', person);
console.log('friend2', friend2);

console.log('-- destructing --');
const friend3 = { ...person };
friend3.age = 33;
friend3.family.push('John');
console.log('person', person);
console.log('friend3', friend3);

///lodash has functions for deep cloning)
/* #endregion */
