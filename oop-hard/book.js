class Book{
  constructor(title,author,total_pages,peminjam){
    this.title = title
    this.author = author
    this.total_pages = this.jumlahHalaman(total_pages)
    this.reading_days = Math.ceil(this.total_pages/100)
    this.peminjam = peminjam || null
    this.isAvail = true

  }
  jumlahHalaman(page){
    if(page>200){
      return 'Banyak halamannya capek ngitungnya'
    }else{
      return page
    }
  }
}

module.exports = Book