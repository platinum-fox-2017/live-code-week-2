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
        let counter =0;
        if(judulBuku.isAvail === false){
            console.log('Buku dalam keadaan dipinjam');
        } else if (judulBuku.isAvail === true){
            for(let i=0; i<perpustakaan.pembaca.length; i++){
                if(perpustakaan.pembaca[i].nama === namaPembaca.nama){
                    judulBuku.isAvail = false;
                    judulBuku.peminjam = namaPembaca.nama;
                    console.log('Buku berhasil dipinjam');
                } else {
                    counter += 1;
                }
            }
            if(counter === perpustakaan.pembaca.length){
                console.log('Daftar jadi member dulu')
            }
        }
    }
}

module.exports = Book;