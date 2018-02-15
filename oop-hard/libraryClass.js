'use strict'

const Journal = require('./journalBookClass.js')
const History = require('./historyBookClass.js')
const Biography = require('./biographyBookClass.js')

class Library {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.book = []
        this.reader = []
    }
    
    addJournalBook(title, author, total_page) {
        let journal = new Journal(title, author, total_page);
        this.book.push(journal);
    }
    
    addBiographyBook(title, author, total_page, figure) {
        let biography = new Biography(title, author, total_page, figure);
        this.book.push(biography);
    }
    
    addHistoryBook(title, author, total_page, century) {
        let history = new History(title, author, total_page, century);
        this.book.push(history);
    }
    
    addMember(memberObj) {
        this.reader.push(memberObj);
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
                if(this.isBookAvail(this.book[i])) {
                    memberIndex=i;
                    console.log("Buku Berhasil Di Pinjam")
                    this.book[i].addReader(borrowerName);
                }
                else {
                    console.log("Buku Dalam Keadaan Di Pinjam")
                }
            }
        }
        if(memberIndex<0)return console.log('Daftar jadi member dulu')
    }

}

module.exports = Library;