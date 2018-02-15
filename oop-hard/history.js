let Book = require('./book.js')

class HistoryBook extends Book {
  constructor(title, author, totalPages, century) {
    super(title, author, totalPages)
    this.century = century
  }
}

module.exports = HistoryBook
