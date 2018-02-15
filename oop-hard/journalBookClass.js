const Book = require('./bookClass.js')

class Journal extends Book{
    constructor(title, author, total_page) {
        super(title, author, total_page)
    }
}

module.exports = Journal;