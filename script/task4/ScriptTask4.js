/*
Task 4
Working with Array:

1) Given 2 arrays: ['a', 'b', 'c'] and [1, 2, 3]. Combine them into one. Add elements 111 to it at the end
2) Given an array [1, 2, 3]. Make an array of it [3, 2, 1] .
3) Given an array ['learn', 'css', 'nodejs']. Use shift, pop to display the first and last element. Create new
array which have two elements ['learn', 'nodejs'].
4 *) Given the 2nd array: [1,2,3,4,5,6] and [5,6,7,8,9]. Find all unique elements.
5 *) Given object {js: 'test', jq: 'hello', css: 'world'}. Get an array of its keys, and an array of its value,*/
/**
 *  Combine two arrays, and last element
 * @param arr1
 * @param arr2
 * @param lastElem
 * @returns {*[]}
 */
function subtask1(arr1 = [], arr2 = [], lastElem) {
    return [...arr1, ...arr2, lastElem];
}

/**
 * Advanced array and single elem concatenate, like Array.prototype.flat() with depth = 1;
 * @param args
 * @returns {*}
 */
function multiConcat(...args) {
    return args.reduce((resArr, currElem) => {
        if (Array.isArray(currElem)) {
            return [...resArr, ...currElem];
        }
        return [...resArr, currElem];
    }, []);
}

function flatArray(...args) {
    return args.flat(Infinity);
}

/**
 * 2) Given an array [1, 2, 3]. Make an array of it [3, 2, 1] .
 */
/**
 *
 * @param arr source array for create reversed new one
 * @returns {*} new reversed array
 */
function subtask2(arr) {
    return [...arr].reverse();
}

/**
 * Use shift, pop to display the first and last element. Create new
 * array which have two elements ['learn', 'nodejs']
 * @param arr Given an array ['learn', 'css', 'nodejs']
 * @returns {*[]} new array from passed one, by shift & pop
 */
function subtask3(arr = []) {
    if (arr.length === 0) {
        return [];
    }
    return [[...arr].shift(), [...arr].pop()];
}

/**
 * Subtask 4
 * Given the 2nd array: [1,2,3,4,5,6] and [5,6,7,8,9]. Find all unique element
 * @param args mixed: arrays & single elems
 * @returns {*[]} array with unique elems
 */
function getUniqueElementsArray(...args) {
    return Array.from(new Set(args.flat(Infinity)));
}

/*) */
/**
 * Subtask 5
 * Given object {js: 'test', jq: 'hello', css: 'world'}. Get an array of its keys, and an array of its values,
 * @param obj source object
 * @returns  {{keys: string[], values: unknown[]}} object of arrays of keys & values
 */
function getKeysAndValuesArrays(obj) {
    return {keys: Object.keys(obj), values: Object.values(obj)};
}

function task4() {
    const testTask1Arr1 = ['a', 'b', 'c'];
    const testTask1Arr2 = [1, 2, 3];
    const testLastElement = 111;
    const testFirstElement = 'first';
    console.log('\nSubtask 1: Combine two arrays, add last element:\n')
    console.log(subtask1(testTask1Arr1, testTask1Arr2, testLastElement));
    console.log(multiConcat(testFirstElement, testTask1Arr1, testTask1Arr2, testLastElement, testTask1Arr2));
    console.log(flatArray(testFirstElement, [...testTask1Arr1, [testTask1Arr2, testTask1Arr1]], testTask1Arr2, testLastElement, testTask1Arr2));

    const testTask2Arr = [1, 2, 3];
    console.log('\nSubtask 2: Get new reversed array from passed one\n')
    console.log(subtask2(testTask2Arr));

    const testTask3Arr = ['learn', 'css', 'nodejs'];
    console.log('\nSubtask 3: Get & display new array from passed one, by shift & pop\n')
    console.log(subtask3(testTask3Arr));

    const testTask4Arr1 = [1, 2, 3, 4, 5, 6];
    const testTask4Arr2 = [5, 6, 7, 8, 9];
    console.log('\nSubtask 4: Get arrays from unique elements of another arrays:\n')
    console.log(getUniqueElementsArray(testTask4Arr1, testTask4Arr2));

    const testTask5Obj = {js: 'test', jq: 'hello', css: 'world'};
    console.log('\nSubtask 5: Get an array of its keys, and an array of its values:\n')
    console.log(getKeysAndValuesArrays(testTask5Obj));
}

task4();
