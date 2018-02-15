class Perpustakaan {
  constructor() {
    this.bookCollection = [];
    this.reader = [];
  }

  addBook(input){
    this.bookCollection.push(input);
  }

  addReader(name){
    this.reader.push({nama: name});
  }
}

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
      if(perpustakaan.reader[i].nama===namaPembaca){
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

class Journal extends Book {
  constructor(title,author,totalPages,readingDays,isAvail,borrower) {
    super(title,author,totalPages,readingDays,isAvail,borrower);
    this.borrower = borrower;
  }
}

class Biography extends Book {
  constructor(title,author,totalPages,readingDays,isAvail,figure,borrower) {
    super(title,author,totalPages,readingDays,isAvail,figure,borrower);
    this.figure = figure;
    this.borrower = borrower;
  }
}

class History extends Book {
  constructor(title,author,totalPages,readingDays,isAvail,century,borrower) {
    super(title,author,totalPages,readingDays,isAvail,century,borrower);
    this.century = century;
    this.borrower = borrower;
  }
}

class Readers {
  constructor(name,address,phoneNumber) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}

const fs = require('fs');
var jurnal = new Journal('Jatuh Bangung Seorang Fullstack','Kang Udin',89,1,true);
var biografi = new Biography('Orang Dibalik Apple','Mas Bejo',327,4,true,'Farah','Steve Wozniak');
var sejarah = new History('Awal Peradaban Callback','Bang Togar',127,2,true,'Middle Earth')
var fitrul = new Readers('Fitrul','Kranggan',085555555555);
var farah = new Readers('Fitrul','Godean',087777777777);
var farhan = new Readers('Farhan','Godean',088888888888);

var perpustakaan = new Perpustakaan();
perpustakaan.addBook(jurnal);
perpustakaan.addBook(biografi);
perpustakaan.addBook(sejarah);
perpustakaan.addReader('Fitrul');
perpustakaan.addReader('Farah');
perpustakaan.addReader('Farhan');

//release 0
// console.log(perpustakaan.bookCollection);
// console.log(biografi.totalPages);

//release 1
// jurnal.borrow(sejarah,'Joko');
// console.log(sejarah);

//release 2
// console.log(perpustakaan.reader);
// jurnal.borrow(sejarah,'Fitrul');
