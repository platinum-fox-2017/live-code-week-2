class Perpustakaan {
  constructor() {
    this.bookCollection = [];
    this.reader = [];
  }

  addBook(input){
    this.bookCollection.push(input);
  }

  addReader(name){
    this.reader.push(name);
  }
}
