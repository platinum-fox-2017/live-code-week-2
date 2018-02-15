var Buku = require('./book.js')

class History extends Buku{
  constructor(title,author,totalpage,readingdays,avail,century){
    super(title,author,totalpage,readingdays,avail)
    this._century=century
  }
}


module.exports=History
