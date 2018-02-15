class Book {
    constructor(title, author, total_page) {
        this.title = title
        this.author = author
        this.total_page = total_page
        this.reading_days = Math.round(total_page / 100)
        this.rent = ''
        this.isAvail = true
    }

    totalPages() {
        if (this.total_page > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this.total_page
        }
    }
}

module.exports = Book