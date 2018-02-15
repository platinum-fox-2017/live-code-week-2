const BooksGenre = require('./booksgenre.js');

class Journal extends BooksGenre{
  constructor(title,author,totalPage,readingDays){
    super(title,author,totalPage,readingDays)
  }
}

module.exports = Journal
