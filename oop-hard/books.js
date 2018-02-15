class Books {
  constructor(title,author,totalPages,readingDays,isAvail) {
    this.title = title
    this.author = author
    this._totalPages = totalPages
    this.readingDays = readingDays
    this.isAvail = isAvail
    this.peminjam = ''
  }

  totalPages() {
    // console.log(this._totalPages);
    if (this._totalPages > 200) {
      console.log('Banyak halamannya capek ngitungnya')
    }
    else if (this._totalPages < 200) {
      console.log(this._totalPages);
    }
  }

  borrow(read) {
    // console.log(read.name);
    this.peminjam = read.name
  }
}

module.exports = Books
