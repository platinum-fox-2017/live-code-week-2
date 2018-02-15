'use strict'

const Journal = require('./journalBookClass.js')
const History = require('./historyBookClass.js')
const Biography = require('./biographyBookClass.js')

var fs = require('fs')
let bookfile = "./book.json"
let memberfile = "./reader.json"

class Library {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.book = []
        this.reader = []
    }

    readfile(file, data) {
        let temp = fs.readFileSync(file,data,'utf8')
        temp = JSON.parse(temp)
        return
    }
    
    addJournalBook(title, author, total_page) {
        let journal = new Journal(title, author, total_page);
        this.book.push(journal);
        this.writeBookFile(this.book)
    }
    
    addBiographyBook(title, author, total_page, figure) {
        let biography = new Biography(title, author, total_page, figure);
        this.book.push(biography);
        this.writeBookFile(this.book)
    }
    
    addHistoryBook(title, author, total_page, century) {
        let history = new History(title, author, total_page, century);
        this.book.push(history);
        this.writeBookFile(this.book)
    }

    writeBookFile(data) {
        data=JSON.stringify(data)
        fs.writeFileSync(bookfile,data,'utf8');
    }

    writeReaderFiler(data) {
        data=JSON.stringify(data)
        fs.writeFileSync(memberfile,data,'utf8');
    }
    
    addMember(memberObj) {
        this.reader.push(memberObj);
        this.writeReaderFiler(this.reader);
    }

    isBookAvail(bookObj) {
        if(bookObj.isAvail) {return true;}
        console.log("Buku dalam keadaan dipinjam");
        return false
    }

    borrow(bookName, borrowerName) {
        let bookIndex = -1
        for(let i in this.book) {
            if(this.book[i].title === bookName) {
                bookIndex = i
            }
        }

        if(bookIndex=== -1) return console.log("Buku Tidak Tersedia")
        let memberIndex =-1
        for(let i in this.reader) {
            if(borrowerName === this.reader[i].name) {
                if(this.isBookAvail(this.book[bookIndex])) {
                    memberIndex=i;
                    this.book[bookIndex].addReader(borrowerName);
                    return console.log("Buku Berhasil Di Pinjam")
                }
                else return;
            }
        }
        if(memberIndex<0)return console.log('Daftar jadi member dulu')
    }

}

module.exports = Library;