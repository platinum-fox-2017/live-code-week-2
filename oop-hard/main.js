const Journal = require('./Journal.js');
const Biography = require('./Biography.js');
const History = require('./History.js');
const Library = require('./Library.js');
const Readers = require('./Readers.js');

const bookPath = './book_data.json';
const readerPath = './readers_data.json';


let journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89, 1);
let biography = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 4, 'Steve Wozniak');
let history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 2, 'Middle Earth');

let book = [];
book.push(journal, biography, history);

let perpustakaan = new Library('Perpustakaan Javascript', 'Pondok Indah', book);

console.log(biography.totalPages);
console.log(journal.totalPages);
// console.log(perpustakaan.book);

let putra = new Readers('Putra', 'Bekasi', '123456789');
let reader = [];
reader.push(putra);

perpustakaan.addReader(putra);
perpustakaan.borrow('Awal Peradaban Callback', putra.name);
console.log(perpustakaan.book);
perpustakaan.borrow('Awal Peradaban Callback', putra.name);

Library.writeFile(bookPath, book, function() {
	console.log('Data Buku Telah Disimpan');
});

Library.writeFile(readerPath, reader, function() {
	console.log('Data Pembaca Telah Disimpan');
});