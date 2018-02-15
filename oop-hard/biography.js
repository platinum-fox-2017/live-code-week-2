var Buku = require('./book.js')

class Biography extends Buku{
  constructor(title,author,totalpage,readingdays,avail,figure){
    super(title,author,totalpage,readingdays,avail)
    this._figure=figure
  }
}


module.exports=Biography
