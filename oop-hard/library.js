"use strict"
var fs = require('fs')
const Library = require('./libraryClass.js')
let file = "./book.json"
let temp = fs.readFileSync(file,'utf8')
console.log(temp)
// class library {
//     constructor(name, location) {
//         this.name = name
//         this.location = location
//         this.book = []
//         this.reader = []
//     }

//     addJournalBook(title, author, total_page) {
//         let journal = new Journal(title, author, total_page);
//         this.book.push(journal);
//     }

//     addBiographyBook(title, author, total_page, figure) {
//         let biography = new Biography(title, author, total_page, figure);
//         this.book.push(biography);
//     }

//     addHistoryBook(title, author, total_page, century) {
//         let history = new History(title, author, total_page, century);
//         this.book.push(history);
//     }

//     isBookAvail(bookObj) {
//         // console.log(bookObj.isAvail)
//         if(bookObj.isAvail) {return true;}
//         console.log("Buku dalam keadaan dipinjam");
//         return false
//     }

//     borrow(bookName, borrowerName) {
//         let bookIndex = -1
//         for(let i in this.book) {
//             if(this.book[i].title === bookName) {
//                 bookIndex = i
//             }
//         }

//         if(bookIndex=== -1) return console.log("Buku Tidak Tersedia")
//         let memberIndex =-1
//         for(let i in this.reader) {
//             if(borrowerName === this.reader[i].name) {
//                 if(this.isBookAvail(this.book[i])) {
//                     memberIndex=i;
//                     console.log("Buku Berhasil Di Pinjam")
//                     this.book[i].addReader(borrowerName);
//                 }
//                 else {
//                     console.log("Buku Dalam Keadaan Di Pinjam")
//                 }
//             }
//         }
//         if(memberIndex<0)return console.log('Daftar jadi member dulu')
//     }

//     addMember(memberObj) {
//         memberObj.libraryMember = true;
//         this.reader.push(memberObj);
//     }
// }

class Book {
    constructor(title, author, total_page) {
        this.title = title
        this.author = author
        this._totalPages = this.generateTotalPage(total_page)
        this.readingDays = this.generateReadingDays(total_page)
        this.isAvail = true
        this.borrower = ''
    }

    addReader(readerName) {
        this.borrower = readerName;
        this.isAvail = false;
    }

    generateReadingDays(page) {
        return Math.ceil(page/100)
    }

    generateTotalPage(page) {
        if(page>200) return "Banyak halamannya capek ngitungnya";
        return page
    }
}

class Journal extends Book{
    constructor(title, author, total_page) {
        super(title, author, total_page)
    }
}

class Biography extends Book{
    constructor(title, author, total_page, figure) {
        super(title, author, total_page)
        this.figure = figure
    }
}

class History extends Book{
    constructor(title, author, total_page, century) {
        super(title, author, total_page)
        this.century = century
    }
}

class Readers {
    constructor(nama, alamat, notelp) {
        this.name = nama
        this.address = alamat
        this.phone = notelp
    }
}

var perpustakaan = new Library("Perpustakaan Javascript", "Pondok Indah");

// perpustakaan.addJournalBook("Jatuh Bangung Seorang Fullstack", "Kang Udin", 89);
// perpustakaan.addBiographyBook("Orang Dibalik Apple", "Mas Bejo", 327, "Steve Wozniak");
// perpustakaan.addHistoryBook("Awal Peradaban Callback", "Bang Togar", 127, "Middle Earth")

var ervan = new Readers("Ervan", "Mana aja boleh", "123-4567-8910");
var kambing = new Readers("Kambing", "Mana aja boleh", "123-4567-8910");
var sapi = new Readers("Sapi", "Mana aja boleh", "123-4567-8910");
perpustakaan.addMember(ervan)
perpustakaan.addMember(kambing)

// perpustakaan.book[1].addReader(ervan)
// perpustakaan.borrow("Orang Dibalik Apple", "Ervan");
// console.log(perpustakaan)
// perpustakaan.borrow("Orang Dibalik Apple", "Kambing");
// console.log(perpustakaan, perpustakaan.book[1])
// console.log(perpustakaan.book[1])
// console.log(ervan)
// console.log(kambing)
