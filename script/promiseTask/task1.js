'use strict';

/* ******************* Task1:

//Base data: */
const users = [{gender: 'male', age: 22,}, {gender: 'female', age: 20,}, {gender: 'male', age: 32,}];
// 1) Found the average age.
const avgAge = (users.reduce((sumAge, item) => sumAge + item.age, 0) / users.length)
    .toFixed(2);
console.log(`Average age is ${avgAge}`);

/* 2) Fix this code

const object = {
  a: 'somestring',
  b: 42,
  c: false,
  k: 11,
};
const numbers = [];

Object.keys(object).forEch((item) => {
    if (typeof object[item] === Number) {
    numbers.pipe(object[item]);
 }
});
 */
const object = {
    a: 'somestring',
    b: 42,
    c: false,
    k: 11,
};
const numbers = [];

Object.keys(object).map((item) => {
    if (typeof object[item] === 'number') {
        numbers.push(object[item]);
    }
});

console.log(`Array [${numbers.join(', ')}]`); // expected output: Array [42, 11]





