const BooksGenre = require('./booksgenre.js');

class History extends BooksGenre{
  constructor(title,author,totalPage,readingDays,century){
    super(title,author,totalPage,readingDays)
      this.century = century
  }
}

module.exports = History
