const fs = require('fs');
// var bacaDataPembaca = fs.readFileSync('./pembaca.json', 'utf8');
var bacaDataBuku = fs.readFileSync('./buku.json', 'utf8');
// var dataPembaca = JSON.parse(bacaDataPembaca);
var dataBuku = JSON.parse(bacaDataBuku);
let tes = dataBuku[0];
console.log(tes);



// var jurnal = new Journal('Jatuh Bangung Seorang Fullstack','Kang Udin',89,1,true);
// var biografi = new Biography('Orang Dibalik Apple','Mas Bejo',327,4,true,'Farah','Steve Wozniak');
// var sejarah = new History('Awal Peradaban Callback','Bang Togar',127,2,true,'Middle Earth')
// var fitrul = new Readers('Fitrul','Kranggan',085555555555);
// var farah = new Readers('Fitrul','Godean',087777777777);
// var farhan = new Readers('Farhan','Godean',088888888888);
//
// var perpustakaan = new Perpustakaan();
// perpustakaan.addBook(jurnal);
// perpustakaan.addBook(biografi);
// perpustakaan.addBook(sejarah);
// perpustakaan.addReader(fitrul);
// perpustakaan.addReader(farah);
// perpustakaan.addReader(farhan);
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
