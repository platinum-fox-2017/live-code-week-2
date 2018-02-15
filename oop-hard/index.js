const {Book,Journal,Biography,History} = require('./book')
const Perpustakaan = require('./perpustakaan')
const Reader = require('./reader')

let history = new History('Awal Peradaban Callback', 'Bang Togar', 127,'Middle Earth')
let biography = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327,'Steve Wozniak')
let journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89)

let perpustakaan = new Perpustakaan()

perpustakaan.addBook(journal)
perpustakaan.addBook(biography)
perpustakaan.addBook(history)
// console.log(biography.total_page) // 'Banyak halamannya capek ngitungnya'
// console.log(journal.total_page) // 89

// console.log(perpustakaan.books)

let sarah = new Reader('Sarah','Jakarta Selatan', '081267895467')
let zakia = new Reader('Zakia','Jakarta Timur', '089767895467')
let komara = new Reader('Komara','Jakarta Selatan', '082263485467')
perpustakaan.addReader(sarah)
perpustakaan.addReader(zakia)
perpustakaan.addReader(komara)

//console.log(perpustakaan.readers)
let book = new Book()
biography.addMember('sahara')
biography.borrow('Orang Dibalik Apple', 'sahara') 
biography.borrow('Orang Dibalik Apple', 'sahara') 

console.log(perpustakaan.books)
