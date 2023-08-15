const getTheTitles = function(books) {
    let booksArray = [];
    
    for (let key in books) {
        booksArray.push(books[key].title);
    }
    
    return booksArray;
};

// Do not edit below this line
module.exports = getTheTitles;
