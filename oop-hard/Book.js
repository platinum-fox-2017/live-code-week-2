class Book {
	constructor(title, author, totalPages) {
		this.title = title;
		this.author = author;
		this._totalPages = totalPages;
		this.readingDays = this.generateReadingDays(totalPages);
		this.isAvail = true;
		this.borrower = '';
	}

	generateReadingDays(totalPages) {
		return Math.ceil(totalPages/100);
	}

	get totalPages() {
		return this._totalPages <= 200 ? this._totalPages : 'Banyak halamannya capek ngitungnya';
	}
}

module.exports = Book;