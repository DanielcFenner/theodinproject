const findTheOldest = function (people) {
    const date = new Date();

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = date.getFullYear();
        }
    }

    let person = people[0];
    for (let i = 1; i < people.length; i++) {
        if ((people[i].yearOfDeath - people[i].yearOfBirth) > (person.yearOfDeath - person.yearOfBirth)) {
            person = people[i];
        }
    }

    return person;

};

// Do not edit below this line
module.exports = findTheOldest;
