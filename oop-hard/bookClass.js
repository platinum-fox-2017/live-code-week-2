"use strict"

class Book {
    constructor(title, author, total_page) {
        this.title = title
        this.author = author
        this._totalPages = this.generateTotalPage(total_page)
        this.readingDays = this.generateReadingDays(total_page)
        this.isAvail = true
        this.borrower = ''
    }

    generateReadingDays(page) {
        return Math.ceil(page/100)
    }

    generateTotalPage(page) {
        if(page>200) return "Banyak halamannya capek ngitungnya";
        return page
    }

    addReader(readerName) {
        this.borrower = readerName;
        this.isAvail = false;
    }
}

module.exports = Book;

