let Perpustakaan = require('./perpustakaan.js');
let JournalBook = require('./journal.js');
let HistoryBook = require('./history.js');
let BiographyBook = require('./biography.js');
let ReadersObj = require('./readers.js');
let fs = require('fs');
let JSONparser = require('./JSONparser.js')

// ######## BOOKS ########
let journal = new JournalBook('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89);
let history = new HistoryBook('Awal Peradaban Callback', 'Bang Togar', 127, 'Middle Earth');
let biography = new BiographyBook('Orang Dibalik Apple', 'Mas Bejo', 327, 'Steve Wozniak');

// ######## READERS ########
let readerA = new ReadersObj('Sebastian', 'Jalan Sutra', 08988822212);
let readerB = new ReadersObj('Wika', 'Jalan Space', 08721379872);
let readerC = new ReadersObj('Irsyad', 'Jalan Megaroad', 08592348712);
let readerD = new ReadersObj('Herby', 'Jalan Rainbow', 08439567129);
let readerE = new ReadersObj('Ryan', 'Jalan apples', 08456967129);

let bookCollection =  [journal, biography, history];
let readers = [readerA, readerB, readerC];

// console.log(bookCollection);
// console.log(readers);
// console.log(history.totalPages)
// console.log(journal.totalPages)

let perpustakaan = new Perpustakaan(bookCollection, readers, 'Pondok Indah', 'Perpustakaan Javascript');

perpustakaan.borrow('Orang Dibalik Apple', readerA.name);
perpustakaan.borrow('Orang Dibalik Apple', readerB.name);
perpustakaan.addReader(readerE);
perpustakaan.borrow('Awal Peradaban Callback', readerD.name);

// console.log(perpustakaan.book);
// console.log(perpustakaan.pembaca);

/* ######### PARSE TO JSON ########### */
let data_book = JSON.stringify(perpustakaan.book);
JSONparser.writeBookData(data_book);

let data_reader = JSON.stringify(perpustakaan.pembaca);
JSONparser.writeReaderData(data_reader);
