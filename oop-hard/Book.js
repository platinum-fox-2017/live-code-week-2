class Book {
    constructor(title,author,totalPage,readingDays, isAvail) {
        this._title         = title;
        this._author        = author;
        this._totalPage     = totalPage;
        this._readingDays   = readingDays;
        this._isAvail       = isAvail;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get totalPage() {
        if(this._totalPage > 200) {
            return 'Banyak halamannya capek ngitungnya';
        } else {
            return this._totalPage;
        }
    }

    get readingDays() {
        return this._readingDays;
    }

    get isAvail() {
        return this._isAvail;
    }
}

module.exports = Book;