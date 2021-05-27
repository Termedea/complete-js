'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(
      `Order received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  }
};

/* #region  S9L104 - Array destructuring */
// //destructuring - save array values to new variables/constants. Follows order of element.
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary]; //switching place of variables.
// console.log(main, secondary);

// //recieve two return-values from a function
// let [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2, 4, [5, 7]];
// const [two, , [five, seven]] = nested;
// console.log(two, five, seven);

// //default values. Existing values will be assigned, undefined will be default value.
// const [p = 1, q = 1, r = 1] = [8, 9];

// console.log(p, q, r);

/* #endregion */

/* #region  S9L104 - Object destructuring */
//destructuring object with known property names and the same name of variables.
// let { name, openingHours, categories } = restaurant;
// console.log(name, categories, openingHours);

// //new variable names

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags
// } = restaurant;
// console.log(restaurantName, tags, hours);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 222;
// const obj = {
//     a: 12,
//     b: 7,
//     c: 14
// };

// //can't use {a,b} = obj. Can't start with curly brackets..

// ({ a, b } = obj); //whole statement must be wrapped in parentheses.
// console.log(a, b);

// //nested object destructing
// const {
//     fri: { open, close }
// } = openingHours;
// console.log(open, close);

// //passing in object as options. Order of arguments doesn't matter.
// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 0
// });

/* #endregion */

/* #region  S9L105  - Spread (extract values into vars) */
// //spread operators works on all iterables (arrays, maps, strings, sets).
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// const nestedArray = [1, 2, arr];
// const goodNewArray = [1, 2, ...arr]; //takes all individual values of the array and spreads them after the new ones.

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; //new array from scratch, where the old one's values are included.
// console.log(newMenu);

// //shallow copies of arrays
// const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy of array, similar to Object.assign();

// //join arrays together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Mikaela';
// const letters = [...str, ' ', 's'];
// console.log(letters);
// //console.log(`${...letters}`); //Will not work, does not accept comma separated variables
// console.log([...str]);

// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1: "),
//   // prompt('Ingredient 2:'),
//   // prompt('Ingredient 3:')
// ];

// restaurant.orderPasta(...ingredients);

// //Objects. Spread works now, even though it's not an iterable.
// const newRestaurant = { ...restaurant };

// newRestaurant.founder = 'Guiseppe Paolo';
// newRestaurant.foundedIn = '1991';
// console.log(newRestaurant);

// //instead of Object.assign
// const restaurantCopy = { ...restaurant }; //all new object, different places in memory.
// restaurantCopy.name = 'Ristorante Roma';
// console.log(
//   `New restaurant: ${restaurantCopy.name}, Old restaurant ${restaurant.name}`
// );

/* #endregion */

/* #region  S9L106 - Rest (pack values arrays/objects) */
// //Rest is to pack element into an array. Same syntax

// //1) Destructuring

// const arr = [1, 2, ...[1, 3]]; //spread because right side of =.
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7]; //rest because on the left side of =
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu
// ]; //other food does not include any skipped elements. Rest pattern must always be the last.
// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// //2) Functions

// //rest parameters
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// console.log(add(2, 3));
// console.log(add(2, 3, 45, 2));
// console.log(add(2, 3, 45, 2, 123, 125, 12));
// const x = [23, 5, 7, 8];

// console.log(add(...x));

// restaurant.orderPizza('Mushroom', 'Onion', 'Olives', 'Spinage');
/* #endregion */

/* #region  S9L107 - || and &&*/
// //operators can use any data type, return any data type, short circuiting.
// //if the first value is truthy, return it, otherwise take the other.
// //first truthy value is returned

// console.log('---- OR ----');
// //returns first truthy value, or last if all are false - set default values
// console.log('3' || 'Mikaela'); //stops if true.
// console.log(undefined || 'Mikaela');
// console.log(true || 0);
// console.log(undefined || null); //returns null - both is falsy, returns the last. No short circuiting
// console.log(undefined || 0 || '' || 'Hello' || 23); //returns Hello, because it's the first truthy value.

// let someVar;
// let test = someVar || 'Value if null with || operator';
// let test2 = someVar
//   ? someVar
//   : 'Value if null with conditional (ternary) operator';
// console.log(test);
// console.log(test2);

// //?? nullish operator
// restaurant.numGuests = 0; //falsy but not nullish

// const guests = restaurant.numGuests ?? 10; //ES2020 - nullish values instead of falsy values
// console.log(guests);

// restaurant.numGuests = 0; //falsy, so if we wanted the value 0, we can't...

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// //1. restaurant.numGuests,
// //2. second value (20) will be the first truthy value
// const guests2 = restaurant.numGuests || 20;
// console.log(guests2);

// console.log('---- AND ----');
// //returns first falsy value or last if all is true. Used to do something if function/var exists.
// console.log(0 && 'Mikaela'); //stops if false.
// console.log(1 && 3 && null && 'Mikaela'); //if any is false, && will evaluate to false, no need to continue checking.

// //with if-statement
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'cheese'); //if restaurant is null short circuit and don't continue, else call function.
/* #endregion */
