// TASK:
// find index of element, or return -1 if not found

// Linear search - to iterate through the array from beginning
// Time complexity: O(N)
function findIndex(arr, item) {
    return arr.indexOf(item);
}

function findIndexLoop(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

// but Binary search - is the divide & conquer approach:
// 1. we sort array
// 2. check if middle value bigger or lover than a searched value
// 3. based on step 2 - go to left or right part of array

// array has to be sorted
// Time complexity: Log(N)
function findIndexBinary(arr, itemValue) {
    let min = 0;
    let max = arr.length - 1;

    while (min < max) {
        let middleIndex = Math.floor((min + max) / 2); // (Math.floor(5.95)); => 5
        const currentElement = arr[middleIndex];

        if (arr[middleIndex] < itemValue) {
            min = middleIndex + 1;
        } else if (arr[middleIndex] > itemValue) {
            max = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}
