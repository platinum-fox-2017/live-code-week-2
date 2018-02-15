class Buku {
  constructor(title,author,total_page,reading_days){
    this.title = title;
    this.author = author;
    this._totalPages = total_page;
    this.reading_days = reading_days;
    this.isAvail = true;
  }
  get totalPages (){
    if(this._totalPages < 200){
      return this._totalPages;
    } else {
      return 'Banyak halamannya capek ngitungnya';
    }
  }
}
class Journal  extends Buku{
  constructor(title,author,total_page,reading_days){
    super(title,author,total_page,reading_days);
  }
}
class Biography extends Buku{
  constructor(title,author,total_page,reading_days,figure){
    super(title,author,total_page,reading_days);
    this.figure = figure;
  }
}
class History extends Buku{
  constructor(title,author,total_page,reading_days,century){
    super(title,author,total_page,reading_days);
    this.century = century;
  }
}
class Perpustakaan {
  constructor(nama,alamat,books){
    this.nama = nama;
    this.alamat = alamat;
    this.books = books;
  }
}


var journal = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,1);
var biography = new Biography('Orang dibalik Apple','Mas Bejo',327,4,'Steve Wozniak');
var history = new History('Awal Peradaban Callback','Bang Togar',127,2,'Middle Earth');
var books = [journal,biography,history];
var perpustakaan = new Perpustakaan('Perpustakaan Javascrit','Pondok Indah',books);
console.log(perpustakaan.books);
console.log(biography.totalPages);
console.log(journal.totalPages);
