const Book = require('./book')

class Biography extends Book {
    constructor(name, author, total_page, figure) {
        super(name, author, total_page)
        this.figure = figure
    }
}

module.exports = Biography