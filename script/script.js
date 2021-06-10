'use strict'
document.addEventListener('DOMContentLoaded', () => {
    task1();
}, false);

function task1() {
    subtask5();

}

function renderToHTML(result) {
    let pElem = document.createElement('p');
    pElem.textContent = result;
    //document.body.appendChild(pElem);
    document.getElementById("container").appendChild(pElem);
}



function subtask1() {
    let a = 3;
    let b = 10;
    console.log(`remainder of (${b} % ${a}) is: ${b % a}`);
    renderToHTML(`remainder of (${b} % ${a}) is: ${b % a}`);
}

function getValidFibQuantity() {
    let fibQuantity;
    do {
        fibQuantity = parseInt(prompt('Enter integer positive number of fibonacci sequence'), 10);
    } while (isNaN(fibQuantity) || fibQuantity < 0)
    return fibQuantity;
}

function subtask5() {
    let enteredFibQuantity = getValidFibQuantity();
    const fibSequenceStartNumbers = [0, 1];
    const startNumbersQuantity = fibSequenceStartNumbers.length;
    let initialQuantity = enteredFibQuantity < startNumbersQuantity ? enteredFibQuantity : startNumbersQuantity;
    let count = 0;
    for (; count < initialQuantity; count++) {
        console.log(count + ': ' + fibSequenceStartNumbers[count]);
    }

    let prevFibNum = 0n;
    let currFibNum = 1n;
    for (; count <= enteredFibQuantity; count++) {
        let temp = currFibNum;
        currFibNum += prevFibNum;
        prevFibNum = temp;
        console.log(count + ': ' + currFibNum);
    }

   /* for (let count = 0; count <= fibQuantity; count++) {
        if (currFibNum < 2) { // for first two positive fib nums
            console.log(count + ': ' + prevFibNum);
            count++;
        }
        let temp = currFibNum;
        currFibNum += prevFibNum;
        prevFibNum = temp;
        if (count <= fibQuantity) { // for case when fibQuantity < 3
            console.log(count + ': ' + currFibNum);
        }
    }*/

}
