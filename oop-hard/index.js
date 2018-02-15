const fs = require('fs');
const Reader = require('./reader')
const Book = require('./book')
const Journal = require('./journal')
const Biography = require('./bio')
const History = require('./history')

class Library {
    constructor() {
        this.name = 'Perpustakaan Javascript'
        this.address = 'Pondok Indah'
        this.readers = []
        this.list_book = []
    }

    addListBook(book) {
        this.list_book.push(book)
    }

    borrow(book, reader) {
        let statusBook;
        let statusBorrower = 0;
        for (let i = 0; i < this.list_book.length; i++) {
            if (this.readers[i] === reader.name) {
                for (let i = 0; i < this.list_book.length; i++) {
                    if (this.list_book[i].isAvail === true) {
                        if (this.list_book[i].title == book) {
                            this.list_book[i].isAvail = false
                            this.list_book[i].borrower = reader.name
                            statusBook = 'Buku Berhasil Dipinjam '
                        }
                    } else {
                        statusBook = 'Buku Sudah Dipinjam '
                    }
                }
            } else {
                statusBorrower++
                
            }
        }

        this.list_book.push(this.list_book)
        // console.log(statusBorrower)
        if (statusBorrower > 0) {
            console.log(statusBook)   
        }
       
        console.log('Daftar jadi member dulu')
    }

    addReader(reader) {
        this.readers.push(reader)
    }

    save() {
        console.log(this.list_book)
        fs.writeFileSync('book.json', JSON.stringify(this.list_book))
    }

}

let library = new Library()
let journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89)
let bio = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 'Steve Wozniak')
let history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 'Middle Earth')
let gustaf = new Reader('Gustaf', 'Jakarta', '0812917461872')

library.addListBook(journal)
library.addListBook(bio)
library.addListBook(history)
let strBio;
if (bio.total_page > 150) {
    strBio = 'Banyak halamannya capek ngitungnya'
}
// console.log(strBio)
// console.log(journal.total_page)
// console.log(library.list_book)

// library.addReader('Gustaf')
library.borrow('Orang Dibalik Apple', gustaf)
// library.borrow('Orang Dibalik Apple', gustaf)

// console.log(library.list_book)

// console.log(library)

//save file
// library.save()