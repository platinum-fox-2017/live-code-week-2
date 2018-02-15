const fs = require('fs');

class Library {
	constructor(name, address, book) {
		this.name = name;
		this.address = address;
		this.book = book;
		this.readers = [];
	}

	borrow(title, borrower) {
		for (let i = 0; i < this.book.length; i++) {
			if (this.book[i].title == title) {
				if (this.book[i].isAvail) {
					this.book[i].isAvail = false;
					this.book[i].borrower = borrower;
					console.log('Buku Berhasil Dipinjam');
				}
				else console.log('Buku Sudah Dipinjam');
			}
		}
	}

	addReader(reader) {
		this.readers.push(reader);
	}

	static writeFile(path, data, callback) {
		fs.writeFile(path, JSON.stringify(data), (err) => {
		  if (err) console.log(err);
		  callback();
		});
	}
}

module.exports = Library;