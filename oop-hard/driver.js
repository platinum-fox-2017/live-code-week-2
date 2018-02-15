const Library   = require('./Library');
const Journal   = require('./Journal');
const Bioghrapy = require('./Biography');
const History   = require('./History');
const Readers   = require('./Readers');

let journal     = new Journal('Jatuh bangun seorang fullstack', 'Kang Udin', 89, 1, true,'');
let bioghrapy   = new Bioghrapy('Orang dibalik Apple', 'Mas Bejo', 327, 4, true, 'Steve Wozniack','');
let history     = new History('Awal Peradaban Callback', 'Bang Togar', 127, 2, true, 'Middle Earth','');

console.log(bioghrapy.totalPage);
console.log(journal.totalPage);

let library     = new Library('Pondok Indah');

library.addBook(journal);
library.addBook(bioghrapy);
library.addBook(history);

console.log(library.book);

let readers     = new Readers("Reynaldi","Medan","081372211");
let readers2    = new Readers("Irsan", "Pekanbaru","0811234");
library.addReader(readers);
library.addReader(readers2);

console.log(library.readers);

library.borrow('Orang dibalik Apple', 'Reynaldi');

console.log(bioghrapy);

library.borrow('Orang dibalik Apple', 'Irsan');
library.borrow('Orang dibalik Apple', 'Abdul');