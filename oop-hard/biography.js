const Books = require ('./book')

class Biography extends Books {
  constructor(title,author,totalPages,figure) {
    super(title,author,totalPages)
    this.figure = figure
  }
}

// let jour = new Biography('kari','kari',100)
// console.log(jour);

module.exports = Biography;
