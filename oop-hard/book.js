
class Book {
  constructor(title, author, totalPages) {
    this.title = title
    this.author = author
    this.pages = totalPages
    this.readingDays = this.readCalc()
    this.borrower = ''
    this.isAvail = true
  }

  readCalc() {
    return Math.ceil(this.pages / 100)
  }

  get totalPages(){
    if (this.pages >= 200) {
      return 'Banyak halamannya capek ngitungnya'
    } else {
      return this.pages
    }
  }
}

module.exports = Book;
