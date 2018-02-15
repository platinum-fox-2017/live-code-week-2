'use strict'
const Journal = require('./journal')

class History extends Journal {
    constructor(title,author,pages,century) {
        super(title,author,pages)
        this.title = title
        this.author = author
        this._totalPages = pages
        this.century = century
        this.lend_to = null
        this.is_avail = true
    }
}

module.exports = History