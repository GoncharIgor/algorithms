function countdown(num) {
    if (num <= 0) {
        console.log('Finished!');
        return;
    }

    console.log(num);
    num--;
    countdown(num--);
}


function countdownWithIteration(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log('Finished!');
}

countdownWithIteration(5);
