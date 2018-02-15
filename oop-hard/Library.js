class Library {
    constructor(name) {
        this._name      = name;
        this._book      = [];
        this._readers   = [];
    }

    get name() {
        return this._name;
    }

    get book() {
        return this._book;
    }

    get readers() {
        return this._readers;
    }

    addBook(book) {
        this._book.push(book);
    }

    addReader(reader) {
        this._readers.push(reader);
    }

    borrow(bookName,readerName) {
        let checkReader = this.searchReader(readerName);
        
        if (checkReader == -1 ) {
            console.log("Daftar Jadi Member Dulu !");
        } else {
            let checkBook = this.checkIsAvail(bookName);
            
            if (checkBook != -1) {
                this._book[checkBook].updateisAvail(false);
                this._book[checkBook].updateBorrowers(this._readers[checkReader])
                console.log("Buku berhasil dipinjam !");
            } else {
                console.log("Maaf buku sudah dipinjam !");
            }
        }
    }

    searchReader(readerName) {
        var index = -1;
        for(let i = 0; i < this._readers.length; i++) {
            if(this._readers[i].name == readerName) {
                index = i;
            }
        }    

        if (index != -1) {
            return index;
        } else {
            return -1;
        }
    }

    checkIsAvail(bookName) {
        var index = -1;
        for(let i = 0; i < this._book.length; i++) {
            if(this._book[i].title == bookName) {                
                if(this._book[i].isAvail == true) {
                    index = i;
                }
            }
        }

        if (index != -1) {
            return index;
        } else {
            return -1;
        }
    }
} 

module.exports = Library;