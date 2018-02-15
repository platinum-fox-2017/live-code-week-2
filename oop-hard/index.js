'use srict'
const Journal = require('./journal')
const Biography = require('./biography')
const History = require('./history')


// 1. Journal
//   * **Title:** Jatuh Bangung Seorang Fullstack
//   * **Author:** Kang Udin
//   * **Total Page:** 89
// 2. Biography
//   * **Title:** Orang Dibalik Apple
//   * **Author:** Mas Bejo
//   * **Total Page:** 327
//   * **Figure:** Steve Wozniak
// 3. History
//   * **Title:** Awal Peradaban Callback
//   * **Author:** Bang Togar
//   * **Total Page:** 127
//   * **Figure:** Middle Earth

class Library {
    constructor(name,address) {
        this.name = name
        this.address = address
        this.book = []
    }


    addBook(book) {
        let list = this.book
        return list.push(book)
    }

}

let newJournal = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89)
let newBiography = new Biography('Orang Dibaik Ngaro','Mas Bejo',327,'Steve Wozniak')
let newHistory = new History('Awal Peradaban Callback','Bang Togar',127,'Middle Earth')
// console.log(newJournal)
// console.log(newBiography)
// console.log(newHistory)

let library = new Library('Perpustakaan Java Script','Pondok Indah')

library.addBook(newJournal)
library.addBook(newBiography)
library.addBook(newHistory)

console.log(library.book)