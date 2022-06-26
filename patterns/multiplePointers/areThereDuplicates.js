// When to use Two-pointer technique: for solving array problems
// - for finding two numbers in an array that satisfy a certain condition
// Can be used in 2 ways:
// 2 pointers go from start, with 1 "exploration" pointer
// 2 pointers come to each other from beginning and end of array
// used with (while) loops

// With Set() approach

function areThereDuplicates(...args) {
    if (!args.length || args.length === 1) return false;

    const valuesSet = new Set();

    args.forEach(arg => {
        valuesSet.add(arg);
    });

    return valuesSet.size !== args.length;
}

function areThereDuplicatesOneLiner() {
    return new Set(arguments).size !== arguments.length;
}


// With Multiple Pointers approach

function areThereDuplicatesMultiplePointers(...args) {
    if (args.length === 0 || args.length === 1) return false;

    // For Multiple Pointers - array need to be sorted
    const a = args.sort((a, b) => {
        const a1 = typeof a, b1 = typeof b;
        return a1 < b1 ? -1 : a1 > b1 ? 1 : a < b ? -1 : a > b ? 1 : 0;
    });

    let start = 0;
    let next = 1;

    while (next < args.length) {
        // because array sorted - we can see if current value will be the same with next value
        if (args[start] === args[next]) {
            return true;
        }

        // if array is sorted - we just need to make 1 step forward for both pointers
        start++;
        next++;
    }

    return false;
}


const a = areThereDuplicatesMultiplePointers(1, 2, 3); // false
const b = areThereDuplicatesMultiplePointers(1, 2, 2); // true
const c = areThereDuplicatesMultiplePointers('a', 'b', 'c', 'a'); // true
const d = areThereDuplicatesMultiplePointers('a'); // false
const e = areThereDuplicatesMultiplePointers(); // false
