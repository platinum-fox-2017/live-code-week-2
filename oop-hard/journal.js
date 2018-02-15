const Books = require('./books')

class Journal extends Books {
  constructor(title,author,totalPages,readingDays,isAvail) {
    super(title,author,totalPages,readingDays,isAvail)
  }
}

module.exports = Journal
