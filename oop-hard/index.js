const History = require('./history.js');
const Journal = require('./journal.js');
const Biography = require('./biography.js');
const Perpustakaan = require('./perpustakaan.js');

let journal = new Journal('Jatuh Bangun Seorang Fullstack','Kang udin',89,1)
let biography = new Biography('Orang Dibalik Apple','Mas Bejo',327,4,'Steve Wozniak')
let history = new History('Awal Perabadan Callback','Bang togar',127,2,'Middle Earth')
let perpustakaan = new Perpustakaan()

perpustakaan.books = journal
perpustakaan.books = biography
perpustakaan.books = history
console.log(`=================Release 0 ===========================`)
console.log(biography.totalPages)
console.log(journal.totalPages)
console.log(perpustakaan.book)

console.log(`=========================Release 1 ==================`)
perpustakaan.addReader('Kang Tatang','jakarta',7712341)
console.log(journal.borrow('Jatuh Bangun Seorang Fullstack','Kang Tatang'))
console.log(perpustakaan.book)
console.log(journal.borrow('Jatuh Bangun Seorang Fullstack','Kang Tatang'))

console.log(`=====================Release 2 =======================`)
console.log(journal.borrow('Jatuh Bangun Seorang Fullstack','Kang Erwin'))
