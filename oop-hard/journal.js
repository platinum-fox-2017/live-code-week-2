const Book = require('./book')

class Journal extends Book {
    constructor(title, author, total_page) {
        super(title, author, total_page)
    }
}

module.exports = Journal