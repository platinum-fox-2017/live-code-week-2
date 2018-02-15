class Perpustakaan {
  constructor() {
    this.Book = []
  }

  getBook(item) {
    this.Book.push(item)
  }
}

module.exports = Perpustakaan
