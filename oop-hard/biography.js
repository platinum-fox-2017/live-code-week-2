const Book = require('./book');

class Biography extends Book {
    constructor(title, author, totalPage, figure){
        super(title, author, totalPage);
        this._figure = figure;
    }
    
}

module.exports = Biography;