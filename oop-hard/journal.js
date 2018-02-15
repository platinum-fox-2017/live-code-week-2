var Buku = require('./book.js')

class Journal extends Buku{
  constructor(title,author,totalpage,readingdays,avail){
    super(title,author,totalpage,readingdays,avail)
  }
}

module.exports=Journal
