"use strict"

const Library = require('./libraryClass.js')
const Readers = require('./readerClass.js')

var perpustakaan = new Library("Perpustakaan Javascript", "Pondok Indah");

perpustakaan.addJournalBook("Jatuh Bangung Seorang Fullstack", "Kang Udin", 89);
perpustakaan.addBiographyBook("Orang Dibalik Apple", "Mas Bejo", 327, "Steve Wozniak");
perpustakaan.addHistoryBook("Awal Peradaban Callback", "Bang Togar", 127, "Middle Earth")

var ervan = new Readers("Ervan", "Mana aja boleh", "123-4567-8910");
var kambing = new Readers("Kambing", "Mana aja boleh", "123-4567-8910");
var sapi = new Readers("Sapi", "Mana aja boleh", "123-4567-8910");
perpustakaan.addMember(ervan)
perpustakaan.addMember(kambing)
console.log(perpustakaan.book)


perpustakaan.borrow("Orang Dibalik Apple", "Ervan");
perpustakaan.borrow("Orang Dibalik Apple", "Kambing");
perpustakaan.borrow("Orang Dibalik Apple", "Sapi");
