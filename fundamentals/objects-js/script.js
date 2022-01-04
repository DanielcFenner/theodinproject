let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof (object[key]) === "number") {
            object[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu.title);