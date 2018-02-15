const Book = require('./book')

class Journal extends Book{
  constructor(title,author,total_pages){
    super(title,author,total_pages)
  }
}

module.exports = Journal