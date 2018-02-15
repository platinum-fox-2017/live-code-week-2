const fs = require('fs')
class Perpustakaan{
    constructor(){
        this.name = 'Perpustakaan Javascript'
        this.address = 'Pondok Indah' 
        this.books = []
        this.readers = []
        this.members = []

    }
    addBook(book){
        this.books.push(book)
    }
    addReader(reader){
        this.readers.push(reader)
    }
    // addMember(member){
    //     this.members.push(member)
    // }
    writeFile(){
        let arrBook=[]
        for(let i =0; i<this.books.length; i++){
            let objBook = {
                title : this.books[i].title,
                author : this.books[i].author,
                total_page: this.books[i].total_page
            }
            arrBook.push(objBook)
        }
        fs.writeFileSync('./file.json', JSON.stringify(arrBook),'utf8')
    }
}



module.exports = Perpustakaan
