const Books = require('./books')

class Biography extends Books {
  constructor(title,author,totalPages,readingDays,isAvail) {
    super(title,author,totalPages,readingDays,isAvail)
    this.figure = 'Steve Wozniak'
  }
}

module.exports = Biography
