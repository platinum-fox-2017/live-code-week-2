const fs = require('fs');

class Perpustakaan {
    constructor(){
        this._book = [];
        this._pembaca = [];
    }

    get book(){
        return this._book;
    }

    addBook(book){
        this._book.push(book);
    }

    addMember(reader){
        this._pembaca.push(reader);
    }

    borrow(bookTitle, readerName){
        let checkMembership = false;
        for(let i=0; i<this._pembaca.length; i++){
            if(this._pembaca[i].nama.toLowerCase()==readerName.toLowerCase()){
                checkMembership = true;
            }
        }
        if(checkMembership){
            for(let i=0; i<this._book.length; i++){
                if(this._book[i].title == bookTitle){
                    if(this._book[i].isAvail){
                        this._book[i].isAvail = false;
                        this._book[i].peminjam = readerName;
                        console.log('Buku Berhasil Dipinjam');
                    }else{
                        console.log('Buku Sudah Dipinjam')
                    }
                }
            }
        }else{
            console.log('Daftar jadi member dulu');
        }
    }

    writeFileToJson(){
        let objectToWrite = {
            books: this._book,
            members: this._pembaca
        }
        fs.writeFile('./data-buku.json', JSON.stringify(objectToWrite), 'UTF-8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    }
}

module.exports = Perpustakaan;