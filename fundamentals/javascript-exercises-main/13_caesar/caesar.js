// default modulus doesn't deal with negative numbers, got
// this one from google
function mod(n, m) {
    return ((n % m) + m) % m;
}

const caesar = function (string, num) {
    new_string = "";

    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode -= 65;
            charCode = mod((charCode + num), 26)
            charCode += 65;
            new_string += String.fromCharCode(charCode);
        } else if (charCode >= 97 && charCode <= 122) {
            charCode -= 97;
            charCode = mod((charCode + num), 26)
            charCode += 97;
            new_string += String.fromCharCode(charCode);
        } else {
            new_string += String.fromCharCode(charCode);
        }
    }

    return new_string;
};

// Do not edit below this line
module.exports = caesar;
