'use strict'
/* ******************* Task2:

"Promise handlers .then/.catch/.finally are always asynchronous.
Even when a Promise is immediately resolved,
the code on the lines below .then/.catch/.finally will still execute before these handlers."

https://javascript.info/microtask-queue
*/
const microTaskQueue = [] // microtask queue with FIFO principle aka PromiseJobs. Uses as global array
/**
 * remove specified element (emulate promise) from global array emulated microtask queue
 * @param resolvedPromiseName
 */
function removeResolvedPromiseFromQueue(resolvedPromiseName) {
    if (resolvedPromiseName === null) return;
    microTaskQueue.splice(microTaskQueue.indexOf(resolvedPromiseName), 1);
    console.log(`${resolvedPromiseName} - resolved promise (delete it from head of queue)`);
}

/**
 * add specified element (emulate promise) to global array emulated microtask queue
 * @param currentPromiseName
 */
function addCurrentPromiseToQUeue(currentPromiseName) {
    if (currentPromiseName === null) return;
    microTaskQueue.push(currentPromiseName);
    console.log(`${currentPromiseName} created - push a promise to tail of queue. Now queue is:`);
}

/**
 * Log array emulated microtask queue when promise change state, create or resolve.
 * @param resolvedPromiseName
 * @param currentPromiseName
 * @returns {string}
 */
function promiseProgressLog(resolvedPromiseName, currentPromiseName) {
    console.group(`\n${currentPromiseName ? 'Before create ' + currentPromiseName : 'Finally'}, queue is:`)
    console.log(microTaskQueue);
    removeResolvedPromiseFromQueue(resolvedPromiseName); //  Promise.then executing, hence previous promise has resolved
    addCurrentPromiseToQUeue(currentPromiseName);
    console.log(microTaskQueue);
    console.groupEnd();
    return `${currentPromiseName} log: `;
}

Promise // A
    .resolve(promiseProgressLog(null,'PromiseA')) //  1) return PromiseA and push it to PromiseJobs (microtask queue with FIFO principle)
    // A1
    .then(() => console.log(promiseProgressLog('PromiseA', 'thenA1'), 1)) // add a thenA1 (it`s a promise too) to tail of queue
    // A2
    .then(() => console.log(promiseProgressLog('thenA1','thenA2'), 2))
    // A3
    .then(() => console.log(promiseProgressLog('thenA2','thenA3'), 3))
    //
    .finally(() => promiseProgressLog('thenA3', null));


Promise // B
    .resolve(promiseProgressLog(null,'PromiseB')) //  1) return PromiseA and push it to PromiseJobs (microtask queue with FIFO principle)
    // B1
    .then(() => console.log(promiseProgressLog('PromiseB', 'thenB1'), 4)) // add a thenA1 (it`s a promise too) to tail of queue
    // B2
    .then(() => console.log(promiseProgressLog('thenB1','thenB2'), 5))
    // B3
    .then(() => console.log(promiseProgressLog('thenB2','thenB3'), 6))
    //
    .finally(() => promiseProgressLog('thenB3', null));


//Explain result. Tried to modeled microtask queue work via code logs.
