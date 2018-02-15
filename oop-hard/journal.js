const Book = require('./book');

class Journal extends Book{
    constructor(title,author,page){
        super(title,author,page);
    }
}

module.exports = Journal;
