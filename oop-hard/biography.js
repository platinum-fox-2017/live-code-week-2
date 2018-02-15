let Book = require('./book.js')

class Biography extends Book {
  constructor(title, author, totalPages, figure) {
    super(title, author, totalPages)
    this.figure = figure
  }
}

module.exports = Biography;
