const Book = require('./book');

class History extends Book {
  constructor() {
    super()
    this.title = 'Awal Peradaban Callback'
    this.author = 'Bang Togar'
    this._totalPages = 127
    this.readingDays = 2
    this.isAvail = true
    this.century = 'Middle Earth'
  }
}

module.exports = History
