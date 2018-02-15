const Journal = require('./journal.js')
const Biography = require('./biography.js')
const History = require('./history.js')
const Reader = require('./reader.js')

const fs = require('fs')
// const bookList = fs.readFileSync('./data.json', 'utf8')[0]
// const member = fs.readFileSync('./data.json', 'utf8')[1]

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
console.log(JSON.stringify([udin, bejo, togar]))

let perpustakaan = new Perpustakaan()

let journal = new Journal(udin)
let biography = new Biography(bejo)
let history = new History(togar)

console.log(biography.totalPages)   // Banyak halamannya capek ngitungnya
console.log(journal.totalPages)     // 89

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
