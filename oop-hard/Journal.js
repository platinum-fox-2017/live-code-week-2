const Book = require('./Book.js');

class Journal extends Book {
	constructor(title, author, totalPages, readingDays) {
		super(title, author, totalPages, readingDays);
	}
}

module.exports = Journal;