const Journal = require('./journal');
const Biography = require('./biography');
const History = require('./history');
const Perpustakaan = require('./perpustakaan');
const Readers = require('./readers');

let journal = new Journal('Jatuh Bangun Seorang Fullstack', 'Kang Udin', 89);
let biography = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 'Steve Wozniak');
let history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 'Middle Earth');

let perpustakaan = new Perpustakaan();

perpustakaan.addBook(journal);
perpustakaan.addBook(biography);
perpustakaan.addBook(history);


let reza = new Readers('Reza', 'Surabaya', '081738318220');
let pane = new Readers('Pane', 'Jakarta', '081289371931');
let ervan = new Readers('Ervan', 'Jakarta', '081289371931');

perpustakaan.addMember(reza);
perpustakaan.addMember(ervan);

perpustakaan.borrow('Orang Dibalik Apple', 'Reza');
perpustakaan.borrow('Jatuh Bangun Seorang Fullstack', 'Pane');
perpustakaan.borrow('Orang Dibalik Apple', 'Ervan');


console.log(biography.totalPages);
console.log(journal.totalPages);
console.log(perpustakaan.book)

perpustakaan.writeFileToJson();