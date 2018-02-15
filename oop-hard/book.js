const Readers = require('./readers');
let reader = new Readers

class Book {
  constructor(title, author, _totalPages, readingDays, isAvail) {
    this.title = title
    this.author = author
    this._totalPages = _totalPages
    this.readingDays = readingDays
    this.isAvail = isAvail
    this.totalPages = _totalPages
    this.peminjam = null
  }
  total(){
    if(this._totalPages > 200){
      this.totalPages = 'Banyak halamannya capek ngitungnya'
    }
    else {
      this.totalPages = this._totalPages
    }
  }
  borrow(judulBuku, namaPembaca){
    this.title = judulBuku
    if(this.isAvail === true){
      this.isAvail = false
      this.peminjam = namaPembaca
      console.log('Buku Berhasil Dipinjam')
    }
    else if(this.isAvail === false){
      console.log('Buku Sudah Dipinjam')
    }
  }
}

module.exports = Book
