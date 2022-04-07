// frequency counter helps to go away from nested loops O(n^2) to 2 sequential loops O(n)
// good for comparison data - arrays, objects, ...

// TASK:
// letters from 1 word can form another word

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    if (str1 === '' && str2 === '') return true;

    const str1Copy = str1.toLowerCase();
    const str2Copy = str2.toLowerCase();

    if (str1Copy === str2Copy) return false;

    const str1Array = str1Copy.split('').sort().join('');
    const str2Array = str2Copy.split('').sort().join('');

    return str1Array === str2Array;
}

const a = isAnagram('aabbs', 'sbbaa'); // true
const b = isAnagram('aabbs', 'bbbaa'); // false
const c = isAnagram('aabbs', 'sbaa'); // false
const d = isAnagram('', ''); // true


function isAnagramFrequencyCounterApproach(str1, str2) {
    if (str1.length !== str2.length) return false;

    const str1Copy = str1.toLowerCase();
    const str2Copy = str2.toLowerCase();

    const deconstructedString = {};

    for(let i = 0; i < str1Copy.length; i++) {
        const letterFrom1stArray = str1Copy[i];
        // if letter exists - increment; else - set to "1"
        deconstructedString[letterFrom1stArray] = ++deconstructedString[letterFrom1stArray] || 1;
    }

    for(let i = 0; i < str2Copy.length; i++) {
        const letterFrom2ndArray = str2Copy[i];
        // if deconstructed Obj from 1-st array doesn't have this letter, or equals zero
        if(!deconstructedString[letterFrom2ndArray]) return false;

        // decrease counter for letter in Obj by 1
        deconstructedString[letterFrom2ndArray] -= 1;
    }

    return true;
}

const aa = isAnagramFrequencyCounterApproach('aabbs', 'sbbaa'); // true
const bb = isAnagramFrequencyCounterApproach('aabbs', 'bbbaa'); // false
const cc = isAnagramFrequencyCounterApproach('aabbs', 'sbaa'); // false
const dd = isAnagramFrequencyCounterApproach('', ''); // true

console.log(aa);
