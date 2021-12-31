const reverseString = function(str) {
    new_string = ""

    for (let i = str.length - 1; i >= 0; i--) {
        new_string += str[i];
    }
    
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
