const Book = require('./book')

class History extends Book{
  constructor(title,author,total_pages,century){
    super(title,author,total_pages)
    this.century = century
  }
}

module.exports = History