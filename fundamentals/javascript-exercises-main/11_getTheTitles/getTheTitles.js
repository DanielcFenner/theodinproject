const getTheTitles = function (books) {
    let new_array = [];
    for (let i = 0; i < books.length; i++) {
        new_array.push(books[i].title);
    }
    return new_array;
};

// Do not edit below this line
module.exports = getTheTitles;
