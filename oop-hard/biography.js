const BooksGenre = require('./booksgenre.js');

class Biography extends BooksGenre{
  constructor(title,author,totalPage,readingDays,figure){
    super(title,author,totalPage,readingDays)
    this.figure = figure
  }
}

module.exports = Biography
