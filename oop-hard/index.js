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
        let statusBorrower;
        // console.log(this.readers[0] === reader)
        // console.log(this.readers[0] == reader)
        // console.log(this.readers[0])
        // console.log()
        for (let i = 0; i < this.list_book.length; i++) {
            if (this.readers[i] === reader.name) {
                console.log(this.readers[i])
                // for (let i = 0; i < this.list_book.length; i++) {
                //     if (this.list_book[i].isAvail === true) {
                //         if (this.list_book[i].title == book) {
                //             this.list_book[i].isAvail = false
                //             this.list_book[i].borrower = reader.name
                //             statusBook = 'Buku Berhasil Dipinjam'
                //         }
                //     } else {
                //         statusBook = 'Buku Sudah Dipinjam '
                //     }
                // }
            } 
        }
    
        this.list_book.push(this.list_book)
        console.log(statusBorrower)
        console.log(statusBook)
    }

    addReader(reader) {
        this.readers.push(reader)
    }

}

class Reader {
    constructor(name, address, phone_num) {
        this.name = name
        this.address = address
        this.phone_num = phone_num
    }
}

class Book {
    constructor(title, author, total_page, reading_days, isAvail, borrower) {
        this.title = title
        this.author = author
        this.total_page = total_page
        this.reading_days = reading_days || null
        this.isAvail = isAvail || true
        this.borrower = borrower || null
    }
}

class Journal extends Book {
    constructor(name, author, total_page) {
        super(name, author, total_page)
    }
}

class Biography extends Book {
    constructor(name, author, total_page, figure) {
        super(name, author, total_page)
        this.figure = figure
    }
}

class History extends Book {
    constructor(name, author, total_page, century) {
        super(name, author, total_page)
        this.century = century
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

library.addReader('Gustaf')
library.borrow('Orang Dibalik Apple', gustaf)
// library.borrow('Orang Dibalik Apple', gustaf)

// console.log(library.list_book)



console.log(library)