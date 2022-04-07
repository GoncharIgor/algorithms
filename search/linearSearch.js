// iteration of all elements from beginning 1 by 1
// in such way work some Array methods:
// indexOf()
// includes()
// find()
// findIndex()

// Time complexity: O(N)
function linearSearchFindBoolean(arr, searchableValue) {
    // "for ... of" loop - the synthetic sugar for "for" loop
    for (const val of arr) {
        if (val === searchableValue) return true;
    }

    return false;
}


const a = linearSearchFindBoolean(['aa', 'bb', 'cc'], 'aa'); // true
const b = linearSearchFindBoolean(['aa', 'bb', 'cc'], 'cc'); // true
const c = linearSearchFindBoolean(['aa', 'bb', 'cc'], 'c'); // false
const d = linearSearchFindBoolean(['aa', 'bb', 'cc'], 'd'); // false


function linearSearchFindIndex(arr, searchableValue) {
    // "for ... of" loop - the synthetic sugar for "for" loop
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === searchableValue) return i;
    }

    return -1;
}

const aa = linearSearchFindIndex(['aa', 'bb', 'cc'], 'aa'); // 0
const bb = linearSearchFindIndex(['aa', 'bb', 'cc'], 'cc'); // 2
const cc = linearSearchFindIndex(['aa', 'bb', 'cc'], 'c'); // -1
const dd = linearSearchFindIndex(['aa', 'bb', 'cc'], 'd'); // -1

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
