class Book {
    constructor(title,author,_totalPages){
    this.title = title
    this.author = author
    this._totalPages = _totalPages
    this.readingDays= null;
    this.isAvail= true 
    this.peminjam = null;
    }
    get totalPages(){
        if(this._totalPages > 200){
            return 'Banyak halamannya capek ngitungnya';
        }
        return this._totalPages;
    }
    static borrow(judulBuku,namaPembaca){
        // console.log(judulBuku);
        // console.log(judulBuku.isAvail);
        // console.log(namaPembaca);
        // console.log(namaPembaca.nama);
        if(judulBuku.isAvail === false){
            console.log('Buku dalam keadaan dipinjam');
        } else if (judulBuku.isAvail === true){
            judulBuku.isAvail = false;
            judulBuku.peminjam = namaPembaca.nama;
            console.log('Buku berhasil dipinjam');
        }
    }
}

module.exports = Book;