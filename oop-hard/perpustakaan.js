const Biography = require ('./biography.js')
const History = require ('./history.js')
const Journal = require ('./journal.js')


class Perpustakaan {
  constructor(name) {
    this.name = name
    this.books = []
  }

  addBooks(book){
    this.books.push(book)
  }
}

let perpus = new Perpustakaan('perpus')
// console.log(perpus);
let journal1 = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,)
let biography1 = new Biography('Orang Dibalik Apple','Mas Bejo',327,'Steve Wozniak')
let history1 = new History('Awal Peradaban Callback','Bang Togar',127,'Middle Earth')
perpus.addBooks(journal1)
perpus.addBooks(biography1)
perpus.addBooks(history1)
console.log(perpus.books);
