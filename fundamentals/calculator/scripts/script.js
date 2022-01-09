const screenBig = document.querySelector(".screenBig");
const screenSmall = document.querySelector(".screenSmall");
let numString = "";
let operator = "";
let sum = 0;
let bool = false;

function SetButtons() {
    const buttons = Array.from(document.querySelectorAll("button"));
    for (const button in buttons) {
        if ("0123456789".includes(buttons[button].textContent)) {
            buttons[button].addEventListener("click", function (e) {
                numString += buttons[button].textContent;
                screenBig.textContent = numString;
            });
        }

        else if ("/*-+".includes(buttons[button].textContent)) {
            buttons[button].addEventListener("click", function (e) {
                operator = buttons[button].textContent;
                if (bool) {
                    numString = "";
                    screenSmall.textContent = sum + " " + buttons[button].textContent;
                    screenBig.textContent = "";
                } else {
                    screenSmall.textContent += " " + numString + " " + buttons[button].textContent;
                    screenBig.textContent = "";
                    if (sum === 0) {
                        sum = parseInt(numString);
                        numString = "";
                    } else {
                        Sum(operator);
                        numString = "";
                    }
                }
                bool = false;
            });
        }

        else if ("=".includes(buttons[button].textContent)) {
            buttons[button].addEventListener("click", function (e) {
                screenSmall.textContent += " " + numString + " " + buttons[button].textContent;
                if (sum === 0) {
                    sum = parseInt(numString);
                    numString = "";
                } else {
                    Sum(operator);
                    numString = sum;
                }
                screenBig.textContent = sum;
                bool = true;
                console.log("lol")
            });
        }

        else {
            buttons[button].addEventListener("click", function (e) {
                ResetCalc();
            });
        }

    }
}

function Sum(operator) {
    switch (operator) {
        case "+":
            sum += parseInt(numString);
            break;
        case "/":
            sum /= parseInt(numString);
            break;
        case "*":
            sum *= parseInt(numString);
            break;
        case "-":
            sum -= parseInt(numString);
            break;
    }
}

function ResetCalc() {
    sum = 0;
    screenSmall.textContent = "";
    screenBig.textContent = "0";
    numString = "";
    operator = "";
    bool = false;
}


SetButtons();
