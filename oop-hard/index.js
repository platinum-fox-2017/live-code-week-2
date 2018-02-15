

let biography = new Biography();
// console.log(biography);
let journal = new Journal();
// console.log(journal);
// console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
// console.log(journal.totalPages) // 89
let history = new History();


let perpustakaan = new Perpustakaan();
perpustakaan.acquire_book(journal);
perpustakaan.acquire_book(biography);
perpustakaan.acquire_book(history);
// console.log(perpustakaan.book);

let dennis = new Readers('dennis','Lebak Bulus','123');
// console.log(dennis);

Book.borrow(journal,dennis);
// console.log(journal);
perpustakaan.addReader(dennis);
Book.borrow(journal,dennis);
