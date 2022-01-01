const palindromes = function (str) {
    alpha = "abcdefghijklmnopqrstuvwxyz"
    string = "";

    for (let i = 0; i < str.length; i++) {
        if (alpha.includes(str[i].toLowerCase())) {
            string += str[i].toLowerCase();
        }
    }

    reversed_string = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed_string += string[i];
    }

    if (reversed_string === string) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
