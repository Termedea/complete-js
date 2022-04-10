//forbids us to do certain things, provides readable errors for syntax errors.
'use strict';

console.log(typeof null);
console.log(typeof 'null');
console.log(typeof 0);

/* https://love2dev.com/blog/javascript-not-operator/ */
console.log("'1' == 1", '1' == 1); // true
console.log("1 == '1'", 1 == '1'); // true
console.log('0 == false', 0 == false); // true
console.log('0 == null', 0 == null); // false
console.log('0 == undefined', 0 == undefined); // false
console.log('0 == !!null', 0 == !!null); // true, look at Logical NOT operator
console.log('0 == !!undefined', 0 == !!undefined); // true, look at Logical NOT operator
console.log('null == undefined', null == undefined); // true
