'use strict'
class Biography {
    constructor(title,author,pages,figure) {
        this.title = title
        this.author = author
        if(pages > 200) {
            this._totalPages = 'Banyak Halaman, capek ngitungnya'
        } else {
            this._totalPages = pages
            this.readingDays = Math.ceil(this._totalPages/100)
        }
        this.figure = figure
    }
}



module.exports = Biography