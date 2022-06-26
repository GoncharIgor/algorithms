// TASK:
// accepts already sorted array of integers
// f() should find the 1-st pair, where the sum is "0"
// return - array with these 2 numbers, or undefined - if pair doesn't exist


// time complexity - O(N^2)
// space complexity - O(1)
function sumZeroNotPerformant(arr) {
    if (arr[0] > 0) return undefined;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

const res1 = sumZeroNotPerformant([-3, 1, 2, 3]); // [ -3, 3 ]
const res2 = sumZeroNotPerformant([-3, -3, 1, 2]); // undefined
const res3 = sumZeroNotPerformant([0]); // [0 ,0]
const res4 = sumZeroNotPerformant([-4, -3, -2, -1, 0, 1, 2, 5]); // [-2 ,2]


// time complexity - O(N)
// space complexity - O(1)
function sumZeroBetter(arr) {
    if (arr[0] > 0) return undefined; // all positive numbers - we can't have zero as sum
    if (arr[arr.length - 1] < 0) return undefined; // all negative numbers

    // creation of 2 pointers
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        // move right pointer for 1 position to left
        else if (sum > 0) {
            right--;
            // move left pointer for 1 position to right
        } else {
            left++;
        }
    }
}
