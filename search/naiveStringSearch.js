// searching of sub-strings in bigger strings
// involves 2 nested loops:
// 1 - big loop over long string
// 2 - loop per smaller substring

function checkStringIncludesSubstr(str, substr) {
    return str.includes(substr);
}

const a = checkStringIncludesSubstr('abcd', 'bc'); // true
const b = checkStringIncludesSubstr('abcd', 'bcd'); // true
const c = checkStringIncludesSubstr('abcd', 'bcdd'); // false

// Multiple Pointers approach
function getHowOftenSubstrMatch(longStr, shortStr) {
    if (longStr === shortStr) return 1;
    if (!longStr.length || !shortStr.length) return 0; // empty strings check

    let totalMatchCount = 0;

    for (let i = 0; i < longStr.length; i++) {

        for (let j = 0; j < shortStr.length; j++) {
            // arrFromStr[i + j] - we need to compare ongoing substring indexes with ALSO ONGOING outer string indexes
            if (longStr[i + j] !== shortStr[j]) break; // if chars don't match - we jump out of the inner loop

            if (j === shortStr.length - 1) {
                // we increase count only if the last char of substring matches
                // It means we successfully did all the previous checks and didn't jump out from the inner loop before
                totalMatchCount++;
            }
        }


    }

    return totalMatchCount;
}

const aa = getHowOftenSubstrMatch('abcd', 'bc'); // 1
const bb = getHowOftenSubstrMatch('abcd', 'bcd'); // 1
const cc = getHowOftenSubstrMatch('abcd', 'bcdd'); // 0
const dd = getHowOftenSubstrMatch('aabcaad', 'aa'); // 2

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
