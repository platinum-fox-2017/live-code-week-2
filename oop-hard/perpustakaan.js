const Book = require('./book');
const Journal = require('./journal');
const Biography = require('./biography');
const History = require('./history');
const Readers = require('./readers');
const fs = require('fs');

class Perpustakaan {
  constructor() {
    this.book = []
    this.pembaca = []
  }
  addBook(classBook){
    // fs.readFileSync('./buku.json', JSON.parse)
    let book
    if(classBook === 'Journal'){
      book = new Journal
    }
    else if(classBook === 'Biography'){
      book = new Biography
    }
    else if(classBook === 'History'){
      book = new History
    }
    this.book.push(book)
    fs.writeFileSync('./buku.json', JSON.stringify(this.book), 'utf8')
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
  addReader(nama, alamat, notelp){
    let reader = new Readers
    reader.nama = nama
    reader.alamat = alamat
    reader.notelp = notelp
    this.pembaca.push(reader)
  }
}

let perpustakaan = new Perpustakaan
let journal = new Journal
let biography = new Biography
let history = new History

perpustakaan.addBook('Journal')
perpustakaan.addBook('Biography')
perpustakaan.addBook('History')
journal.total()
biography.total()
history.total()

console.log(biography.totalPages)
console.log(journal.totalPages)
console.log(perpustakaan.book)

journal.borrow('Jatuh Bangun Seorang Fullstack', 'Jon Snow')
journal.borrow('Jatuh Bangun Seorang Fullstack', 'Deva')

perpustakaan.addReader('Jon Snow', 'Winterfell', '081crow')
perpustakaan.addReader('Deva', 'Bogor', '0812345')
console.log(perpustakaan.pembaca)

module.exports = Perpustakaan
