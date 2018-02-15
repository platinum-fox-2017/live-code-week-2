const Perpustakaan = require('./perpustakaan');
const Readers = require('./readers');
const Journal = require('./journal');
const Biography = require('./biography');
const History = require('./history');

let perpustakaan = new Perpustakaan("Perpustakaan Javascript","Pondok Indah")

let journal = new Journal("Jatuh Bangun Seorang Fullstack","Kang Udin",89);

let biography = new Biography("Orang Dibalik Apple","Mas Bejo",327,"Steve Wozniak");

let history = new History("Awal Peradaban Callback","Bang Togar",127,"Middle Earth");

perpustakaan.addBook(journal);
perpustakaan.addBook(biography);
perpustakaan.addBook(history);

reader1 = new Readers("Fadhil","Bandung",12345);
reader2 = new Readers("Ryan","Bekasi",43566);
reader3 = new Readers("Adhy","Jakarta",565434);

perpustakaan.addReader(reader1);
perpustakaan.addReader(reader2);
perpustakaan.addReader(reader3);

console.log(biography.totalPages);
console.log(journal.totalPages);


perpustakaan.borrow("Awal Peradaban Callback","Ryan");
console.log(perpustakaan.book);
console.log(perpustakaan);
