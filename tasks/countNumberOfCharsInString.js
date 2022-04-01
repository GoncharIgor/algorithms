// return and Obj with each letter count
// - case-insensitive
// - only alpha-numeric chars

function charsCount(str) {
    let result = {};
    const loverCaseStr = str.toLowerCase();

    // we can use for...of - it creates a loop iterating over iterable objects, including:
    // built-in String, Array, array-like objects, TypedArray, Map, Set
    for (let i = 0; i < loverCaseStr.length; i++) {
        const iteratedChar = loverCaseStr[i];
        const regExpPattern = /[a-z0-9]/;
        // be careful with RegExp performance. Possible way - to use charCodeAt() f()
        // if(iteratedChar.charCodeAt(0) > 47 && iteratedChar.charCodeAt(0) < 58)

        if (regExpPattern.test(iteratedChar)) {
            result[iteratedChar] = (result[iteratedChar] > 0) ? ++result[iteratedChar] : 1;
            // simplified
            // result[iteratedChar] = ++result[iteratedChar] || 1;
        }
    }

    return result;
}

const res = charsCount('HELLO'); // { h: 1, e: 1, l: 2, o: 1 }
