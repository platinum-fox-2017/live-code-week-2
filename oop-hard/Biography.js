const Book = require('./Book.js');

class Biography extends Book {
	constructor(title, author, totalPages, readingDays, figure) {
		super(title, author, totalPages, readingDays);
		this.figure = figure;
	}
}

module.exports = Biography;