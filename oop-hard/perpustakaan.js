const fs = require('fs')
// RELEASE 2

//     buatlah method addReader untuk menginput object pembaca kedalam property perpustakaan
//     tambahkan validasi didalam method borrow untuk memvalidasi apakah pembaca ada didalam list pembaca. 
//     jika nama tidak ada didalam list object pembaca maka method akan mereturn 'Daftar jadi member dulu'

class Perpustakaan{
  constructor(){
    this.name = 'Perpustakaan Javascript'
    this.alamat = 'Pondok Indah'
    this.books = []
    this.pembaca = []
  }
  insertBook(book){
    this.books.push(book)
  }

  borrowBook(judulBuku,objPembaca){
    // console.log(judulBuku,objPembaca.nama)
    // for(let b=0;b<this.pembaca.length;b++){
    //   if(objPembaca.name !== this.pembaca[b].name){
    //     console.log('Daftar jadi member dulu')
    //     // break;
    //   }
      // else{
        for(let i=0;i<this.books.length;i++){
          // console.log(this.books[i],'============')
          // console.log('-------'+judulBuku+'--------------')
          // console.log('---------'+this.books[i].title+'----------')
          if(this.books[i].title == judulBuku){
            // console.log(judulBuku,'--------------')
            if(this.books[i].isAvail == true){
              console.log('Buku berhasil dipinjam')
              this.books[i].peminjam = objPembaca
              this.books[i].isAvail = false
            }else{
              console.log('Buku dalam keadaan dipinjam')
              // break;
            }
          }
        }
      // }
    // }
    

  }
  addReader(){
    // let readerBook =[]
    for(let i =0;i<this.books.length;i++){
      // console.log(this.books[i].peminjam)
      if(this.books[i].peminjam !== null){
        this.pembaca.push(this.books[i].peminjam)
      }
    }
    // console.log(this.pembaca)
  }

  writeFile(){
    let data = this.books
    // console.log(data)
    let arrData =[]
    for(let i=0;i<this.books.length;i++){
      let obj = {
        dataBuku : this.books[i],
        peminjam: this.books[i].peminjam
      }
      arrData.push(obj)
    }
    // console.log(arrData)
    fs.writeFileSync('databuku.json',JSON.stringify(arrData),'utf8')
  }
}




module.exports = Perpustakaan

