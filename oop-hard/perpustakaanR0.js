class Perpustakaan {
    constructor(title,author,totalPages) {
        this.title = title;
        this.author = author;
        this._totalPages = totalPages;
        this.readingDays = Math.ceil(this._totalPages/100);
        this.isAvail = true;
    }

    get book() {
        var arrBook = [];
        arrBook.push(journal);
        arrBook.push(biography);
        arrBook.push(history);

        return arrBook;
    }

}


class Journal extends Perpustakaan {
    constructor(title,author,totalPages) {
        super(title,author,totalPages)
    }

    get totalPages() {
        if (this._totalPages > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this._totalPages;
        }

    }

}


class Biography extends Perpustakaan {
    constructor(title,author,totalPages,figure) {
        super(title,author,totalPages)
        this.figure = figure;

    }

    get totalPages() {
        if (this._totalPages > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this._totalPages;
        }

    }

}


class History extends Perpustakaan {
    constructor(title,author,totalPages,century) {
        super(title,author,totalPages)
        this.century = century;
    }

    get totalPages() {
        if (this._totalPages > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this._totalPages;
        }

    }

}

//ADD BOOKS
var journal = new Journal('Jatuh Bangung Seorang Fullstack','Kang Udin',89)
var biography = new Biography('Orang Dibalik Apple','Mas Bejo',327,'Steve Wozniak')
var history = new History('Awal Peradaban Callback','Bang Togar',127,'MiddleEarth');
var perpustakaan = new Perpustakaan();


//RELEASE 0 TEST CASE
console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
console.log(journal.totalPages) // 89
console.log(perpustakaan.book)



