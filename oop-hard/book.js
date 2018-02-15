class Book {
  constructor(title,author,totalPages,readingDays,isAvail) {
    this.title = title;
    this.author = author;
    this._totalPages = totalPages;
    this.readingDays = readingDays;
    this.isAvail = true;
  }

  get totalPages(){
    if(this._totalPages>200){
      return 'Banyak halamannya capek ngitungnya';
    } else {
      return this._totalPages;
    }
  }

  borrow(judulBuku,namaPembaca){
    let count = 0;
    for(let i=0; i<perpustakaan.reader.length; i++){
      if(perpustakaan.reader[i].name===namaPembaca){
        count++;
      }
    }
    if(count===0){
      console.log('Daftar jadi member dulu');
    } else {
      if(judulBuku.borrower===undefined){
        judulBuku.isAvail = false;
        judulBuku.borrower = namaPembaca;
        console.log('Buku berhasil dipinjam');
      } else {
        console.log('Buku sudah dipinjam');
      }
    }
  }
}

module.exports = Book;
