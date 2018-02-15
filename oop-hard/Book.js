class Book {
	constructor(title, author, totalPages, readingDays) {
		this.title = title;
		this.author = author;
		this._totalPages = totalPages;
		this.readingDays = readingDays;
		this.isAvail = true;
		this.borrower = '';
	}

	get totalPages() {
		return this._totalPages <= 200 ? this._totalPages : 'Banyak halamannya capek ngitungnya';
	}
}

module.exports = Book;