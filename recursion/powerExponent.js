// TASK:
// returns base, multiplied exponentially
// exponentialGrow(2,0) // 1
// exponentialGrow(2,2) // 4
// exponentialGrow(2,4) // 16

function exponentialGrow(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    return base * exponentialGrow(base, exponent - 1);
}

function powerUdemySolution(base, exponent) {
    if (exponent === 0) return 1;

    return base * powerUdemySolution(base, exponent - 1);
}

const a = exponentialGrow(2, 0) // 1
const b = exponentialGrow(2, 2) // 4
const c = exponentialGrow(2, 4) // 16
const d = exponentialGrow(3, 3) // 27
