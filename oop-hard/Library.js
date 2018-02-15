const fs = require('fs');

const bookPath = './book_data.json';
const readerPath = './readers_data.json';

class Library {
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}

	get book () {
		Library.readFile(bookPath, function (dataObj) {
			console.log(dataObj);
		});
	}

	get reader () {
		Library.readFile(readerPath, function (dataObj) {
			console.log(dataObj);
		});
	}

	borrow(title, borrower) {
		Library.readFile(readerPath, function (dataReaderObj) {
			let flag = false;
			for (let i = 0; i < dataReaderObj.length; i++) {
				if (dataReaderObj[i].name == borrower) {
					flag = true;
					break;
				}
			}

			if (flag) {
				Library.readFile(bookPath, function (dataBookObj) {
					for (let i = 0; i < dataBookObj.length; i++) {
						if (dataBookObj[i].title == title) {
							if (dataBookObj[i].isAvail) {
								dataBookObj[i].isAvail = false;
								dataBookObj[i].borrower = borrower;
								Library.writeFile(bookPath, dataBookObj, function() {
									console.log(`Buku Berhasil Dipinjam Oleh ${borrower}`);
								});
							}
							else if (dataBookObj[i].borrower == borrower) console.log(`Buku Masih Anda Pinjam, Tolong Segera Dikembalikan`);
							else console.log(`Buku Sudah Dipinjam Oleh ${dataBookObj[i].borrower}`);
						}
					}
				});
			} else console.log('Pembaca belum terdaftar');
		});
	}

	return(title, borrower) {
		Library.readFile(readerPath, function (dataReaderObj) {
			let flag = false;
			for (let i = 0; i < dataReaderObj.length; i++) {
				if (dataReaderObj[i].name == borrower) {
					flag = true;
					break;
				}
			}

			if (flag) {
				Library.readFile(bookPath, function (dataBookObj) {
					for (let i = 0; i < dataBookObj.length; i++) {
						if (dataBookObj[i].title == title) {
							if (!dataBookObj[i].isAvail) {
								dataBookObj[i].isAvail = true;
								dataBookObj[i].borrower = '';
								Library.writeFile(bookPath, dataBookObj, function() {
									console.log(`Buku Telah Dikembalikan Oleh ${borrower}`);
								});
							}
						}
					}
				});
			} else console.log('Pembaca belum terdaftar');
		});
	}

	addBook(book) {
		Library.readFile(bookPath, function (dataObj) {
			let flag = false;
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].title == book.title) {
					flag = true;
					break;
				}
			}
			
			if (flag) {
				console.log('Data Buku Telah Disimpan Sebelumnya');
			} else {
				dataObj.push(book);
				Library.writeFile(bookPath, dataObj, function() {
					console.log(`Data Buku ${book.title} Telah Disimpan`);
				});
			}
		});
	}

	addReader(reader) {
		Library.readFile(readerPath, function (dataObj) {
			let flag = false;
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].name == reader.name) {
					flag = true;
					break;
				}
			}
			
			if (flag) {
				console.log('Data Pembaca Telah Disimpan Sebelumnya');
			} else {
				dataObj.push(reader);
				Library.writeFile(readerPath, dataObj, function() {
					console.log(`Data ${reader.name} Telah Disimpan`);
				});
			}
		});
	}

	static readFile(path, callback) {
		fs.readFile(path, 'utf8', function (err, data) {
			if (err) console.log(err);
			else {
				let dataObj = JSON.parse(data);
				callback(dataObj);
			}
		});
	}

	static writeFile(path, data, callback) {
		fs.writeFile(path, JSON.stringify(data), (err) => {
		  if (err) console.log(err);
		  callback();
		});
	}
}

module.exports = Library;