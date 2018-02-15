const Book = require('./book')

class Biography extends Book{
  constructor(title,author,total_pages,figure){
    super(title,author,total_pages)
    this.figure = figure
  }
}

module.exports = Biography