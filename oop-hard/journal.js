const Book = require('./book')

class Journal extends Book {
    constructor(name, author, total_page) {
        super(name, author, total_page)
    }
}

module.exports = Journal