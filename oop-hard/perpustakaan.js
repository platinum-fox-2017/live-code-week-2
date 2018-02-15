const Readers = require('./readers.js')

class Perpustakaan{
  constructor(){
    this._books = []
    this.reader = []
  }

  addReader(name,addres,notelp){
    this.reader.push(new Readers(name,addres,notelp))
  }

  set books(buku){
    this._books.push(buku)
  }
  get book(){
    return this._books
  }
}

module.exports = Perpustakaan
