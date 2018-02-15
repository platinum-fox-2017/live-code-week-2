'use strict'

class Journal {
    constructor(title,author,pages) {
        this.title = title
        this.author = author
        if(pages > 200) {
            this._totalPages = 'Banyak Halaman, capek ngitungnya'
        } else {
            this._totalPages = pages
            this.readingDays = Math.ceil(this._totalPages/100)
        }
        this.lend_to = null
        this.is_avail = true
    }
}

module.exports = Journal