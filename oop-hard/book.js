class Book {
    constructor(title, author, total_page, reading_days, isAvail, borrower) {
        this.title = title
        this.author = author
        this.total_page = total_page
        this.reading_days = reading_days || null
        this.isAvail = isAvail || true
        this.borrower = borrower || null
    }
}

module.exports = Book