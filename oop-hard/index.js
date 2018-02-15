'use srict'
const Journal = require('./journal')
const Biography = require('./biography')
const History = require('./history')
const Readers = require('./readers')
const fs = require('fs')

class Library {
    constructor() {
        this.name = 'Perpustakaan Java Script'
        this.address = 'Pondok Indah'
    }

    static getData() {
        let database = fs.readFileSync('./library.json','utf-8')
        let data = JSON.parse(database)
        return data
    }

    static addBook(book) {
        let data = this.getData()
        data.push(book)
        let newData = JSON.stringify(data)
        fs.writeFileSync('./library.json',newData)
        return data
    }
    static getDataReaders() {
        let database = fs.readFileSync('./reader.json','utf-8')
        let data = JSON.parse(database)
        return data
    }

    static addReaders(readers) {
        let data = this.getDataReaders()
        data.push(readers)
        let newData = JSON.stringify(data)
        fs.writeFileSync('./reader.json',newData)
        return data
    }

    static readerValidation(readers) {
        let list = this.getDataReaders()
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

    static bookValidation(title,readers) {
        let list = this.getData()
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
    
    static borrow(book,readers) {
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
// let library = new Library('Perpustakaan Java Script','Pondok Indah')

let newJournal = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89)
let newBiography = new Biography('Orang Dibalik Ngaro','Mas Bejo',327,'Steve Wozniak')
let newHistory = new History('Awal Peradaban Callback','Bang Togar',127,'Middle Earth')

let sherlock = new Readers('Holmes','221B Baker Street',08098999)
let luffy = new Readers('Luffy','Grand Line',0217896547)

//add book to library
Library.addBook(newJournal)
Library.addBook(newBiography)
Library.addBook(newHistory)

//add readers to library
Library.addReaders(sherlock)
Library.addReaders(luffy)

//borrow
// library.bookValidation('Jatuh Bangun Seorang Fullstack','Holmes')
// Library.borrow('Jatuh Bangun Seorang Fullstack','Holmes')
console.log(Library.getData())
// console.log(library.readers)
// library.readerValidation('Holmes')
// library.borrow('Orang Dibalik Ngaro','Holmes')