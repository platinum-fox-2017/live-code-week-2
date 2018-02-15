/*
NOTE:
	* Buku yang sudah ditambah tidak bisa ditambah lagi
	* Pembaca yang sudah terdaftar tidak bisa di daftarkan lagi
	* Jika ingin meminjam buku harus terdaftar
	* Buku boleh dikembalikan oleh semua pembaca yang sudah terdaftar
*/

const Journal = require('./Journal.js');
const Biography = require('./Biography.js');
const History = require('./History.js');
const Library = require('./Library.js');
const Readers = require('./Readers.js');

const bookPath = './book_data.json';
const readerPath = './readers_data.json';


/* INSTANCE LIBRARY*/
let perpustakaan = new Library('Perpustakaan Javascript', 'Pondok Indah');


/* INSTANCE JOURNAL, BIOGRAPHY, HISTORY*/
let journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89, 1);
let biography = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 4, 'Steve Wozniak');
let history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 2, 'Middle Earth');


/* INSTANCE READERS*/
let putra = new Readers('Putra', 'Bekasi', '123456789');
let hari = new Readers('Hari', 'Jakarta', '123456789');

/* ADD BUKU */
perpustakaan.addBook(journal);
perpustakaan.addBook(biography);
// perpustakaan.addBook(history);

/* ADD READER */
perpustakaan.addReader(putra);
// perpustakaan.addReader(hari);


// perpustakaan.borrow('Awal Peradaban Callback', 'Hari');
perpustakaan.borrow('Orang Dibalik Apple', 'Putra');
// perpustakaan.return('Awal Peradaban Callback', 'aa');
// perpustakaan.return('Awal Peradaban Callback', 'Hari');

console.log(biography.totalPages);
console.log(journal.totalPages);
perpustakaan.book;
perpustakaan.reader;