class Library {
    constructor(name) {
        this._name      = name;
        this._book      = [];
        this._readers   = [];
    }

    get name() {
        return this._name;
    }

    get book() {
        return this._book;
    }

    addBook(book) {
        this._book.push(book);
    }


} 

module.exports = Library;
