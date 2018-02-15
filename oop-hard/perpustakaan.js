const fs = require('fs');
const dataPeminjam = JSON.parse(fs.readFileSync('./dataPeminjam.json','utf8'));
const dataBuku = JSON.parse(fs.readFileSync('./dataBuku.json','utf8'));

class Perpustakaan {
    constructor(name,alamat){
        this._name = name;
        this._alamat = alamat;
        this._book = dataBuku;
        this._pembaca = dataPeminjam;
    }

    addBook(book){
        this._book.push(book);
        this.update_book_status();
    }

    get book(){
        return this._book;
    }

    cek_buku(buku){
        let indexBuku = this._book.map(book => book.title).indexOf(buku);
        return indexBuku;
    }

    cek_pembaca(nama){
        let indexPembaca = this._pembaca.map(pembaca => pembaca.nama).indexOf(nama);
        if(indexPembaca!=-1)
            return true;
        return false;
    }

    update_book_status(){
        fs.writeFileSync('./dataBuku.json',JSON.stringify(this._book),'utf8');
    }

    borrow(judulBuku, namaPembaca){
        if(this.cek_pembaca(namaPembaca)){
            let indexBuku = this.cek_buku(judulBuku);
            if(indexBuku != -1){
                if(this._book[indexBuku]._isAvail == true){
                    this._book[indexBuku]._isAvail = false;
                    this._book[indexBuku]._peminjam = namaPembaca;
                    this.update_book_status();
                    console.log("Buku Berhasil Dipinjam");
                }
                else {
                    console.log("Buku Sudah Dipinjam");
                }
            }
            else{
                console.log("Buku yang anda cari tidak tersedia di perpustakaan ini");
            }
        }
        else{
            console.log("Daftar jadi member dulu");
        }
    }

    addReader(reader){
        this._pembaca.push(reader);
        fs.writeFileSync('./dataPeminjam.json',JSON.stringify(this._pembaca),'utf8');

    }

}

module.exports = Perpustakaan;
