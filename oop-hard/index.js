var Journal = require('./journal.js')
var History = require('./history.js')
var Biography = require('./biography.js')
var Readers = require('./pembaca.js')



class Perpustakaan{
  constructor(){
    this._name='Perpustakaan Javascript'
    this._book=this.bukuawal()
    this._pembaca=this.addpembaca() || []
  }

  bukuawal(){
    var books=[]
    books.push(new Journal('Jatuh Bangung Seorang Fullstack','Kang Udin',89,1,true))
    books.push(new Biography('Orang Dibalik Apple','Mas Bejo',327,4,true,'Steve Wozniak'))
    books.push(new History('Awal Peradaban Callback','Bang Togar',127,2,true,'Middle Earth'))
    return books
  }

  addpembaca(nama,alamat,notelp){
    this.pembaca.push(new Readers(nama,alamat,notelp))
  }

  borrow(judulbuku,namapembaca){
    for(let i=0;i<this._book.length;i++){
      if(judulbuku===this._book[i]._title){
        if(this._book[i]._isavail===false){
          console.log('Buku Sudah Dipinjam');
        }else{
          this._book[i]._isavail=false
          this._book[i].peminjam=namapembaca
          console.log('buku berhasil dipinjam');
        }
      }
    }
  }

}




var perpustakaan = new Perpustakaan()
console.log(perpustakaan._book);
perpustakaan.borrow('Jatuh Bangung Seorang Fullstack','irsyadpahlapi')
console.log(perpustakaan._book);
perpustakaan.borrow('Jatuh Bangung Seorang Fullstack','eki')
