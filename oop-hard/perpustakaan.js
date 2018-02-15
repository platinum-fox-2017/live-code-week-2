const fs = require('fs');
class Perpustakaan {
  constructor(nama,alamat,books){
    this.nama = nama;
    this.alamat = alamat;
    this.books = this.saveBooksToJson(books);
    this.readers = [];
  }
  saveBooksToJson(books){
   var booksJson = JSON.stringify(books);
   fs.writeFileSync('data_buku.json',booksJson);
   return books;
  }
  borrow(title,reader){
    var isRegitered  = false;
    for(var i = 0; i < this.readers.length; i++){
      if(reader == this.readers[i].nama){
        isRegitered = true;
      }
    }
    if(!isRegitered){
      return 'Daftar Jadi Member Dulu';
    }
    for(var i= 0; i < this.books.length; i++){
      if(title == this.books[i].title){
        if(this.books[i].isAvail){
          this.books[i].isAvail = false;
          this.books[i].borrower = reader;
          var booksJson = JSON.stringify(this.books);
          fs.writeFileSync('data_buku.json',booksJson);
          return 'Buku Berhasil Dipinjam';
        } else {
          return 'Buku Sudah Dipinjam';
        }
      }
    }
  }
  addReader(reader){
    this.readers.push(reader)
    var readersJson = JSON.stringify(this.readers);
    fs.writeFileSync('data_pembaca.json',readersJson);
    return `${reader.nama} Berhasil Didaftarkan Di Perpustakaan`;
  }
}
module.exports = Perpustakaan;
