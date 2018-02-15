class Library{
    constructor(){

    }
}

class Book{
    constructor(title, author, page, readTime){
        this._title = title
        this._author = author
        this._page = page
        this._readTime= this.readTime()
    }

    checkPage(){
        let result = ''
        if(this._page > 200){
            result += 'Banyak halamannya, capek ngitungnya'
        }
        else if(this._page < 200){
            result = this._page
        }
        return result
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
        this._page = this.checkPage()
    }

}

class History extends Book{
    constructor(title, author, page, readTime, century){
        super(title, author, page, readTime)
        this._century = century
        this._page = this.checkPage()
    }

}

let book = [
    new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,null),
    new Biography('Orang Dibalik Apple','Mas Bejo',327,null,'Steve Wozniak'),
    new History('Awal Peradaban Callback','Bang Tagor',127,null,'Middle Earth')
]
console.log(book)

let bio = new Biography('Orang Dibalik Apple','Mas Bejo',327,null,'Steve Wozniak')
console.log(bio._page)

let jurnal = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,null)
console.log(jurnal._page)



// let history = new History('Awal Peradaban Callback','Bang Tagor',127,null,'Middle Earth')
// console.log(history)