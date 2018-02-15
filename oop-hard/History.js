const Book = require('./Book');

class History extends Book {
    constructor(title,author,titlePage,readingDays,isAvail,century) {
        super(title,author,titlePage,readingDays,isAvail)
        this._century = century;
    }
}

module.exports = History;