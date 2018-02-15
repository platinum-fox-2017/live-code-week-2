const fs = require('fs')

const Journal = require('./journal')
const History = require('./history')
const Biography = require('./biography')
const Reader = require('./reader')

class Perpustakaan{
    constructor(name,address){
        this.name = name
        this.address = address
        this._books = []
        this._members = []
    }

    get member(){
        return this._members
    }

    get books(){
        return this._books
    }

    addBook(books){
        this._books.push(books)
        return this
    }

    addReader (name,address,phone){
        let newReader = new Reader (name,address,phone)
        this._members.push(newReader)
        return this
    }

    borrow(bookName, borrower){
        const lookingMember = this._members.filter(member=>{
            if(borrower === member.name){
                return member.name
            }
        })

        if(lookingMember.length === 0){
            return `Daftar jadi member dulu`
        }else{
            const lookingBook = this._books.filter(book=>{
                if (book.title === bookName){
                    return book
                }
            })

            if(lookingBook[0].isAvail === true){
                const setBookIsAvail = this._books.filter(book=>{
                    if (book.title === bookName && book.isAvail === true){
                        book.isAvail = false
                        book.borrower = borrower
                        return book
                    }
                })

                if(setBookIsAvail.length > 0){
                    return `Buku Berhasil Dipinjam`
                }
            }else{
                return `Buku Sudah Dipinjam`
            }
            
        }
    }

    writeFile(category){
        if(category === 'books'){
            let booksStringify = JSON.stringify(this._books)
            fs.writeFileSync('book.json',booksStringify,'UTF-8')
            console.log('data berhasil di write')
        }else if(category === 'members'){
            let membersStringify = JSON.stringify(this._members)
            fs.writeFileSync('member.json',membersStringify,'UTF-8')
            console.log('data berhasil di write')
        }else{
            console.log(`Anda mau write BOOKS atau MEMBERS ?`)
        }
    }
}

let javascript = new Perpustakaan('Perpustakaan Javascript','Pondok Indah')
let journal = new Journal ('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89)
let biography = new Biography ('Orang Dibalik Apple', 'Mas Bejo', 327, 'Steve Wozniak')
let history = new History ('Awal Peradaban Callback', 'Bang Togar', 127, 'Middle Earth')

javascript.addBook(journal).addBook(biography).addBook(history)
javascript.addReader('Kevin','Kedoya',082111161253).addReader('Ryan','Bekas',08121212121).addReader('Adhy','Jakarta',08212121).addReader('Erwin','Jakarta',12312321321)
// console.log(javascript.borrow('Jatuh Bangung Seorang Fullstack', 'Kevin'))
// console.log(javascript.borrow('Jatuh Bangung Seorang Fullstack', 'Ryan'))
// javascript.writeFile('members')


