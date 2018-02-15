const fs = require('fs');
var bacaDataPembaca = fs.readFileSync('./pembaca.json', 'utf8');
var bacaDataBuku = fs.readFileSync('./buku.json', 'utf8');
var dataPembaca = JSON.parse(bacaDataPembaca);
var dataBuku = JSON.parse(bacaDataBuku);

var perpus1 = require('./perpus.js');
var book1 = require('./book.js');
var jurnal1 = require('./jurnal.js');
var sejarah1 = require('./sejarah.js');
var biografi1 = require('./biografi.js');
var pembaca1 = require('./pembaca.js');

var jurnal = new jurnal1(dataBuku[0].title,dataBuku[0].author,dataBuku[0].page,dataBuku[0].days,dataBuku[0].status);
var biografi = new biografi1(dataBuku[1].title,dataBuku[1].author,dataBuku[1].page,dataBuku[1].days,dataBuku[1].status,dataBuku[1].peminjam,dataBuku[1].namalain);
var sejarah = new sejarah1(dataBuku[2].title,dataBuku[2].author,dataBuku[2].page,dataBuku[2].days,dataBuku[2].status,dataBuku[2].namalain)
var fitrul = new pembaca1(dataPembaca[0].nama,dataPembaca[0].alamat,dataPembaca[0].nomor);
var farah = new pembaca1(dataPembaca[1].nama,dataPembaca[1].alamat,dataPembaca[1].nomor);
var farhan = new pembaca1(dataPembaca[2].nama,dataPembaca[2].alamat,dataPembaca[2].nomor);
//
var perpustakaan = new perpus1();
perpustakaan.addBook(jurnal);
perpustakaan.addBook(biografi);
perpustakaan.addBook(sejarah);
perpustakaan.addReader(fitrul);
perpustakaan.addReader(farah);
perpustakaan.addReader(farhan);
//
// //release 0
// // console.log(perpustakaan.bookCollection);
// // console.log(biografi.totalPages);
//
// //release 1
// // jurnal.borrow(sejarah,'Joko');
// // console.log(sejarah);
//
// //release 2
// // console.log(perpustakaan.reader);
// jurnal.borrow(sejarah,'Fitrul');
