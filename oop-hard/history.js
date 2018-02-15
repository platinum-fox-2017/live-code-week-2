const Book = require('./book')

class History extends Book{
    constructor(title,author,totalPage,century){
        super(title,author,totalPage)
        this.century = century
    }
}

module.exports = History