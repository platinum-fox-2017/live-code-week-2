const Book = require('./book')

class History extends Book {
    constructor(name, author, total_page, century) {
        super(name, author, total_page)
        this.century = century
    }
}

module.exports = History