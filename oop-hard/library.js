class Book{
    constructor(title, author, page, readTime){
        this._title = title
        this._author = author
        this._page = page
        this._readTime= this.readTime()
    }

    readTime(){
        let result = Math.ceil(this._page/100)
        return result
    }

}

class Journal extends Book{
    constructor(title, author, page, readTime){
        super(title, author, page, readTime)
        
    }

}

class Biography extends Book{
    constructor(title, author, page, readTime, figure){
        super(title, author, page, readTime)
        this._figure = figure
    }

}

class History extends Book{
    constructor(title, author, page, readTime, century){
        super(title, author, page, readTime)
        this._century = century
    }

}

let book = [
    new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,null),
    new Biography('Orang Dibalik Apple','Mas Bejo',327,null,'Steve Wozniak'),
    new History('Awal Peradaban Callback','Bang Tagor',127,null,'Middle Earth')
]
console.log(book)

// let jurnal = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,null)
// console.log(jurnal)

// let bio = new Biography('Orang Dibalik Apple','Mas Bejo',327,null,'Steve Wozniak')
// console.log(bio)

// let history = new History('Awal Peradaban Callback','Bang Tagor',127,null,'Middle Earth')
// console.log(history)