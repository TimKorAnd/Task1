'use strict';

/* ******************* Task3_1:
1) Create a function that takes 3 numeric values, each of which is placed in a separate promise.
    Increase each number by 1 and return the result of the promises */

/* params for create promises */
const promiseParams = [
    {
        returnNumber: 1,
        delay: 100
    },
    {
        returnNumber: 2,
        delay: 200
    },
    {
        returnNumber: 3,
        delay: 300
    }];

/**
 * create promise with params
 * @param returnNumber - number promise should return when resolve
 * @param delay - ms
 * @returns {Promise<unknown>}
 */
function createPromise(returnNumber, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(returnNumber), delay)
    });
}

/**
 * create promises from params array
 * @type {Promise<unknown>[]}
 */
const testPromises = promiseParams.map((param) =>
    createPromise(param.returnNumber, param.delay))

/**
 * takes 3 numeric values, each of which is placed in a separate promise
 * @param promises
 * @returns {Promise<number[]>}
 */
function increaseNumbers(...promises) {
    return Promise.all(promises).then(nums => nums.map(item => ++item));
}

//ver.1
let arr;
(async () => {
    arr = await increaseNumbers(...testPromises)
    console.log(arr);
})()
// ver.2
increaseNumbers(...testPromises).then((arr) => console.log(arr))

// ver.3
/**
 * takes 3 numeric values, each of which is placed in a separate promise
 * @param promises Promises
 * @returns {Promise<number[]>} array of number that returned from promises
 */
async function increaseNumbersAsyncAwait(...promises) {
    let promise = Promise.all(promises).then(nums => nums.map(item => ++item));
    return await promise;
}

(async() => console.log(await increaseNumbersAsyncAwait(...testPromises)))();

