'use strict'

class PerpustakaanJavascript{
    constructor(){
        this.alamat = 'Pondok Indah'
    }
}

class Book{
    constructor(name){
        this.title
        this.author
        this.totalPages
        this.readingDays
        this.isAvail
    }

    assignBook()
}

class Journal extends Book{
    constructor(name){
        super(name)
    }
}

class Biography extends Book{
    constructor(name){
        super(name)
        this.figure
    }
}

class History extends Book{
    constructor(name){
        super(name)
        this.century
    }
}

let journal = {
    title: 'Jatuh Bangun Seorang Fullstack',
    author: 'Kang Udin',
    totalPages: 89,
    readingDays: 1,
    isAvail: true
}

let biography = {
    title: 'Orang Dibalik Apple',
    author: 'Mas Bejo',
    totalPages: 327,
    readingDays: 4,
    isAvail: true
}

let history = {
    title: 'Awal Peradaban Callback',
    author: 'Bang Togar',
    totalPages: 127,
    readingDays: 2,
    isAvail: true
}

let Books = new Book()
let test = new Journal()


console.log(journal)