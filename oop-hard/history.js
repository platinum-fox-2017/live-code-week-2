const Book = require('./book');


class History extends Book{
    constructor(title,author,page,century){
        super(title,author,page);
        this._century = century;
    }
}

module.exports = History;
