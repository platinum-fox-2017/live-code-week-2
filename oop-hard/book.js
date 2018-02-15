let arrmember =[] 
class Book{
    constructor(title, author, total_page){
        this.title = title
        this.author = author
        this.total_page = total_page
        this.readingDays = Math.ceil(this.total_page/100)
        this.borrower = ''
        this.isAvail = true
    }
    addMember(member){
        arrmember.push(member)
        return arrmember
    }
    borrow(title, borrower){
        if(arrmember.indexOf(borrower)===0){
            if(this.title === title && this.isAvail===true){
                this.borrower = borrower
                this.isAvail = false
                console.log('Buku Berhasil Dipinjam')
            }else{
                console.log('Buku dalam keadaan dipinjam')
            }
        }else{
            console.log('Daftar jadi member dulu')
        }
        
    }
}

class Journal extends Book{
    constructor(title, author, total_page){
        super(title, author, total_page)
    }
}

class Biography extends Book{
    constructor(title, author, total_page,figure){
        super(title, author, total_page)
        this.figure = figure
    }
}

class History extends Book{
    constructor(title, author, total_page,figure){
        super(title, author, total_page)
        this.figure = figure
    }
}

module.exports = {
    Book,
    Journal,
    Biography,
    History
}
