const Journal = require('./journal')
const Biography = require('./biography')
const History = require('./history')
const Perpustakaan = require('./perpustakaan')
const Readers = require('./readers')



const journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Uding', 89, 1, true)
const biography = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 4, true)
const history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 2, true)

const perpustakaan = new Perpustakaan()

perpustakaan.getBook(journal)
perpustakaan.getBook(biography)
perpustakaan.getBook(history)

// console.log(perpustakaan);

biography.totalPages()
journal.totalPages()

const deva = new Readers('Deva', 'Perumahan Pondok Indah', '140222')
const cecha = new Readers('Cecha', 'Pantai Indah Bapuk', '14045')
const dhiar = new Readers('Dhiar', 'Perumahan Kelapa Gading', '15100')

console.log(perpustakaan);

journal.borrow(deva)
biography.borrow(cecha)
history.borrow(dhiar)

console.log(perpustakaan);
