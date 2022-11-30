const repeatString = function(string, num) {
    return num > 0 ? string + repeatString(string, --num)
        : num < 0 ? 'ERROR'
        : '';
};

// Do not edit below this line
module.exports = repeatString;
