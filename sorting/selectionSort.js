// TLDR: we select the smallest element and put it at the beginning

// like bubbleSort, but instead of placing large values into sorted position, it places there small values
// we start iteration from beginning to the end,
// we check all values, looking for smaller one, but we don't swap every time
// at the final end, when we know the smallest value for the whole iteration -
// we swap it with the 1-st value in the array: we put the smallest value at the beginning of an array

// better than bubble sort in that way, that we can have a check at the end of the loop and minimize number of swaps

function selectionSort(arr) {
    let duplicatedArray = [...arr];

    for (let i = 0; i < duplicatedArray.length; i++) {
        let smallestValueIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (duplicatedArray[j] < duplicatedArray[smallestValueIndex]) {
                smallestValueIndex = j;
            }
        }

        // after each inner iteration - we check if found minimum value equals to the "new" 1-st value in array, for this iteration
        // if they differ - we swap values, so the smallest - is at the beginning
        // it can be done without below check, because if it's the same - we just replace the same value with itself
        // but we can benefit from check - we save space complexity, not doing swap operation
        if (smallestValueIndex !== i) {
            let tempValue = duplicatedArray[i];
            duplicatedArray[i] = duplicatedArray[smallestValueIndex];
            duplicatedArray[smallestValueIndex] = tempValue;
        }
    }

    return duplicatedArray;
}

const a = selectionSort([1, 4, 2, 4, 56, 7, 22, 11, 3]); // 1, 2, 3, 4, 4, 7, 11, 22, 56

const aa = selectionSort([1, 4, 2, 4, 56, 7, 33, 444, 22, 33, 65]); //  1,  2,  4,  4,  7, 22, 33, 33, 56, 65, 444