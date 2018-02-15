'use strict'
const Journal = require('./journal')

class Biography extends Journal {
    constructor(title,author,pages,figure) {
        super(title,author,pages)
        this.title = title
        this.author = author
        this._totalPages = pages
        this.figure = figure
        this.lend_to = null
        this.is_avail = true
    }
}



module.exports = Biography