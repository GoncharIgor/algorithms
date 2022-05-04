// Builds up a sort by gradually creating a larger left portion which is always sorted

// time complexity - O(n^2)
// it may be good for almost sorted data, because then we may skip the check from inner loop:
// j >= 0 && duplicatedArr[j] > currentValue
// problem - swapping happens each time, in contrary to selection sort where swapping happens only once per inner loop

// may be good for incoming data, where array is already sorted and you deal only with last incoming not sorted part

function insertionSort(arr) {
    const duplicatedArr = [...arr];

    for (let i = 1; i < duplicatedArr.length; i++) {
        let currentValue = duplicatedArr[i];
        let currentIndexFromInnerLoop; // to get iterator index from inner loop

        for (let j = i - 1; j >= 0 && duplicatedArr[j] > currentValue; j--) {
            // we are moving value 1 index further
            // (at this stage we have it duplicated with current index and further one)
            duplicatedArr[j + 1] = duplicatedArr[j];
            currentIndexFromInnerLoop = j;
        }

        // now we've found the correct spot to insert the currentValue
        // if "currentIndexFromInnerLoop = undefined", it means that we didn't jump into inner loop,
        // because current value already the biggest among selection on the left
        if (currentIndexFromInnerLoop !== undefined) {
            duplicatedArr[currentIndexFromInnerLoop] = currentValue;
        }
    }

    return duplicatedArr;
}

const a = insertionSort([11, 22, 33, 44]);
const b = insertionSort([22, 11, 33, 55, 44]);
const c = insertionSort([22, 11]);
