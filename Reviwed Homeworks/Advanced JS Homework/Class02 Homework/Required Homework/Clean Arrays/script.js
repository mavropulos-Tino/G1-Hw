let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
let outputArray = [];

function onlyStirngs(input) {
    if(typeof test[input] === 'string') {
        outputArray.push(test[input]);
    }
    return;
}
function onlyNums(input) {
    if(typeof test[input] === 'number' && !isNaN(test[input])) {
        outputArray.push(test[input]);
    }
    return;
}
function cleanInvalids(input) {
    if(isNaN(test[input]) || test[input] === undefined || test[input] === null || test[input] === '') {
        return;
    } else {
        outputArray.push(test[input]);
    }
    return;
}

function filterArray() {
    outputArray = [];
    for(let i=0; i<test.length; i++) {
        // onlyStirngs(i);
        // onlyNums(i);
        cleanInvalids(i);
    }

    return outputArray;
}

console.log(filterArray());