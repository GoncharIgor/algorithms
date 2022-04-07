// definition - not sumRange, but multiplyRange:
// 4! = 4 * 3 * 2 * 1

function factorial(num) {
    if (num === 0) return 1;
    if (num === 1) return 1;

    return num * factorial(num - 1);
}

const a = factorial(1); // 1
const b = factorial(2); // 2
const c = factorial(3); // 6
const d = factorial(4); // 24


function factorialWithIteration(num) {
    let total = 1;

    for (let i = num; i > 1; i--) { // i > 1 - because we already start with "let total = 1;"
        total *= i;
    }

    return total;
}


const aa = factorialWithIteration(1); // 1
const bb = factorialWithIteration(2); // 2
const cc = factorialWithIteration(3); // 6
const dd = factorialWithIteration(4); // 24
