const sumAll = function(a, b) {
    if (isNaN(a) && isNaN(b)) {
        return 'ERROR';
    }
    
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }

    let total = 0;

    [a, b] = a >= b ? [b, a] : [a, b];
    
    for (; a <= b; a++) {
        total += a;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
