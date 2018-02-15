class Book{
    constructor(title,author,totalPage){
        this.title = title
        this.author = author
        this.totalPage = totalPage
        this.readingDays = Math.ceil(this.totalPage / 100)
        this.borrower = ""
        this.isAvail = true
    }

    get totalpage (){
        if(this.totalPage >= 200){
            return `Banyak halamannya capek ngitungnya`
        }else if(this.totalPage < 200){
            return this.totalPage
        }
    }
}

module.exports = Book