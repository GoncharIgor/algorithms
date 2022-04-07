// methods to keep in mind for nit mutation of data:
// arrays: slice, concat, spread operator
// strings: slice, substr, substring
// objects: spread operator, Object.assign

function collectOddValues(arr) {
    let newArr = []; // will be initialized as an empty array every time the f() is called recursively

    if(arr.length === 0) return newArr;

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1))); // arr minus 1-st value

    return newArr;
}

const res = collectOddValues([1,2,3,4,5,6,7]); // [ 1, 3, 5, 7 ]

// how it works:
// newArr = newArr.concat(collectOddValues(arr.slice(1)));
// 1-st call:
// newArr => [1]
// [1].concat(collectOddValues([2,3,4,5,6,7]));
// 2-nd call:
// [].concat...
