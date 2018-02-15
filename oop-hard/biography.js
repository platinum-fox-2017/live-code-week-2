class Biography extends Book {
    constructor(){
        super()
        this.title = 'Orang Dibalik Apple',
        this.author = 'Mas Bejo',
        this._totalPages = 327,
        this.readingDays = 4,
        this.isAvail = true,
        this.figure = 'Steve Wozniak'
    }
}
module.exports = Biography;
