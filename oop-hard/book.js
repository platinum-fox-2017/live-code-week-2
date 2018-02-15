class Book {
    constructor(title, author, totalPage){
        this._title = title;
        this._author = author;
        this._totalPage = totalPage;
        this._readingDays = this.estimationReadingDays();
        this._isAvail = true;
        this._peminjam = [];
    }

    get totalPages(){
        return this._totalPage;
    }

    get title(){
        return this._title;
    }

    get isAvail(){
        return this._isAvail;
    }

    set isAvail(isAvail){
        this._isAvail = isAvail;
    }

    set peminjam(reader){   
        this._peminjam.push(reader);
    }

    estimationReadingDays(){
        return Math.ceil(this._totalPage / 100);
    }
}

module.exports = Book;