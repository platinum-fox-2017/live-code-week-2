const Book = require('./Book');

class Journal extends Book {
    constructor(title,author,totalPage,readingDays,isAvail) {
        super(title,author,totalPage,readingDays,isAvail)
    }
}

module.exports = Journal;