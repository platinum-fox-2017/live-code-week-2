const Books = require('./books')

class History extends Books {
  constructor(title,author,totalPages,readingDays,isAvail) {
    super(title,author,totalPages,readingDays,isAvail)
    this.century = 'Middle Earth'
  }
}

module.exports = History
