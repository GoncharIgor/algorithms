// complexity - O(n^2) - nested loops
function isSecondArrayIsFirstMultipliedByTwo(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let copyOfSecondArray = [...arr2];

    for (let i = 0; i < arr1.length; i++) {
        // indexOf - hidden nested iteration over the 2-nd array
        const indexOfMultipliedValueInSecondArray = arr2.indexOf(arr1[i] ** 2); // Exponentiation

        // we didn't find squared value in second array
        if (indexOfMultipliedValueInSecondArray === -1) return false;

        // remove checked value from 2-nd array
        copyOfSecondArray.splice(indexOfMultipliedValueInSecondArray, 1);
    }

    return true;
}

const check = isSecondArrayIsFirstMultipliedByTwo([1, 2, 3], [1, 4, 9]); // true
const differentOrder = isSecondArrayIsFirstMultipliedByTwo([1, 2, 3], [9, 1, 4]); // true
const incorrectAmount = isSecondArrayIsFirstMultipliedByTwo([1, 2, 3], [9, 1]); // false
const duplicatedIncorrectValues = isSecondArrayIsFirstMultipliedByTwo([1, 2, 3], [9, 1, 9]); // false

// frequency counter - use object for keys count
// access data in object is faster, than to make array iterations
// complexity - O(n) - 3 loops on the same level
function frequencyCounterUpdatedApproach(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
    }

    for (let key in frequencyCounter1) {
        // check if squared KEY from arr1 exists in arr2
        if (!(key ** 2 in frequencyCounter2)) return false;

        // check if squared key VALUE (how often appears) from arr1 equals VALUE (how often appears) in arr2 for this key
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }

    return true;
}

const check2 = frequencyCounterUpdatedApproach([1, 2, 3], [1, 4, 9]); // true
const differentOrder2 = frequencyCounterUpdatedApproach([1, 2, 3], [9, 1, 4]); // true
const incorrectAmount2 = frequencyCounterUpdatedApproach([1, 2, 3], [9, 1]); // false
const duplicatedIncorrectValues2 = frequencyCounterUpdatedApproach([1, 2, 3], [9, 1, 9]); // false
