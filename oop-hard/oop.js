const Journal = require('./journal.js')
const Biography = require('./biography.js')
const History = require('./history.js')
const Reader = require('./reader.js')

const fs = require('fs')

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
                    fs.writeFileSync('./data.json', JSON.stringify(this._genre), 'utf8')
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

let library = JSON.parse(fs.readFileSync('./books.json', 'utf8'))
// Access book from library
let udin = library[0]
let bejo = library[1]
let togar = library[2]

let perpustakaan = new Perpustakaan()

let journal = new Journal(udin)
let biography = new Biography(bejo)
let history = new History(togar)

console.log(biography.totalPages)   // Banyak halamannya capek ngitungnya
console.log(journal.totalPages)     // 89

// Adds book to Perpustakaan
perpustakaan.addBook(journal)
perpustakaan.addBook(biography)
perpustakaan.addBook(history)

console.log(perpustakaan.book)

let profile = JSON.parse(fs.readFileSync('./member.json', 'utf8'))
// Access profile data
let herby = profile[0]
let john = profile[1]

perpustakaan.borrow('Awal Peradaban Callback', herby)
console.log(perpustakaan.book)

// Validation
// perpustakaan.borrow('Awal Peradaban Callback', john)
