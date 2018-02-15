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

    readerValidation(readers) {
        let list = this.readers
        let arrReader = []
        for(let i = 0; i < list.length; i++) {
            arrReader.push(list[i].name)
        }
        // console.log(arrReader.indexOf(readers))
        if(arrReader.indexOf(readers) === -1) {
            return false
        } else {
            return true
        }
    }

    bookValidation(title,readers) {
        let list = this.book
        for (let i = 0; i < list.length;i++) {
            if(title === list[i].title && list[i].is_avail === true) {
                list[i].lend_to = readers
                list[i].is_avail = false
                return true
            } else {
                return false
            }
        }
    }
    
    borrow(book,readers) {
        if (this.readerValidation(readers) === true) {
            if(this.bookValidation(book,readers) === true) {
                console.log(`Buku berhasil dipinjam`)
            } else {
                console.log(`Buku sudah dipinjam`)
            }
        } else if(this.readerValidation(readers) === false) {
            console.log(`Daftar Jadi Member dulu`)
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
// library.bookValidation('Jatuh Bangun Seorang Fullstack','Holmes')
library.borrow('Jatuh Bangun Seorang Fullstack','Holmes')
console.log(library.book)
// console.log(library.readers)
// library.readerValidation('Holmes')
// library.borrow('Orang Dibalik Ngaro','Holmes')