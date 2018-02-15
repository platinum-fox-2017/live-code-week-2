"user strict"

class Perpustakaan {
  constructor() {
    this.book = []
    this.pembaca = []
  }

  addBook(obj) {
    if(obj == journal) {
      this.book.push(new Journal(obj))
    } else if(obj == biography) {
      this.book.push(new Biography(obj))
    } else if(obj == history) {
      this.book.push(new History(obj))
    } else {
      this.book.push(new Unknown(obj))
    }
  }

  get totalPages() {
    if(this._totalPages > 200) {
      return 'Banyak halamannya capek ngitungnya'
    } else {
      return this._totalPages
    }
  }

  borrow(judulBuku, namaPembaca) {
    for(let i=0; i<this.book.length; i++) {
      if(this.book[i].title == judulBuku && this.book[i].isAvail) {
        this.pembaca.push(new Reader(namaPembaca))
        this.book[i].isAvail = false
        this.book[i].peminjam = namaPembaca.name
        return console.log('Buku berhasil dipinjam' );
      }
    }
    return console.log('Buku sudah dipinjam');
  }
}

class Reader {
  constructor(obj) {
    this.name = obj.name
    this.alamat = obj.alamat
    this.notelp = obj.notelp
  }
}

class Book {
  constructor(obj) {
    this.title = obj.title
    this.author = obj.author
    this._totalPages = obj._totalPages
    this.readingDays = obj.readingDays
    this.isAvail = true
    this.peminjam = ''
  }
}

class Journal extends Book {
  constructor(obj) {
    super(obj)
  }
}

class Biography extends Book {
  constructor(obj) {
    super(obj)
    this.figure = obj.figure
  }
}

class History extends Book {
  constructor(obj) {
    super(obj)
    this.century = obj.century
  }
}

class Unknown extends Book {
  constructor(obj) {
    super(obj)
  }
}

let perpustakaan = new Perpustakaan()

let journal = {}
journal.title = 'Jatuh Bangung Seorang Fullstack',
journal.author = 'Kang Udin',
journal._totalPages = 89,
journal.readingDays = 1,
journal.isAvail = true

let biography = {}
biography.title = 'Orang Dibalik Apple',
biography.author = 'Mas Bejo',
biography._totalPages = 327,
biography.readingDays = 4,
biography.isAvail = true,
biography.figure = 'Steve Wozniak'

let history = {}
history.title = 'Awal Peradaban Callback',
history.author = 'Bang Togar',
history._totalPages = 127,
history.readingDays = 2,
history.isAvail = true,
history.century = 'Middle Earth'

perpustakaan.addBook(journal)
perpustakaan.addBook(biography)
perpustakaan.addBook(history)

// console.log(biography);
// console.log(journal);

console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
console.log(journal.totalPages) // 89
console.log(perpustakaan.book)

let objPembaca = {}
objPembaca.name = 'Wika'
objPembaca.alamat = 'bekasi'
objPembaca.notelp = '091297312397'

perpustakaan.borrow('Jatuh Bangung Seorang Fullstack', objPembaca) // Buku Berhasil Dipinjam
console.log(perpustakaan.book)
// xxxx.borrow([judulBuku], [namaPembaca]) // Buku Sudah Dipinjam
perpustakaan.borrow('Jatuh Bangung Seorang Fullstack', objPembaca) // Buku Berhasil Dipinjam
