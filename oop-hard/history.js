const Buku = require('./buku.js');

class History extends Buku{
  constructor(title,author,total_page,reading_days,century){
    super(title,author,total_page,reading_days);
    this.century = century;
  }
}
module.exports = History;
