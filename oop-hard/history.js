const Book = require('./book')

class History extends Book {
    constructor(title, author, total_page, century) {
        super(title, author, total_page)
        this.century = century
    }
}

module.exports = History