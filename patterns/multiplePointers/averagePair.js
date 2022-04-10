// TASK:
// given sorted array
// check if 1 or more number pairs match target average


// works with unsorted array
function averagePairExists(arr, targetAverageValue) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) / 2 === targetAverageValue) return true;
        }
    }
    return false;
}


// works only with sorted array
function averagePairExistsMultiplePointersApproach(arr, targetAverageValue) {
    let startPointer = 0;
    let endPointer = arr.length - 1;

    while (startPointer < endPointer) {
        const average = (arr[startPointer] + arr[endPointer]) / 2;

        if (average === targetAverageValue) return true;

        else if (average < targetAverageValue) {
            startPointer++;
        } else {
            endPointer--;
        }
    }

    return false;
}


const a = averagePairExistsMultiplePointersApproach([1, 2, 3], 2.5); // true
const b = averagePairExistsMultiplePointersApproach([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
const c = averagePairExistsMultiplePointersApproach([-1, 0, 3, 4, 5, 6], 4.1); // false
const d = averagePairExistsMultiplePointersApproach([], 4); // false

console.log(a);
console.log(b);
console.log(c);
console.log(d);
