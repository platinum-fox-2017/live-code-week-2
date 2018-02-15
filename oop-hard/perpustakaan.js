class Perpustakaan{
    constructor(){
        this.name = 'Perpustakaan Javascript'
        this.address = 'Pondok Indah' 
        this.books = []
        this.readers = []

    }
    addBook(book){
        this.books.push(book)
    }
    addReader(reader){
        this.readers.push(reader)
    }
}



module.exports = Perpustakaan