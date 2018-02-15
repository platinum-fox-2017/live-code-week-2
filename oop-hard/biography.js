const Buku = require('./buku.js');

class Biography extends Buku{
  constructor(title,author,total_page,reading_days,figure){
    super(title,author,total_page,reading_days);
    this.figure = figure;
  }
}
module.exports = Biography;
