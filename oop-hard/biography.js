const Book = require('./book.js')

class Biography extends Book {
    constructor(book){
        super (book)
        this._figure = book.figure
    }
}

module.exports = Biography