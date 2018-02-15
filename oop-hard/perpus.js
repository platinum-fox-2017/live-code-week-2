"use strict"



class Perpus{
  constructor(name,alamat){
    this._name=name
    this._alamat=alamat
    this._kumpulanBuku=this.addBuku()
  }
  addBuku(name,title,author,totalPages,readingDays,isAvail){
    let arrBuku=[]
    if(name==='Journal'){
        arrBuku.push(new Journal(title,author,totalPages,readingDays,isAvail))
    }
    else if(name==='Biography'){
        arrBuku.push(new Biography(title,author,totalPages,readingDays,isAvail))
    }
    else if(name==='History'){
        arrBuku.push(new History(title,author,totalPages,readingDays,isAvail))
    }
    // console.log(arrBuku)
    console.log(arrBuku)
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


  totalPages(){
    console.log(newPerpus)
  }

}

class Journal extends Buku{
  constructor(title,author,totalPages,readingDays,isAvail){
    super(title,author,totalPages,readingDays,isAvail)

  }
  totalPages(){

    console.log(newPerpus);
  }

}

class Biography extends Buku{
  constructor(title,author,totalPages,readingDays,isAvail){
    super(title,author,totalPages,readingDays,isAvail)
    // this._title='Orang Dibalik Apple'
    // this._author='Mas Bejo'
    // this._totalPages= 327,
    // this._readingDays= 4,
    // this._isAvail=true
     this._figure= 'Steve Wozniak'
  }
}

class History extends Buku{
  constructor(title,author,totalPages,readingDays,isAvail){
    super(title,author,totalPages,readingDays,isAvail)
    // this._title= 'Awal Peradaban Callback',
    // this._author= 'Bang Togar',
    // this._totalPages= 127,
    // this._readingDays= 2,
    // this._isAvail= true,
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
newJournal.totalPages();
// console.log(newBiography)
newPerpus.addBuku('Journal','Jatuh Bangung Seorang Fullstack','Kang Udin',89,1,true)
newPerpus.addBuku('Biography','Orang Dibalik Apple','Mas Bejo','327','4',true,'Steve Wozniak')
newPerpus.addBuku('History','Awal Peradaban Callback,Bang Togar',127,2,true,'Middle Earth')

console.log(newPerpus._kumpulanBuku)
