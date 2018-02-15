class Journal extends Book {
    constructor(){
        super()
        this.title = 'Jatuh Bangung Seorang Fullstack',
        this.author = 'Kang Udin',
        this._totalPages = 89,
        this.readingDays = 1,
        this.isAvail= true 
    }
}
module.exports = Journal;
