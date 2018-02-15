class Library {
  constructor() {
    this._address = 'Pondok Indah'
    this._owner = 'Saudagar Kaya'
    this._genre = []
    this._totalBooks = 'number'//ganti
    this._readers = []
  }

  generate_books() {
    let arrBooks = []
    for(let i = 0; i < books.length; i++) {
      if(books[i].genre === 'Journal') {
        arrBooks.push(new Journal(books[i]));
      } else if(books[i].genre === 'Biography') {
        arrBooks.push(new Biography(books[i]))
      } else if(books[i].genre === 'History')  {
        arrBooks.push(new History(books[i]))
      }
    }
    return arrBooks;
  }

  isAvail() {

  }

  borrow(title, reader) {
    let listOfBooks = this.generate_books()
    for(let i = 0; i < listOfBooks; i++) {
      if(title === listOfBooks[i].title) {
        listOfBooks[i]._isAvail = false
        listOfBooks[i]._borrower = reader
      }
    }
    console.log(listOfBooks)
  }
}

class Books {
  constructor(objBooks) {
    this._title = objBooks.title
    this._genre = objBooks.genre
    this._author = objBooks.author
    this._totalPages = objBooks.totalPages
    this._readingDays = objBooks.readingDays
    this._isAvail = objBooks.isAvail
    this._borrower
  }

  get totalPages() {
    if(this._totalPages > 200) {
      return 'Banyak halamannya capek ngitungnya'
    } else {
      return this._totalPages
    }
  }

  borrow(title, reader) {
    let listOfBooks = lib.generate_books()
    for(let i = 0; i < listOfBooks; i++) {
      if(title === listOfBooks[i].title) {
        listOfBooks[i]._isAvail = false
        listOfBooks[i]._borrower = reader
      }
    }
    console.log(listOfBooks)
  }
}

class Journal extends Books {
  constructor(objBooks) {
    super(objBooks)
  }
}

class Biography extends Books {
  constructor(objBooks) {
    super(objBooks)
    this._figure = objBooks.figure
  }
}

class History extends Books {
  constructor(objBooks) {
    super(objBooks)
    this._century = objBooks.century
  }
}

let lib = new Library()
let books = new Books({title: 'Jatuh Bangun Seorang Fullstack', genre: 'Journal',author: 'Kang Udin', totalPages: 89, readingDays: 1, isAvail: true})
// let books = [ {title: 'Jatuh Bangun Seorang Fullstack', genre: 'Journal',author: 'Kang Udin', totalPages: 89, readingDays: 1, isAvail: true}, 
//               {title: 'Orang Dibalik Apple', genre: 'Biography', author: 'Mas Bejo', totalPages: 327, readingDays: 4, isAvail: true, figure: 'Steve Wozniak'},
//               {title: 'Awal Peradaban Callback', genre: 'History', author: 'Bang Togar', totalPages: 127, readingDays: 2, isAvail: true, century: 'Middle Earth'}]
// console.log(lib.generate_books())

let journal = new Journal({title: 'Jatuh Bangun Seorang Fullstack', genre: 'Journal',author: 'Kang Udin', totalPages: 89, readingDays: 1, isAvail: true});
// console.log(journal.totalPages)
// console.log(journal.borrow())

let biography = new Biography({title: 'Orang Dibalik Apple', genre: 'Biography', author: 'Mas Bejo', totalPages: 327, readingDays: 4, isAvail: true, figure: 'Steve Wozniak'});
// console.log(biography.totalPages)

let history = new History({title: 'Awal Peradaban Callback', genre: 'History', author: 'Bang Togar', totalPages: 127, readingDays: 2, isAvail: true, century: 'Middle Earth'});
// console.log(history.totalPages)

//------------------------------------------------------------------

class Readers {
  constructor(objReaders) {
    this._name = objReaders.name
    this._address = objReaders.address
    this._phone = objReaders.phone
    this._borrowedBooks = objReaders.books
  }
}

let member = {name: 'Acim',address: 'Jakarta',phone: '87414681', books: 'Orang Dibalik Apple'}
let reader = new Readers(member)
// console.log(reader)

lib.generate_books()
books.borrow('Orang Dibalik Apple', 'Acim')