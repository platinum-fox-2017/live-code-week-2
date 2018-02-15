const fs = require ('fs')


class Perpustakaan {
  constructor(name) {
    this.name = name
    this.books = []
    this.readers = []
  }

  addBooks(book){
    this.books.push(book)
  }

  addReader(reader){
    this.readers.push(reader)
  }
  borrowBooks(title,reader){
    for(let i = 0;i<this.books.length;i++){
      if(this.books[i].title == title && this.books[i].isAvail == false){
        return `Bukunya sedang dipinjam oleh ${this.books[i].peminjam}`;
      } else if (this.books[i].title == title) {
        this.books[i].isAvail = false
        this.books[i].peminjam = reader.nama
        reader.books.push(this.books[i])
      }
    }
  fs.writeFileSync('./dataBuku.json',JSON.stringify(this.books))
  fs.writeFileSync('./dataPeminjam.json',JSON.stringify(this.readers))
  return `judul buku dengan nama ${title} tidak ada di perpus`;
  }
}

module.exports = Perpustakaan
