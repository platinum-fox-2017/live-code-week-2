class Perpustakaan {
    constructor() {

    }

    get book() {

    }

}



class Book {
    constructor(title,author,totalPages,isAvail) {
        this.title = title;
        this.author = author;
        this._totalPages = totalPages;
        this.readingDays = Math.ceil(this._totalPages/100);
        this.isAvail = true;
    }
}


class Journal extends Book {
    constructor(title,author,totalPages,isAvail) {
        super(title,author,totalPages,isAvail)
    }

    get totalPages() {
        if (this._totalPages > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this._totalPages;
        }

    }


}


class Biography extends Book {
    constructor(title,author,totalPages,isAvail,figure) {
        super(title,author,totalPages,isAvail)
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


class History extends Book {
    constructor(title,author,totalPages,isAvail,century) {
        super(title,author,totalPages,isAvail)
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

var journal = new Journal('Jatuh Bangung Seorang Fullstack','Kang Udin',89,true)

var biography = new Biography('Orang Dibalik Apple','Mas Bejo',327,true,'Steve Wozniak')

var history = new History('Awal Peradaban Callback','Bang Togar',127,true,'MiddleEarth');


//RELEASE 0 TEST CASE
// console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
// console.log(journal.totalPages) // 89

