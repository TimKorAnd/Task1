/*
Task 3
1) Given object { js: ['I', 'Angular', 'nodeJS'], php: 'love', css: 'world' }.
Log the sentence "I love nodejs" with it.
2) Given the object {q: null w: null e: null r: null t: null y: null}  make a string from the keys of this object.
(do it in two or more ways)
3 *) Create an object in which the key is the days of the week from Monday to Friday (working days of the week)
 and the value is the number from 1-8 (hours of work), then from this object  create two arrays in the first to transfer
 all keys and in the second all values. And calculate total work hours.
4 *) Write a function that compares two objects*/

/**
 * Log the sentence "I love nodeJS" with given object
 * @param composedObject given object  { js: ['I', 'Angular', 'nodeJS'], php: 'love', css: 'world' }.
 * @returns {string} sentence "I love nodeJS" with given object
 */
function subtask1(composedObject) {
    return [composedObject?.['js']?.[0], composedObject?.['php'], composedObject?.['js']?.[2]].join(' ');
}


/**
 * make a string from the keys of this object
 * @param composedObject
 * @returns {string}
 */
function subtask2(composedObject) {
    return Object.keys(composedObject).join('');
}

/* version 2*/
function subtask2Ver2(composedObject) {
    let resultSentence = '';
    for (const composedObjectKey in composedObject) {
        resultSentence += composedObjectKey;
    }
    return resultSentence;
}

/* version 3*/
function subtask2Ver3(composedObject) {
    return Object.getOwnPropertyNames(composedObject).join('');
}

/**
 * Create an object in which the key is the days of the week from Monday to Friday (working days of the week)
 * and the value is the number from 1-8 (hours of work), then from this object  create two arrays in the first to transfer
 * all keys and in the second all values. And calculate total work hours
 * @param workingHourPerDay
 * @returns {{workingDays: string[], workingHours: number[], totalWeekWorkingHour: number}}
 */
function subtask3(workingHourPerDay = 8) {

    const workingWeek = {
        Monday: workingHourPerDay,
        Tuesday: workingHourPerDay,
        Wednesday: workingHourPerDay,
        Thursday: workingHourPerDay,
        Friday: workingHourPerDay
    };

    const workingHours = Object.values(workingWeek);

    return ({
        workingDays: Object.keys(workingWeek),
        workingHours,
        totalWeekWorkingHour: workingHours.reduce((sum, hour) => sum + hour)
    });
}

function isObject(object) {
    return object != null && typeof object === 'object';
}

/**
 * Recursive function that deep compare two objects
 * @param o1
 * @param o2
 * @returns {boolean} compare result
 */
function isEqual(o1, o2) {
    if (Object.keys(o1).length !== Object.keys(o2).length) {
        return false;
    }
    for (const key in o1) {
        if (o1.hasOwnProperty(key) && o2.hasOwnProperty(key)) {
            if (isObject(o1[key])) {
                if (!isEqual(o1[key], o2[key])) {
                    return false;
                }
            } else {
                if (o1[key] !== o2[key]) {
                    return false;
                }
            }
        }
    }
    return true;
}

/**
 * function that deep compares two objects, delegate task for another fn with semantic relevant name.
 * @param object1
 * @param object2
 * @returns {boolean}
 */
function subtask4(object1, object2) {
    return isEqual(...arguments);
}


function task3() {
    const testObject1 = {js: ['I', 'Angular', 'nodeJS'], php: 'love', css: 'world'};
    console.log('\nSubtask 1: replace specified element:\n' + subtask1(testObject1));

    const testObject2 = {q: null, w: null, e: null, r: null, t: null, y: null};
    console.log('\nSubtask 2: Compose sentence from keys. Version 1:\n' + subtask2(testObject2));
    console.log('\nSubtask 2: Compose sentence from keys. Version 2:\n' + subtask2Ver2(testObject2));
    console.log('\nSubtask 2: Compose sentence from keys. Version 3:\n' + subtask2Ver3(testObject2));
    console.log('\nSubtask 3: Week working days:\n');
    console.log(subtask3());;

    const testCompareObject1 = subtask3(7); // create different objects
    const testCompareObject2 = subtask3(4); // create different objects
    console.log('\nSubtask 4: Is objects are equals? :\n' + subtask4(testCompareObject1, testCompareObject2));

}

task3();
