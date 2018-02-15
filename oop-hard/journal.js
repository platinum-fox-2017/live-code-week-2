'use strict'

class Journal {
    constructor(title,author,pages) {
        this.title = title
        this.author = author
        this._totalPages = pages
        this.lend_to = null
        this.is_avail = true
    }

    totalPages() {
        if(this._totalPages > 200) {
            return 'Halaman kebanyakan, males bacanya'
        } else {
            return this._totalPages
        }
    }
}

module.exports = Journal