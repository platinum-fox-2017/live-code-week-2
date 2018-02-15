class Book {
    constructor(book){
        this._title = book.title
        this._author = book.author
        this._pages = book.pages
        this._readingDays = Math.ceil(book.pages/100)
        this._borrower = []
        this._isAvail = true;
    }
    get totalPages(){
        if (this._pages > 200) {
            return 'Banyak halamannya capek ngitungnya'
        } else {
            return this._pages
        }
    }
}

module.exports = Book