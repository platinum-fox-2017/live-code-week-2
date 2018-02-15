const Book = require('./book');

class Journal extends Book {
    constructor(title, author, totalPage){
        super(title, author, totalPage);
    }

    estimationReadingDays(){
        return Math.ceil(this._totalPage / 100)
    }
}

module.exports = Journal;