const Book = require('./book');

class History extends Book {
    constructor(title, author, totalPage, century){
        super(title, author, totalPage);
        this._century = century;
    }

    estimationReadingDays(){
        return Math.ceil(this._totalPage / 100)
    }
}

module.exports = History;