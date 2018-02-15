class Perpustakaan {
  constructor() {
    this.Book = []
  }

  getBook(item) {
    this.Book.push(item)
  }
}

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
    console.log(read.name);
    this.peminjam = read.name
  }
}

class Journal extends Books {
  constructor(title,author,totalPages,readingDays,isAvail) {
    super(title,author,totalPages,readingDays,isAvail)
  }
}

class Biography extends Books {
  constructor(title,author,totalPages,readingDays,isAvail) {
    super(title,author,totalPages,readingDays,isAvail)
    this.figure = 'Steve Wozniak'
  }
}

class History extends Books {
  constructor(title,author,totalPages,readingDays,isAvail) {
    super(title,author,totalPages,readingDays,isAvail)
    this.century = 'Middle Earth'
  }
}

class Readers {
  constructor(nama, alamat, notelp) {
    this.name = nama
    this.alamat = alamat
    this.notelp = notelp
  }
}

const journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Uding', 89, 1, true)
const biography = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 4, true)
const history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 2, true)

const perpustakaan = new Perpustakaan()

perpustakaan.getBook(journal)
perpustakaan.getBook(biography)
perpustakaan.getBook(history)

// console.log(perpustakaan);

biography.totalPages()
journal.totalPages()

const deva = new Readers('Deva', 'Perumahan Pondok Indah', '140222')
const cecha = new Readers('Cecha', 'Pantai Indah Bapuk', '14045')
const dhiar = new Readers('Dhiar', 'Perumahan Kelapa Gading', '15100')

journal.borrow(deva)
biography.borrow(cecha)
history.borrow(dhiar)

console.log(perpustakaan);
