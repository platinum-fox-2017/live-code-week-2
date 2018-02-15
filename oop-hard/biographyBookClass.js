"use strict"
const Book = require('./bookClass.js')

class Biography extends Book{
    constructor(title, author, total_page, figure) {
        super(title, author, total_page)
        this.figure = figure
    }
}

module.exports = Biography