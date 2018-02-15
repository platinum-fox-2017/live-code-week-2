"use strict"



class Perpus{
  constructor(name,alamat){
    this._name=name
    this._alamat=alamat
    this._kumpulanBuku=[]

  }
  addBuku(name,title,author,totalPages,readingDays,isAvail){

    if(name==='Journal'){
        this._kumpulanBuku.push(new Journal(title,author,totalPages,readingDays,isAvail))
    }
    else if(name==='Biography'){
        this._kumpulanBuku.push(new Biography(title,author,totalPages,readingDays,isAvail))
    }
    else if(name==='History'){
        this._kumpulanBuku.push(new History(title,author,totalPages,readingDays,isAvail))
    }

    return this._kumpulanBuku
  }



}

class Buku{
  constructor(title,author,totalPages,readingDays,isAvail){
    this._title=title
    this._author=author
    this._totalPages=totalPages
    this._readingDays=totalPages
    this._isAvail=totalPages
    // this._peminjam=peminjam
  }



}

class Journal extends Buku{
  constructor(title,author,totalPages,readingDays,isAvail){
    super(title,author,totalPages,readingDays,isAvail)

  }


}

class Biography extends Buku{
  constructor(title,author,totalPages,readingDays,isAvail){
    super(title,author,totalPages,readingDays,isAvail)
     this._figure= 'Steve Wozniak'
  }
}


class History extends Buku{
  constructor(name,title,author,totalPages,readingDays,isAvail){
    super(name,title,author,totalPages,readingDays,isAvail)
    this._century= 'Middle Earth'
  }
}

class Readers{
  constructor(nama, alamat, notelp){
    this._nama=nama,
    this._alamat=_alamat,
    this._notelp=notelp
  }

  pinjam(){

  }
}


let newPerpus=new Perpus('Perpustakaan Javascript','Pondok Indah')
let newBiography=new Biography()
let newJournal=new Journal()

// console.log(newBiography)
newPerpus.addBuku('Journal','Jatuh Bangung Seorang Fullstack','Kang Udin',89,1,true)
newPerpus.addBuku('Biography','Orang Dibalik Apple','Mas Bejo','327','4',true,'Steve Wozniak')
newPerpus.addBuku('History','Awal Peradaban Callback,Bang Togar',127,2,true,'Middle Earth')


console.log(newPerpus._kumpulanBuku)
