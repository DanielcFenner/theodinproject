const fibonacci = function (num) {
    if (typeof (num) === "string") {
        num = parseInt(num);
    }

    if (num < 0) {
        return "OOPS";
    } else if (num === 1 || num === 2) {
        return 1;
    }

    let fibo = [1, 1];

    for (let i = 2; i < num; i++) {
        let sum = fibo[i - 2] + fibo[i - 1];
        fibo.push(sum);
    }

    return fibo[num - 1];


};

// Do not edit below this line
module.exports = fibonacci;
