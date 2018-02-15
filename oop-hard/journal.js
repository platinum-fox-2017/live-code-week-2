const Book = require('./book.js')

class Journal extends Book {
    constructor(book){
        super (book)
    }
}

module.exports = Journal