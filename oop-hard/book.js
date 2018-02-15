class Book{
    constructor(title,author,page){
        this._title = title;
        this._author = author;
        this._totalPages = page;
        this._readingDays = Math.ceil(this._totalPages/100);
        this._peminjam = "";
        this._isAvail = true;
    }

    get title(){
        return this._title;
    }

    get totalPages (){
        if(this._totalPages>200)
            return "Banyak halamannya capek ngitungnya"
        else {
            return this._totalPages;
        }
    }


}

module.exports = Book;
