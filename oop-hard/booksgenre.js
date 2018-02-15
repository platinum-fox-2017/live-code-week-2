const Perpustakan = require('./perpustakaan.js');

class BooksGenre{
  constructor(title,author,totalPage,readingDays){
    this.title = title
    this.author = author
    this._totalPage = totalPage
    this.readingDays = readingDays
    this.isAvail = true
    this.borrower =''
  }

  get totalPages(){
    if(this._totalPage > 200){
      return `banyak halamannya cape ngitungnya`
    } else{
      return this._totalPage
    }
  }

  borrow(title,name){
    for(let i = 0 ; i < perpustakaan.reader.length ; i++){
      for(let j = 0 ; j < perpustakaan._books.length ;j++){
        if(perpustakaan.reader[i].name === name){
          if(perpustakaan._books[i].title === title){
            if(perpustakaan._books[i].isAvail === false){
                return `buku sudah dipinjam harap meminjam buku yang lain`
            }else{
              perpustakaan._books[i].isAvail = false
              perpustakaan._books[i].borrower += name
              return `buku berhasil dipinjam`
            }
          }
        }else{
          return `${name} silahkan melakukan pendaftaran terlebih dahulu`
        }
      }
    }
  }
}

module.exports = BooksGenre
