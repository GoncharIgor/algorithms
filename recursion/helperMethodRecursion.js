// key idea - helper f() works with outer scoped variable
// outer, non recursive f(), calls recursive f() inside

function collectOddValues(arr) {
    let resultOuterArray = [];

    function helper(helperInput) {
        if (helperInput.length === 0) return;

        if (helperInput[0] % 2 !== 0) {
            resultOuterArray.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return resultOuterArray;
}

const res = collectOddValues([1,2,3,4,5,6,7]); // [ 1, 3, 5, 7 ]
