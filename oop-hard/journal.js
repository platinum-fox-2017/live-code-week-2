const Books = require ('./book')

class Journal extends Books {
  constructor(title,author,totalPages) {
    super(title,author,totalPages)
  }
}

// let jour = new Journal('kari','kari',100)

module.exports = Journal;
