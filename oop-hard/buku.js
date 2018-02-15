class Buku {
  constructor(title,author,total_page,reading_days){
    this.title = title;
    this.author = author;
    this._totalPages = total_page;
    this.reading_days = reading_days;
    this.isAvail = true;
    this.borrower = '';
  }
  get totalPages (){
    if(this._totalPages < 200){
      return this._totalPages;
    } else {
      return 'Banyak halamannya capek ngitungnya';
    }
  }
}
module.exports = Buku; 
