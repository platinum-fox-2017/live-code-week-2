let Book = require('./book.js')

class Journal extends Book {
  constructor(title, author, totalPages) {
    super(title, author, totalPages)
  }
}

module.exports = Journal;
