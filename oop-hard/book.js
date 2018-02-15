class Buku{
  constructor(title,author,totalpage,readingdays,avail){
    this._title=title
    this._author=author
    this._totalpage=totalpage
    this._readingdays=readingdays
    this._isavail=avail
    this.peminjam=''
  }
}

module.exports=Buku
