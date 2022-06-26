// recursion is good for:
// - working with tree structures
// - the same operation with slowly increasing/decreasing value

function countdownWithRecursion(num) {
    if (num <= 0) {
        console.log('Finished!');
        return;
    }

    console.log(num);
    num--;
    countdownWithRecursion(num--);
}


function countdownWithIteration(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log('Finished!');
}

countdownWithIteration(5);
