// eliminates half of the remaining elements at the time
// works only on SORTED arrays
// pattern that it uses - Divide and Conquer
// (but it also uses multiple pointers, that also require SORTED array)


// accepts SORTED array
function binarySearch(arr, searchedValue) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    while (arr[middleIndex] !== searchedValue && startIndex <= endIndex) {

        if (searchedValue < arr[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }

        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }

    return arr[middleIndex] === searchedValue ? middleIndex : -1;
}


const a = binarySearch([1, 2, 3, 4, 5, 6, 7], 1); // 0
const b = binarySearch([1,2,3,4,5, 6,7], 7); // 6
const c = binarySearch([1,2,3,4,5, 6,7], 4); // 3
const d = binarySearch([1,2,3,4,5, 6,7], 8); // -1
const e = binarySearch([1,2,3,4,5, 6,7], -2); // -1

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
