const Book = require('./book');

class Journal extends Book {
    constructor(title, author, totalPage){
        super(title, author, totalPage);
    }

}

module.exports = Journal;