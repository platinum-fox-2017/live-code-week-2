const Perpustakaan = require('./perpustakaan.js');
const Journal = require('./journal.js');
const Biography = require('./biography.js');
const History = require('./history.js');
const Readers = require('./readers.js');

var journal = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,1);
var biography = new Biography('Orang dibalik Apple','Mas Bejo',327,4,'Steve Wozniak');
var history = new History('Awal Peradaban Callback','Bang Togar',127,2,'Middle Earth');
var books = [journal,biography,history];
var perpustakaan = new Perpustakaan('Perpustakaan Javascrit','Pondok Indah',books);

console.log(perpustakaan.books);
console.log(biography.totalPages);
console.log(journal.totalPages);

var reader = new Readers('Haidar','Lampung','081222498686');

console.log(perpustakaan.addReader(reader));

console.log(perpustakaan.borrow('Orang dibalik Apple','Haidar'));
console.log(perpustakaan.borrow('Orang dibalik Apple','Haidar'));
console.log(perpustakaan.borrow('Orang dibalik Apple','Afif'));
