const Reader = require('./reader')
const Library = require('./library')
const Journal = require('./journal')
const Biography = require('./biography')
const History = require('./history')

let andrew = new Reader('andrew', 'syahdan', '085880016822')
let kusuma = new Reader('kusuma', 'binus', '66666666')

let library = new Library()
let journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89)
// borrow()
// console.log(journal)
// console.log(journal.totalPages())
library.addBook(journal)

let bio = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 'Steve Wozniak')
// console.log(bio)
// console.log(bio.totalPages())
library.addBook(bio)

let history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 'Middle Earth')
// console.log(history)
library.addBook(history)
library.addMember(andrew)
// console.log(library)

library.borrow(journal, andrew)
// library.readFile()
// library.borrow(journal, kusuma)
// console.log(library)

