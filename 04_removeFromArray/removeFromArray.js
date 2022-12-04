const removeFromArray = function(arr, ...argsVal) {
    let indexOfValue;

    argsVal.forEach(i => {
        indexOfValue = arr.indexOf(i);
        if (indexOfValue != -1) {
            arr.splice(indexOfValue, 1);
        }
    });
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
