class Perpustakaan {
    constructor(title, author, totalPage){
        this.title = title
        this.author = author
        this._totalPage = totalPage
        // this.isAvail = true
    }

    addBook(){
        this.books = []
        this.books.push(new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', '89'))
        this.books.push(new Biography('Orang Dibalik Apple', 'Mas Bejo', '327'))
        this.books.push(new History('Awal Peradaban Callback', 'Kang Udin', '89'))
    }

    get book(){
        return this.books
    }
}

class Journal extends Perpustakaan {
    constructor(title, author, totalPage){
        super(title, author, totalPage)
        // this._title = title
        // this._author = author
        this._totalPage = totalPage
        this._isAvail = true
    }
    get totalPage(){
        return this._totalPage
    }
}

class Biography extends Perpustakaan {
    constructor(title, author, totalPage){
        super(title, author, totalPage)
        // this._title = title
        // this._author = author
        this._totalPage = totalPage
        this._isAvail = true
        this._figure = 'Steve Wozniak'
    }
    get totalPage(){
        return this._totalPage
    }
}

class History extends Perpustakaan {
    constructor(title, author, totalPage){
        super(title, author, totalPage)
        // this._title = title
        // this._author = author
        this._totalPage = totalPage
        this._isAvail = true
        this._century = 'Middle Earrth'
    }
    get totalPage(){
        return this._totalPage
    }
}


//Contoh Test Case
// console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
// let journal = new Journal()
// console.log(journal.totalPages) // 89
let perpustakaan = new Perpustakaan()
perpustakaan.addBook()
console.log(perpustakaan.book)