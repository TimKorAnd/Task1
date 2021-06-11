'use strict'
document.addEventListener('DOMContentLoaded', () => {
    task1();
}, false);

function task1() {
    subtask1();
    subtask5();

}

function renderToHTML(result, elem) {
    let pElem = document.createElement(elem);
    pElem.textContent = result;
    //document.body.appendChild(pElem);
    document.getElementById("container").appendChild(pElem);
}



function subtask1() {
    renderToHTML('Subtask1: reminder', 'p');
    let a = 3;
    let b = 10;
    console.log(`remainder of (${b} % ${a}) is: ${b % a}`);
    renderToHTML(`remainder of (${b} % ${a}) is: ${b % a}`, 'p');
}

function getValidFibQuantity() {
    let fibQuantity;
    do {
        fibQuantity = parseInt(prompt('Enter integer positive number of fibonacci sequence'), 10);
    } while (isNaN(fibQuantity) || fibQuantity < 0)
    return fibQuantity;
}

function subtask5() {
    renderToHTML('Subtask5: fibonacci', 'p');
    let enteredFibQuantity = getValidFibQuantity();

    let currFibNum = 0n;
    let nextFibNum = 1n;
    for (let count = 0; count <= enteredFibQuantity; count++) {
        console.log(count + ': ' + currFibNum);
        renderToHTML(count + ': ' + currFibNum, 'span');
        let temp = nextFibNum;
        nextFibNum += currFibNum;
        currFibNum = temp;

    }
}
