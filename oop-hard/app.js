const Reader = require('./reader')
const Journal = require('./journal')
const History = require('./history')
const Biography = require('./biography')
const Perpustakaan = require('./perpustakaan')




let journal = new Journal('Jatuh Bangung Seorang Fullstack','Kang Udin',89)
// console.log(journal)
let biography = new Biography('Orang Dibalik Apple','Mas Bejo',327,'Steve Wozniak')
let history = new History('Awal Peradaban callback','Bang Togar',127,'Middle Earth')
// console.log(biography)
// console.log(history)
let perpustakaan = new Perpustakaan()
perpustakaan.insertBook(journal)
perpustakaan.insertBook(biography)
perpustakaan.insertBook(history)
// console.log(perpustakaan)

// ### Contoh Test Case
// javascript
// console.log(biography.total_pages) // 'Banyak halamannya capek ngitungnya'
// console.log(journal.total_pages) // 89


// javascript
// console.log(perpustakaan.books)
// output akan seperti ini:

// [ Journal {
//     title: 'Jatuh Bangung Seorang Fullstack',
//     author: 'Kang Udin',
//     _totalPages: 89,
//     readingDays: 1,
//     isAvail: true },
//   Biography {
//     title: 'Orang Dibalik Apple',
//     author: 'Mas Bejo',
//     _totalPages: 327,
//     readingDays: 4,
//     isAvail: true,
//     figure: 'Steve Wozniak' },
//   History {
//     title: 'Awal Peradaban Callback',
//     author: 'Bang Togar',
//     _totalPages: 127,
//     readingDays: 2,
//     isAvail: true,
//     century: 'Middle Earth' } ]
let ani = new Reader('Ani','Jakarta selatan','021123456')
let budi = new Reader('Budi','Jakarta selatan','021445123456')
// console.log(ani)

// contoh test Case
//   javascript
perpustakaan.borrowBook('Jatuh Bangung Seorang Fullstack', ani)
perpustakaan.borrowBook('Jatuh Bangung Seorang Fullstack', budi)
perpustakaan.borrowBook('Awal Peradaban callback', budi)// Buku Berhasil Dipinjam
//   // atau
//   xxxx.borrow([judulBuku], [namaPembaca]) // Buku Sudah Dipinjam
// console.log(perpustakaan.books)
perpustakaan.addReader()
// console.log(perpustakaan)
let alice =new Reader('Alice','Jakarta barat','021445123456')
// console.log(perpustakaan.borrowBook('Orang Dibalik Apple',alice))
perpustakaan.writeFile()