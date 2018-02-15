const Book = require('./Book.js');

class History extends Book {
	constructor(title, author, totalPages, readingDays, century) {
		super(title, author, totalPages, readingDays);
		this.century = century;
	}
}

module.exports = History;