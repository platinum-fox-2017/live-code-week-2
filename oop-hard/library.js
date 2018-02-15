const fs = require('fs')

class Library {
    constructor(book) {
        this.book = []
        this.member = []
    }

    readFile() {
        const data = fs.readFileSync('./data.json', 'utf-8')
        const obj = JSON.parse(data)
        return obj
    }

    addBook(book) {
        this.book.push(book)
    }

    addMember(member) {
        this.member.push(member)
    }

    borrow(title, reader) {
        if (title.isAvail === true) {
            for (let i = 0; i < this.member.length; i++) {
                if (reader.name === this.member[i].name) {
                    title.isAvail = false
                    title.rent = reader.name
                    console.log('Buku Berhasil Dipinjam')
                    // console.log(title)
                    let data = this.readFile()
                    data.push({
                        book: title,
                        renter: reader
                    })
                    let stringfy = JSON.stringify(data)
                    fs.writeFileSync('./data.json', stringfy)

                } else {
                    console.log('Jadi member dulu');

                }
            }
        } else {
            console.log('Buku Sudah Dipinjam')
        }
    }
}

module.exports = Library