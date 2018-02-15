
class Perpustakaan {
  constructor(books, readers, alamat, name) {
    this.name = name
    this.alamat = alamat
    this.book = books
    this.pembaca = readers
  }

  borrow(bookName, readerName){
    for (let p = 0; p < this.pembaca.length; p++) {
      if(this.pembaca[p].name === readerName){
        for (var i = 0; i < this.book.length; i++) {
          if(this.book[i].title === bookName) {
            if(this.book[i].isAvail === true) {
              this.book[i].borrower = readerName;
              this.pembaca[p].borrowing = bookName;
              this.book[i].isAvail = false;
              return console.log('Buku Berhasil Dipinjam');
            } else {
              return console.log('Buku dalam keadaan dipinjam');
            }
          }
        }
      }
    }
    return console.log('Daftar jadi member dulu');
  }

  addReader(reader) {
    if (reader.length !== undefined) {
      for (let i = 0; i < reader.length; i++) {
        this.pembaca.push(reader[i]);
      }
    } else {
      this.pembaca.push(reader);
    }
    return this;
  }
}

module.exports = Perpustakaan;
