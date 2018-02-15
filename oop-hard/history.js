const Book = require('./book.js')

class History extends Book {
    constructor(book){
        super (book)
        this._century = book.century
    }
}

module.exports = History