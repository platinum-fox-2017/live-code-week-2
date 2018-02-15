class Book {
    constructor(title, author, total_page) {
        this.title = title
        this.author = author
        this.total_page = total_page
        this.reading_days = Math.round(total_page / 100)
    }

    totalPages() {
        if (this.total_page > 200) {
            return `Banyak halamannya capek ngitungnya`
        } else {
            return this.total_page
        }
    }

}

class Journal extends Book {
    constructor(title, author, total_page) {
        super(title, author, total_page)
    }

}

class Biography extends Book {
    constructor(title, author, total_page, figure) {
        super(title, author, total_page)
        this.figure = figure
    }
}

class History extends Book {
    constructor(title, author, total_page, century) {
        super(title, author, total_page)
        this.century = century
    }
}

let journal = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89)
console.log(journal)
console.log(journal.totalPages());

let bio = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 'Steve Wozniak')
console.log(bio)
console.log(bio.totalPages())

let history = new History('Awal Peradaban Callback', 'Bang Togar', 127, 'Middle Earth')
console.log(history)


