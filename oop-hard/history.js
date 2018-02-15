'use strict'

class History {
    constructor(title,author,pages,century) {
        this.title = title
        this.author = author
        if(pages > 200) {
            this._totalPages = 'Banyak Halaman, capek ngitungnya'
        } else {
            this._totalPages = pages
            this.readingDays = Math.ceil(this._totalPages/100)
        }
        this.century = century
        this.lend_to = null
        this.is_avail = true
    }
}

module.exports = History