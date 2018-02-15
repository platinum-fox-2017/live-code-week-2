const Library   = require('./Library');
const Journal   = require('./Journal');
const Bioghrapy = require('./Biography');
const History   = require('./History');
const Readers   = require('./Readers');
const fs        = require('fs');


let library     = new Library('Pondok Indah');

let bookData    = fs.readFileSync('./book.JSON','utf8');
let bookDataJSON    = JSON.parse(bookData); 

for(let i = 0; i < bookDataJSON.length; i++) {
    if(bookDataJSON[i].type == 'Journal') {
        var journal     = new Journal(bookDataJSON[i].title, bookDataJSON[i].author, bookDataJSON[i].totalPage, bookDataJSON[i].readingDays, bookDataJSON[i].isAvail,bookDataJSON[i].borrowers);
    } else if(bookDataJSON[i].type == 'Bioghrapy') {
        var bioghrapy     = new Bioghrapy(bookDataJSON[i].title, bookDataJSON[i].author, bookDataJSON[i].totalPage, bookDataJSON[i].readingDays, bookDataJSON[i].isAvail,bookDataJSON[i].figure,bookDataJSON[i].borrowers);
    } else {
       var history        = new History(bookDataJSON[i].title, bookDataJSON[i].author, bookDataJSON[i].totalPage, bookDataJSON[i].readingDays, bookDataJSON[i].isAvail,bookDataJSON[i].century,bookDataJSON[i].borrowers)
    }
}

console.log(bioghrapy.totalPage);
console.log(journal.totalPage);
console.log(" ");

var newJournal = new Journal('my journal', 'milo', '123', '5', true);

bookDataJSON.push(newJournal);
fs.writeFileSync('./book.JSON',JSON.stringify(bookDataJSON));

library.addBook(journal);
library.addBook(bioghrapy);
library.addBook(history);
library.addBook(newJournal);

console.log(library.book);
console.log(" ");

let readerData          = fs.readFileSync('./reader.JSON','utf8');
let readerDataJSON      = JSON.parse(readerData); 

for(let i = 0; i < readerDataJSON.length; i++) {
    var reader = new Readers(readerDataJSON[i].name,readerDataJSON[i].address,readerDataJSON[i].notelp);
    library.addReader(reader);
}

console.log(library.readers);
console.log(" ");

var newReaders = new Readers('Milo', 'sidoarjo', '081133421');
library.addReader(newReaders);
readerDataJSON.push(newReaders);
fs.writeFileSync('./reader.JSON',JSON.stringify(readerDataJSON));

library.borrow('Orang dibalik Apple', 'Reynaldi');
console.log(" ");
console.log(bioghrapy);
console.log(" ");

library.borrow('Orang dibalik Apple', 'Irsan');
console.log(" ");
library.borrow('Orang dibalik Apple', 'Abdul');
console.log(" ");
library.borrow('my journal','Milo')