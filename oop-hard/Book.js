class Book {
    constructor(title,author,totalPage,readingDays, isAvail,borrowers) {
        this._title         = title;
        this._author        = author;
        this._totalPage     = totalPage;
        this._readingDays   = readingDays;
        this._isAvail       = isAvail;
        this._borrowers     = borrowers;
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
    
    get borrowers() {
        return this._borrowers;
    }

    updateisAvail(newStatus) {
        this._isAvail = newStatus;
    }

    updateBorrowers(readers) {
        this._borrowers = readers;
    }
}

module.exports = Book;