const Books = require ('./book')

class History extends Books {
  constructor(title,author,totalPages,century) {
    super(title,author,totalPages)
    this.century = century
  }
}

// let jour = new History('kari','kari',100)
// console.log(jour);

module.exports = History;
