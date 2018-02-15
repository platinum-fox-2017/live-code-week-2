'use srict'
const Journal = require('./journal')
const Biography = require('./biography')
const History = require('./history')
const Readers = require('./readers')

class Library {
    constructor(name,address) {
        this.name = name
        this.address = address
        this.book = []
        this.readers = []
    }

    addBook(book) {
        let list = this.book
        return list.push(book)
    }

    addReaders(readers) {
        let list = this.readers
        return list.push(readers)
    }

    borrow(book,readers) {
        let list = this.book
        // console.log(book,'<<<<<< book input')
        // console.log(list,'<<<<<< list book')

        // console.log(book.name === list[0].name,'true')
        for (let i = 0; i < list.length;i++) {
            if(book.name === list[i].name && list[i].is_avail === true) {
                list[i].lend_to = readers.name
                list[i].is_avail = false
                console.log('Buku berhasil dipinjam')
            } else {
                console.log('Buku sudah dipinjam')
            } break;
        }
    }

}
let library = new Library('Perpustakaan Java Script','Pondok Indah')

let newJournal = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89)
let newBiography = new Biography('Orang Dibalik Ngaro','Mas Bejo',327,'Steve Wozniak')
let newHistory = new History('Awal Peradaban Callback','Bang Togar',127,'Middle Earth')

let sherlock = new Readers('Holmes','221B Baker Street',08098999)
let luffy = new Readers('Luffy','Grand Line',0217896547)

//add book to library
library.addBook(newJournal)
library.addBook(newBiography)
library.addBook(newHistory)

//add readers to library
library.addReaders(sherlock)
library.addReaders(luffy)

//borrow
library.borrow(newJournal,sherlock)
console.log(library.book)
// console.log(library.readers)
library.borrow(newJournal,sherlock)