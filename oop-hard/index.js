const fs=require('fs')
var Journal = require('./journal.js')
var History = require('./history.js')
var Biography = require('./biography.js')
var Readers = require('./pembaca.js')



class Perpustakaan{
  constructor(){
    this._name='Perpustakaan Javascript'
    this._book=[]
    this._pembaca=[]
  }

  addpembaca(nama,alamat,notelp){
    this._pembaca.push(new Readers(nama,alamat,notelp))
    return this
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
var journal = new Journal('Jatuh Bangung Seorang Fullstack','Kang Udin',89,1,true)
perpustakaan._book.push(journal)
var biography = new Biography('Orang Dibalik Apple','Mas Bejo',327,4,true,'Steve Wozniak')
perpustakaan._book.push(biography)
var history = new History('Awal Peradaban Callback','Bang Togar',127,2,true,'Middle Earth')
perpustakaan._book.push(history)

if(biography._totalpage>200){
  console.log('Banyak halamannya capek');
}else{
  console.log(biography._totalpage);
}
console.log(perpustakaan._book);
console.log('============== tambah pembaca==========');
perpustakaan.addpembaca('irsyadpahlapi','jl.kejaksaan','082383222152')
perpustakaan.addpembaca('eki','jl.bandung','08222222222')
console.log(perpustakaan._pembaca);
console.log();
console.log('============== peminjaman buku ===========');
perpustakaan.borrow('Jatuh Bangung Seorang Fullstack','irsyadpahlapi')
console.log();
console.log('============== cek buku ===========');
console.log(perpustakaan._book);
console.log();
console.log('============== cek buku yang sudah dipinjam ===========');
perpustakaan.borrow('Jatuh Bangung Seorang Fullstack','eki')

console.log();
console.log('============= input json =============');
let parsingjson = JSON.stringify(perpustakaan._book)
let parsingpembaca = JSON.stringify(perpustakaan._pembaca)
fs.writeFile('./data.json',parsingjson,function(err){})
fs.writeFile('./datapembaca.json',parsingpembaca,function(err){})
