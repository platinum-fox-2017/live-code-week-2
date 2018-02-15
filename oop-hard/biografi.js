class Biography extends Book {
  constructor(title,author,totalPages,readingDays,isAvail,figure,borrower) {
    super(title,author,totalPages,readingDays,isAvail,figure,borrower);
    this.figure = figure;
    this.borrower = borrower;
  }
}

module.exports = Biography;
