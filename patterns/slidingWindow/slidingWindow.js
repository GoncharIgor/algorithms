// good for creating a smaller subset of data in a big data array


// TASK:
// make f() that accepts array of numbers and 2-nd argument - single integer
// array can contain negative numbers
// calculates the max sum of sequential numbers in array, based on 2-nd param
// returns this sum

// time complexity - O(N^2)
function maxSubArraySumNonPerformant(arr, sequentialNumber) {
    if (sequentialNumber > arr.length) return null;

    // if we have only negatives numbers - their sum will be less than "0"
    let max = -Infinity;

    // iterate through the array, but not till the end:
    // we don't need to repeat ourselves within sequentialNumber window length
    for (let i = 0; i < arr.length - sequentialNumber + 1; i++) {
        let temp = 0;

        // iterate through the sequentialNumber window length
        for (let j = 0; j < sequentialNumber; j++) {
            temp += arr[i + j]; // sum all items in array starting from "i" index
        }

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}


const a = maxSubArraySumNonPerformant([1, 2, 5, 2, 8, 1, 5], 2); // 10
const b = maxSubArraySumNonPerformant([1, 2, 5, 2, 8, 1, 5], 4); // 17
const c = maxSubArraySumNonPerformant([4, 2, 1, 6], 1); // 6
const d = maxSubArraySumNonPerformant([], 4); // null


// time complexity - O(N)
function maxSubArraySumRefactor(arr, sequentialNumber) {
    if (sequentialNumber > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    // taking the first sum of array sequence from beginning
    for (let i = 0; i < sequentialNumber; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = sequentialNumber; i < arr.length; i++) {
        tempSum = tempSum - arr[i - sequentialNumber] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// TLDR:
// difference between 2 approaches:
// instead of calculating of window sum each time,
// while moving the window, we each time remove its left corner and add the new right one

// explanation:
// we have an array: [2, 3, 4, 5, 6, 7]
// in comparison to 1-st approach where we were summing and comparing all numbers for each iteration:
// - 1-st iteration: add [2, 3, 4]
// - 2-nd iteration: add [3, 4, 5] - compare it with 1-st iteration sum

// with 2-nd "sliding window" approach:
// we sum the 1-st iteration:
// - 1-st iteration: add [2, 3, 4]
// on the 2-nd iteration, we don't need to make the whole sum:
// we can remove 1-st item in sequence and add the next item
// - [2, 3, 4] minus 1-st "2" and add next "4"
// and then compare it with 1-st iteration sum

const aa = maxSubArraySumRefactor([1, 2, 5, 2, 8, 1, 5], 2); // 10
const bb = maxSubArraySumRefactor([1, 2, 5, 2, 8, 1, 5], 4); // 17
const cc = maxSubArraySumRefactor([4, 2, 1, 6], 1); // 6
const dd = maxSubArraySumRefactor([], 4); // null
