class Books {
  constructor(title,author,totalPages,figure) {
    this.title = title
    this.author = author
    this.totalPages = totalPages
    this.readingDays = Math.ceil(totalPages/100)
    this.isAvail = true
    this.peminjam = null
  }
}

module.exports = Books
