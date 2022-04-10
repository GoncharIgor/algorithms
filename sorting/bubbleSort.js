// Different sorting types with their animations:
// https://www.toptal.com/developers/sorting-algorithms

// bubble sort - largest values bubbles to the top
// we compare 2 next to each other items and swap them
// with each iteration - last item - 1 being placed on its place forever

function bubbleSort(arr) {
    let arrDuplicated = [...arr];

    // arrDuplicated.length - 1 : we don't need to compare last item with "undefined" (last item + 1: [j + 1])
    for (let i = arrDuplicated.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arrDuplicated[j] > arrDuplicated[j + 1]) {
                // swap ES6 approach, instead of 3-rd "temp" variable
                [arrDuplicated[j], arrDuplicated[j + 1]] = [arrDuplicated[j + 1], arrDuplicated[j]]
            }
        }
    }

    return arrDuplicated;

}

const a = bubbleSort([1, 4, 2, 4, 56, 7, 22, 11, 3]); // 1,  2,  3,  4, 4, 7, 11, 22, 56
console.log(a);
