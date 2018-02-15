const Buku = require('./buku.js');
class Journal  extends Buku{
  constructor(title,author,total_page,reading_days){
    super(title,author,total_page,reading_days);
  }
}
module.exports = Journal;
