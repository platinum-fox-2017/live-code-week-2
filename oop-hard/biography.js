const Book = require('./book');

class Biography extends Book {
    constructor(title, author, totalPage, figure){
        super(title, author, totalPage);
        this._figure = figure;
    }

    estimationReadingDays(){
        return Math.ceil(this._totalPage / 100)
    }
}

module.exports = Biography;