// main prerequisite - array has to be sorted

// TASK:
// accepts already sorted array of integers

function countAmountOfUniqueValues(arr) {
    const resultSet = new Set();

    arr.forEach(num => resultSet.add(num));

    return resultSet.size;
}


const a = countAmountOfUniqueValues([1, 1, 2, 2, 3]); // 3
const b = countAmountOfUniqueValues([-1, 1, 2, 2, 3]); // 4
const c = countAmountOfUniqueValues([-1, 1, 2, 2, 2, 3, 7, 77, 77]); // 6
const d = countAmountOfUniqueValues([]); // 0


function countAmountOfUniqueValuesTwoPointers(arr) {
    if (!arr.length) return 0;

    let i = 0;

    // starting from the 2-nd item in array
    // 2-nd pointer - is an "exploring" one
    for (let j = 1; j < arr.length; j++) {
        // if they different - we move 1-st index by one
        if (arr[i] !== arr[j]) {
            i++;
            // we are changing the original array, assigning new value
            // thus the 2-nd pointer will be comparing with the updated first pointer
            arr[i] = arr[j];
        }
    }

    // convert index position to length
    return i + 1;
}


const aa = countAmountOfUniqueValuesTwoPointers([1, 1, 2, 2, 3]); // 3
const bb = countAmountOfUniqueValuesTwoPointers([-1, 1, 2, 2, 3]); // 4
const cc = countAmountOfUniqueValuesTwoPointers([-1, 1, 2, 2, 2, 3, 7, 77, 77]); // 6
const dd = countAmountOfUniqueValuesTwoPointers([]); // 0
