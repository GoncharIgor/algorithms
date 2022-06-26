// time complexity: O(n log n)
// space complexity: O(n)

// fact: array of 0 or 1 items - is always sorted
// merge sort: decompose an array into smaller arrays of 0 and 1 elements, then build it up again as 1 array

// input arrays are already SORTED
function mergeSortedArraysHelper(arr1, arr2) {
    let res = [];

    let arr1CounterIndex = 0;
    let arr2CounterIndex = 0;

    while (arr1CounterIndex < arr1.length && arr2CounterIndex < arr2.length) {
        // <= - covers the edge case of equal values from both arrays
        if (arr1[arr1CounterIndex] <= arr2[arr2CounterIndex]) {
            res.push(arr1[arr1CounterIndex]);
            arr1CounterIndex++;
        } else {
            res.push(arr2[arr2CounterIndex]);
            arr2CounterIndex++;
        }
    }

    // if 1 of the arrays is bigger than the 2-nd, then we need to add the rest of the 1-st array to the end of result

    while (arr1CounterIndex < arr1.length) {
        res.push(arr1[arr1CounterIndex]);
        arr1CounterIndex++;
    }

    while (arr2CounterIndex < arr2.length) {
        res.push(arr2[arr2CounterIndex]);
        arr2CounterIndex++;
    }

    return res;
}

const arr1 = [1, 3, 7, 9];
const arr2 = [2, 3, 4, 11, 15, 17];

const res = mergeSortedArraysHelper(arr1, arr2);

// recursion inside
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    // we recursively split array in the middle and pass it

    const middlePoint = Math.floor(arr.length / 2);

    const leftSide = mergeSort(arr.slice(0 , middlePoint));
    const rightSide = mergeSort(arr.slice(middlePoint));

    return mergeSortedArraysHelper(leftSide, rightSide);
}
