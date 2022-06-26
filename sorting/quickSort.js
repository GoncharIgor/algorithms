// time complexity average O(n log n)
// space complexity O(log n)

// worst case O(n^2) - for already sorted arrays, if we pick the 1-st item as pivot
// you shouldn't use quick sort for already sorted arrays

// we pick any number (pivot) not necessary in the middle of array
// and move all other smaller numbers to its left, and bigger ones - to right
// thus, at the end we know that our pivot is at the correct spot (index)
// then we do the same on pivot's left or right side part of array

// as merge sort - quick sort works with recursion

// set default values to start and end
// function should return the correct (sorted) index of "start" item
// e.g. [3,2,4,11] - returns index "1" for start item (3)
// be careful - we are mutating the incoming array
function getPivotSortedIndex(arr, start = 0, end = arr.length + 1) {
    // f() that mutates the array
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    const pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            // because we are incrementing swapIndex by 1,
            // it means that the smaller item will be placed on the right side of pivot
            swap(arr, swapIndex, i);
        }
    }

    // final swap - put pivot to its correct final place
    swap(arr, start, swapIndex);

    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    // until we reach the array of 1 item size
    if (left < right) {
        let pivotIndex = getPivotSortedIndex(arr, left, right); // returned pivot index - is cemented (finally positioned)

        // left side
        quickSort(arr, left, pivotIndex - 1);
        // right side
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

const res = quickSort([4, 7, 2, -2, 33, 1]);
