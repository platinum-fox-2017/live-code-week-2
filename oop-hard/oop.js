const fs = require ('fs')
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

  save(){
    fs.writeFileSync('buku.json',JSON.stringify(this._books))
    fs.writeFileSync('peminjam.json',JSON.stringify(this.readers))
    console.log(`berhasil di save`)
  }

}

class Readers{
  constructor(name,addres,notelp){
    this.name = name
    this.addres = addres
    this.notelp = notelp
  }
}

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

class Biography extends BooksGenre{
  constructor(title,author,totalPage,readingDays,figure){
    super(title,author,totalPage,readingDays)
    this.figure = figure
  }
}


class Journal extends BooksGenre{
  constructor(title,author,totalPage,readingDays){
    super(title,author,totalPage,readingDays)
  }
}

class History extends BooksGenre{
  constructor(title,author,totalPage,readingDays,century){
    super(title,author,totalPage,readingDays)
      this.century = century
  }
}

let journal = new Journal('Jatuh Bangun Seorang Fullstack','Kang udin',89,1)
let biography = new Biography('Orang Dibalik Apple','Mas Bejo',327,4,'Steve Wozniak')
let history = new History('Awal Perabadan Callback','Bang togar',127,2,'Middle Earth')

let perpustakaan = new Perpustakaan()

perpustakaan.books = journal
perpustakaan.books = biography
perpustakaan.books = history
console.log(`=================Release 0 ===========================`)
console.log(biography.totalPages)
console.log(journal.totalPages)
console.log(perpustakaan.book)

console.log(`=========================Release 1 ==================`)
perpustakaan.addReader('Kang Tatang','jakarta',7712341)
console.log(journal.borrow('Jatuh Bangun Seorang Fullstack','Kang Tatang'))
console.log(perpustakaan.book)
console.log(journal.borrow('Jatuh Bangun Seorang Fullstack','Kang Tatang'))

console.log(`=====================Release 2 =======================`)
console.log(journal.borrow('Jatuh Bangun Seorang Fullstack','Kang Erwin'))

console.log(`======================= Release 3 =====================`)
console.log(`soory mas error pas dipisah2in`)
perpustakaan.save()
