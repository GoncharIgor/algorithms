function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

const a = sumRange(1); // 1
const b = sumRange(2); // 3
const c = sumRange(3); // 6
