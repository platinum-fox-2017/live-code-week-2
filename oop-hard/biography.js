const Book = require('./book');

class Biography extends Book{
    constructor(title,author,page,figure){
        super(title,author,page);
        this._figure = figure;
    }
}

module.exports = Biography;
