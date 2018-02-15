class Perpustakaan {
    constructor(title,author,totalPages) {
        this.title = title;
        this.author = author;
        this._totalPages = totalPages;
        this.readingDays = Math.ceil(this._totalPages/100);
        this.readers = [];
    }

    get book() {
        var arrBook = [];
        arrBook.push(journal);
        arrBook.push(biography);
        arrBook.push(history);

        return arrBook;
    }

    addReaders(objReaders) {
        this.readers.push(objReaders);
    }


}


class Journal extends Perpustakaan {
    constructor(title,author,totalPages) {
        super(title,author,totalPages)
        this.isAvail = true;
        this.borrower = '';
    }

    get totalPages() {
        if (this._totalPages > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this._totalPages;
        }

    }

    borrow(bookName,borrowerName) {
        if (bookName == journal.title) {
            if (this.isAvail == false) {
                console.log('Buku Sudah Dipinjam');
            } else {
                console.log('Buku Berhasil Dipinjam');
                this.isAvail = false;
                this.borrower = borrowerName;
                this.readers.push(borrowerName);
            }
        } else {
            console.log('Tidak ada buku dengan nama tersebut')
        }
        

    }

}


class Biography extends Perpustakaan {
    constructor(title,author,totalPages,figure) {
        super(title,author,totalPages)
        this.isAvail = true;
        this.borrower = '';
        this.figure = figure;

    }

    get totalPages() {
        if (this._totalPages > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this._totalPages;
        }

    }

    borrow(bookName,borrowerName) {
        if (bookName == biography.title) {
            if (this.isAvail == false) {
                console.log('Buku Sudah Dipinjam');
            } else {
                console.log('Buku Berhasil Dipinjam');
                this.isAvail = false;
                this.borrower = borrowerName;
                this.readers.push(borrowerName);
            }
        } else {
            console.log('Tidak ada buku dengan nama tersebut')
        }
    }

}


class History extends Perpustakaan {
    constructor(title,author,totalPages,century) {
        super(title,author,totalPages)
        this.isAvail = true;
        this.borrower = '';
        this.century = century;
    }

    get totalPages() {
        if (this._totalPages > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this._totalPages;
        }

    }

    borrow(bookName,borrowerName) {
        if (bookName == history.title) {
            if (this.isAvail == false) {
                console.log('Buku Sudah Dipinjam');
            } else {
                console.log('Buku Berhasil Dipinjam');
                this.isAvail = false;
                this.borrower = borrowerName;
                this.readers.push(borrowerName);
            }
        } else {
            console.log('Tidak ada buku dengan nama tersebut')
        }
    }

}

//ADD BOOKS
var journal = new Journal('Jatuh Bangung Seorang Fullstack','Kang Udin',89)
var biography = new Biography('Orang Dibalik Apple','Mas Bejo',327,'Steve Wozniak')
var history = new History('Awal Peradaban Callback','Bang Togar',127,'MiddleEarth');
var perpustakaan = new Perpustakaan();



//RELEASE 2 TEST CASE

// journal.borrow('Jatuh Bangung Seorang Fullstack','Kang Tatang');

// console.log(perpustakaan.book)

// journal.borrow('Jatuh Bangung Seorang Fullstack','Kang Tatang');

