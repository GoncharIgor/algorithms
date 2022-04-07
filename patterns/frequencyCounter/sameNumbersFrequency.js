// TASK:
// check if 2 numbers - are like anagrams

function sameNumbersFrequency(num1, num2) {
    const num1Arr = num1.toString().split('');
    const num2Arr = num2.toString().split('');

    if (num1Arr.length !== num2Arr.length) return false;
    if (num1 === num2) return false;

    const arr1Obj = {};

    num1Arr.forEach(num => {
        // if number exists - increment; else - set to "1"
        arr1Obj[num] = ++arr1Obj[num] || 1;
    })

    for (let i = 0; i < num2Arr.length; i++) {
        const numberCharacter = num2Arr[i];

        // if deconstructed Obj from 1-st array doesn't have this letter, OR EQUALS ZERO
        if (!arr1Obj[numberCharacter]) return false;

        // decrease counter for number in Obj by 1
        arr1Obj[numberCharacter] -= 1;
    }

    return true;
}

function sameNumbersFrequencyWith2Objects(num1, num2) {
    const num1Arr = num1.toString().split('');
    const num2Arr = num2.toString().split('');

    if (num1Arr.length !== num2Arr.length) return false;
    if (num1 === num2) return false;

    const arr1Obj = {};
    const arr2Obj = {};

    for (let val of num1Arr) {
        arr1Obj[val] = ++arr1Obj[val] || 1;
    }

    for (let val of num2Arr) {
        arr2Obj[val] = ++arr2Obj[val] || 1;
    }

    for (let key in arr1Obj) {
        // checking keys from 1-st obj with keys from 2-nd object
        // if keys are different, or key in 2-nd obj is missing - return false;
        if (arr1Obj[key] !== arr2Obj[key]) return false;
    }

    return true;
}


const a = sameNumbersFrequencyWith2Objects(222, 222); // false
const b = sameNumbersFrequencyWith2Objects(222, 333); // false
const c = sameNumbersFrequencyWith2Objects(123, 321); // true
const d = sameNumbersFrequencyWith2Objects(222, 22); // false
const e = sameNumbersFrequencyWith2Objects(33, 23); // false
