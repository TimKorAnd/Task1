'use strict';

/* ******************* Task3_3:
3*) Rewrite as Promise.all()
const foo = new Promise((resolve, reject) => {
    resolve('Promise1');
});
const bar = new Promise((resolve, reject) => {
    resolve('Promise2');
});
console.log('Res', foo, bar); */

const foo = new Promise((resolve, reject) => {
    resolve('Promise1');
});
const bar = new Promise((resolve, reject) => {
    resolve('Promise2');
});
const res = Promise.all([foo, bar]).then((results) => {
    console.log(`Res ${results[0]} ${results[1]}`);
    return results;
});

(async () => {
    console.log(['Res', ...await res].join(' '))
})()

console.log('Res', foo, bar);
