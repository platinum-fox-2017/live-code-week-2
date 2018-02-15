const Journal = require('./journal.js')
const Biography = require('./biography.js')
const History = require('./history.js')
const Reader = require('./reader.js')

class Perpustakaan {
    constructor (){
        this._name = 'Perpustakaan Javascript'
        this._address = 'Pondok Indah'
        this._genre = []
    }
    addBook (books){
        this._genre.push(books)
    }
    borrow (title, readerName){
        for (let i = 0; i < this._genre.length; i++){
            if (this._genre[i]._title === title){
                if (this._genre[i]._isAvail === true){
                    this._genre[i]._borrower.push(new Reader(readerName))
                    this._genre[i]._isAvail = false
                    console.log('Buku Berhasil Dipinjam')
                }
                else {
                    console.log('Buku sudah dipinjam')
                }
            }
        }
    }
    get book(){
        return this._genre
    }

}

class Book {
    constructor(book){
        this._title = book.title
        this._author = book.author
        this._pages = book.pages
        this._readingDays = Math.ceil(book.pages/100)
        this._borrower = []
        this._isAvail = true;
    }
    get totalPages(){
        if (this._pages > 200) {
            return 'Banyak halamannya capek ngitungnya'
        } else {
            return this._pages
        }
    }
}

class Journal extends Book {
    constructor(book){
        super (book)
    }
}

class Biography extends Book {
    constructor(book){
        super (book)
        this._figure = book.figure
    }
}

class History extends Book {
    constructor(book){
        super (book)
        this._century = book.century
    }
}

class Reader {
    constructor(profile){
        this._name = profile.name
        this._address = profile.address
        this._phone = profile.phone
    }
}

let udin = {
    title: 'Jatuh Bangun Seorang Fullstack',
    author: 'Kang Udin',
    pages: 89
}

let bejo = {
    title: 'Orang Dibalik Apple',
    author: 'Mas Bejo',
    pages: 327,
    figure: 'Steve Wozniak'
}

let togar = {
    title: 'Awal Peradaban Callback',
    author: 'Bang Togar',
    pages: 127,
    century: 'Middle Earth' 
}

let perpustakaan = new Perpustakaan()

let journal = new Journal(udin)
let biography = new Biography(bejo)
let history = new History(togar)

console.log(biography.totalPages)
console.log(journal.totalPages)

perpustakaan.addBook(journal)
perpustakaan.addBook(biography)
perpustakaan.addBook(history)

console.log(perpustakaan.book)

let herby = {
    name: 'Herby Herado',
    address: 'BSD City',
    phone: '6281580802872'
}

let john = {
    name: 'John Doe',
    address: 'Bekasi',
    phone: '628826861212'
}

perpustakaan.borrow('Awal Peradaban Callback', herby)
console.log(perpustakaan.book)

perpustakaan.borrow('Awal Peradaban Callback', john)
