const Biography = require ('./biography.js')
const History = require ('./history.js')
const Journal = require ('./journal.js')
const Reader = require ('./reader.js')
const Perpustakaan = require ('./perpustakaan.js')
const fs = require ('fs')

let perpus = new Perpustakaan('perpus')
// console.log(perpus);
let journal1 = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,)
let biography1 = new Biography('Orang Dibalik Apple','Mas Bejo',327,'Steve Wozniak')
let history1 = new History('Awal Peradaban Callback','Bang Togar',127,'Middle Earth')
perpus.addBooks(journal1)
perpus.addBooks(biography1)
perpus.addBooks(history1)
// console.log(perpus.books);

let amarta = new Reader ('Amarta','Jl. Surga Neraka No. 17','081224664707')
let jojobi = new Reader ('Jojobi','Jl. Surga Semua No. 11','08112983192')
perpus.addReader(amarta)
perpus.addReader(jojobi)
// console.log(perpus.borrowBooks('agrha',amarta))
perpus.borrowBooks('Jatuh Bangun Seorang Fullstack',amarta)
perpus.borrowBooks('Jatuh Bangun Seorang Fullstack',jojobi)
perpus.borrowBooks('Awal Peradaban Callback',jojobi)
console.log(perpus.readers);
console.log(amarta);
// console.log(journal1);
