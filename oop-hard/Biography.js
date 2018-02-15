const Book = require('./Book');

class Biography extends Book {
    constructor(title,author,titlePage,readingDays,isAvail,figure) {
        super(title,author,titlePage,readingDays,isAvail)
        this._figure = figure;
    }
}

module.exports = Biography;