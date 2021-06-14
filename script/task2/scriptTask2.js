/* Task2
* 1) Given the string 'aaa @ bbb @ ccc'. Replace all @ with '!'.
2) Write a function that converts a string to an array of words.
3) Given the line 'I-know-javascript!'. Replace all with '!'
4) Given an array ['I', 'know', 'javascript', '!']. Use the join method to convert the array to the string
 'I learning javascript +!'. And make the first letter capitalized.
5) Write a function that takes a string and determines whether it is a palindrome
*
* */

'use strict'

/**
 *  Given the string 'aaa @ bbb @ ccc'. Replace all @ with '!'.
 */
function subtask1(targetStr = '', valueForReplace = '', newSubstr = '') {
    return targetStr.replace(new RegExp(valueForReplace, 'gm'), newSubstr);
}

/**
 * Write a function that converts a string to an array of words.
 */
function subtask2(stringToConvert = '') {
    let preparedStringToConvert = stringToConvert.trim();
    if (preparedStringToConvert === '') {
        return [];
    }
    return preparedStringToConvert
        .replace(/\W$/gm, '')
        .replace(/^\W/gm, '')
        .split(/\W?\s/);
}

/**
 *  Given the line 'I-know-javascript!'. Replace all with '!'
 * @param targetStr - string where replacing does
 * @param valueForReplace - string or Regexp pattern
 * @param newSubstr
 * @returns {string}
 */
function subtask3(targetStr, valueForReplace, newSubstr) {
    return subtask1(...arguments);
}

/**
 * make the first letter capitalized
 * @param str
 * @returns {string}
 */
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Given an array ['I', 'know', 'javascript', '!']. Use the join method to convert the array to the string
 * 'I learning javascript +!'. And make the first letter capitalized
 * @param arrayToConvert array converted to string
 * @param pairsForReplace object with pairs when key - string value of array elem which should to be replaced,
 *                                               value - new string value for replaced elem
 * @returns {string} string converted from array, with capitalized first letter
 */
function subtask4(arrayToConvert = [], pairsForReplace = {}) {
    if (arrayToConvert.length === 0) {
        return '';
    }
    let modifyArray = [...arrayToConvert];
    Object.keys(pairsForReplace).forEach(itemForReplace => {
        modifyArray.forEach((elem, index, array) => {
            if (elem === itemForReplace) {
                modifyArray[index] = pairsForReplace[itemForReplace];
            }
        })
    });
    return capitalizeFirstLetter(modifyArray.join(' '));
}

/**
 *
 * @param str string for reverse
 * @returns {string} reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 *
 * @param str string for palindrome testing
 * @returns {boolean} palingrome test result
 */
function subtask5(str) {
    str = str.replace(/\s/gm, '').toLowerCase();
    return str === reverseString(str);
}

/**
 * main fn calling all other subtasks from Task2
 */
function task2() {
    const testString1 = 'aaa @ bbb @ ccc';
    const testString2 = 'Lorem. Ipsum/ is, simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer' +
        ' took a galley of type and scrambled it to make a type specimen book.';
    const testString3 = 'I-know-javascript!';
    const testArray4 = ['I', 'know', 'javascript', '!'];
    const testPairsForReplace = {'know': 'learning', '!': '+!'};
    const testPalindromePhrase = 'Never odd or even';

    console.log('\nSubtask 1: replace @ to !\n' + subtask1(testString1, '@', '!'));

    console.log('\nSubtask 2: array from string\n');
    console.log(subtask2(testString2));

    console.log('\nSubtask 3: replace all to !\n' + subtask3(testString3, /./, '!'));
    console.log('\nSubtask 4: string to array with partial replace \n' + subtask4(testArray4, testPairsForReplace));
    console.log('\nSubtask 5:\n' + `Is the phrase: "${testPalindromePhrase}" a palindrome? It is ${subtask5(testPalindromePhrase)}!`);
}

task2();
