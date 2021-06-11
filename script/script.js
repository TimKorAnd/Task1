'use strict'
document.addEventListener('DOMContentLoaded', () => {
    task1();
}, false);

/**
 * main fn calling other subtasks
 */
function task1() {
    subtask1();
    subtask2();
    subtask3();
    subtask4();

    renderToHTML('Subtask5: fibonacci', 'h2');
    renderToHTML('enter N', 'button');
    let btn = document.querySelector('button');
    let resElem = renderToHTML('result', 'span');
    btn.addEventListener('click', () => {
        resElem.remove();
        resElem = subtask5();
    })


}

/**
 * helper for visualisation results on page in HTML
 * @param result - string param for output
 * @param elem - HTML tag for page
 * @returns {*} elem - HTML tag for page
 */
function renderToHTML(result, elem) {
    let pElem = document.createElement(elem);
    pElem.textContent = result;
    document.getElementById("container").appendChild(pElem);
    return pElem;
}


/**
 * divider
 */
function subtask1() {
    renderToHTML('Subtask1: reminder', 'h2');
    let a = 3;
    let b = 10;
    console.log(`remainder of (${b} % ${a}) is: ${b % a}`);
    renderToHTML(`remainder of (${b} % ${a}) is: ${b % a}`, 'p');
}

/**
 * reducer 10 degree
 */
function subtask2() {
    renderToHTML('Subtask2: 2 reduce to 10 degree', 'h2');
    let result = 2 / 1e10;
    console.log('2 reduce to 10 degree = ' + result);
    renderToHTML('result is: ' + result, 'span');
}

/**
 * random in range 1..100
 */
function subtask3() {
    renderToHTML('Subtask3: random 1..100', 'h2');
    let result = Math.ceil(Math.random() * 100);
    console.log('random integer in 0..100 ranges is: ' + result);
    renderToHTML('random integer in 0..100 ranges is: ' + result, 'span');
}

/**
 * arithmetic mean
 */
function subtask4() {
    renderToHTML('Subtask4: arithmetic mean among [12, 15, 20, 25, 59, 79]', 'h2');
    const testArr = [12, 15, 20, 25, 59, 79];
    let sum = testArr.reduce((prevVal, currVal) => prevVal + currVal);
    let arithmeticMean = sum / testArr.length;
    console.log('arithmetic mean is: ' + arithmeticMean);
    renderToHTML('arithmetic mean is: ' + arithmeticMean, 'span');
}

/**
 * helper for get valid Fib number from user
 * @returns {number}
 */
function getValidFibQuantity() {
    let fibQuantity;
    do {
        fibQuantity = parseInt(prompt('Enter N (integer positive number of fibonacci sequence)'), 10);
    } while (isNaN(fibQuantity) || fibQuantity < 0)
    return fibQuantity;
}

/**
 * calc Fib sequence from zero to entered number
 * @returns {*}
 */
function subtask5() {
    let enteredFibQuantity = getValidFibQuantity();
    let result = '';
    let currFibNum = 0n;
    let nextFibNum = 1n;
    for (let count = 0; count <= enteredFibQuantity; count++) {
        console.log(count + ': ' + currFibNum);
        result += count + ': ' + currFibNum + '; ';
        let temp = nextFibNum;
        nextFibNum += currFibNum;
        currFibNum = temp;
    }
    return renderToHTML(result, 'span');
}
