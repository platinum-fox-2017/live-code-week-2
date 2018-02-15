class Perpustakaan {
    constructor(title, author, totalPage, reader){
        this.title = title
        this.author = author
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
        this._totalPage = totalPage
        this.readingDays = 1
        this.isAvail = true
    }
    get totalPages(){
        return this._totalPage
    }
}

class Biography extends Perpustakaan {
    constructor(title, author, totalPage){
        super(title, author, totalPage)
        this._totalPage = totalPage
        this.readingDays = 4
        this.isAvail = true
        this._figure = 'Steve Wozniak'
    }
    get totalPages(){
        return 'Banyak Halaman capek ngitungnya'
    }
}

class History extends Perpustakaan {
    constructor(title, author, totalPage){
        super(title, author, totalPage)
        this._totalPage = totalPage
        this.readingDays = 2
        this.isAvail = true
        this._century = 'Middle Earrth'
    }
    get totalPages(){
        return this._totalPage
    }
}

class Readers {
    constructor(nama, alamat, telp){
        
    }
}


let perpustakaan = new Perpustakaan()
let biography = new Biography()
let journal = new Journal()
let history = new History()

//Contoh Test Case
console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
console.log(journal.totalPages) // 89

perpustakaan.addBook()
console.log(perpustakaan.book)