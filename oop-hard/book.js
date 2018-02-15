
class Book {
  constructor(title, author, totalPages) {
    this.title = title
    this.author = author
    this._pages = totalPages
    this.readingDays = this.readCalc()
    this.borrower = ''
    this.isAvail = true
  }

  readCalc() {
    return Math.ceil(this._pages / 100);
  }

  get totalPages(){
    if (this._pages >= 200) {
      return 'Banyak halamannya capek ngitungnya';
    } else {
      return this._pages;
    }
  }
}

module.exports = Book;
