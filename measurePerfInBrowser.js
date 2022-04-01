// To measure performance

function numbAcc(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }

    return total;
}

const time1 = performance.now();
numbAcc(100000000);
const time2 = performance.now();

console.log(`Time spent: ${time2 - time1} ms`);
