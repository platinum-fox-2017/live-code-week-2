class Library {
    constructor(book) {
        this.book = []
    }

    addBook(book) {
        this.book.push(book)
    }

    borrow(title, reader) {
        console.log('Masuk')
        console.log(title)
        console.log(reader)

        if (title.isAvail === true) {
            title.isAvail = false
            title.rent = reader.name
            console.log('Buku Berhasil Dipinjam');
        } else {
            console.log('Buku Sudah Dipinjam')
        }
    }
}

class Book {
    constructor(title, author, total_page) {
        this.title = title
        this.author = author
        this.total_page = total_page
        this.reading_days = Math.round(total_page / 100)
        this.rent = ''
        this.isAvail = true
    }

    totalPages() {
        if (this.total_page > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this.total_page
        }
    }



}

class Journal extends Book {
    constructor(title, author, total_page) {
        super(title, author, total_page)
    }

}

class Biography extends Book {
    constructor(title, author, total_page, figure) {
        super(title, author, total_page)
        this.figure = figure
    }
}

class History extends Book {
    constructor(title, author, total_page, century) {
        super(title, author, total_page)
        this.century = century
    }
}

class Reader {
    constructor(name, address, phone) {
        this.name = name
        this.address = address
        this.phone = phone
    }
}


let andrew = new Reader('andrew', 'syahdan', '085880016822')
let kusuma = new Reader('kusuma', 'binus', '66666666')

let library = new Library()
let journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89)
// borrow()
// console.log(journal)
// console.log(journal.totalPages())
library.addBook(journal)

let bio = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 'Steve Wozniak')
// console.log(bio)
// console.log(bio.totalPages())
library.addBook(bio)

let history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 'Middle Earth')
// console.log(history)
library.addBook(history)

library.borrow(journal, andrew)
library.borrow(journal, kusuma)
// console.log(library)

