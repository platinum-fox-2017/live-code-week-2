class Journal extends Book {
  constructor(title,author,totalPages,readingDays,isAvail,borrower) {
    super(title,author,totalPages,readingDays,isAvail,borrower);
    this.borrower = borrower;
  }
}

module.exports = Journal;
