const Library   = require('./Library');
const Journal   = require('./Journal');
const Bioghrapy = require('./Biography');
const History   = require('./History');

let journal     = new Journal('Jatuh bangun seorang fullstack', 'Kang Udin', 89, 1, true);
let bioghrapy   = new Bioghrapy('Orang dibalik Apple', 'Mas Bejo', 327, 4, true, 'Steve Wozniack');
let history     = new History('Awal Peradaban Callback', 'Bang Togar', 127, 2, true, 'Middle Earth');

console.log(bioghrapy.totalPage);
console.log(journal.totalPage);

let library     = new Library('Pondok Indah');

library.addBook(journal);
library.addBook(bioghrapy);
library.addBook(history);

console.log(library.book);
