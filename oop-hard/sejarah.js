class History extends Book {
  constructor(title,author,totalPages,readingDays,isAvail,century,borrower) {
    super(title,author,totalPages,readingDays,isAvail,century,borrower);
    this.century = century;
    this.borrower = borrower;
  }
}

module.exports = History;
