class Perpustakaan {
    constructor(){
        this.name = 'Perpustakaan Javascript';
        this.location = 'Pondok Indah';
        this.dibangun = 'saudagar kaya';
        this.book = [];
        this.pembaca = [];
    }
    acquire_book(new_book){
        this.book.push(new_book);
    }
    addReader(new_reader){
        this.pembaca.push(new_reader);
    }
}
class Book {
    constructor(title,author,_totalPages){
    this.title = title
    this.author = author
    this._totalPages = _totalPages
    this.readingDays= null;
    this.isAvail= true 
    this.peminjam = null;
    }
    get totalPages(){
        if(this._totalPages > 200){
            return 'Banyak halamannya capek ngitungnya';
        }
        return this._totalPages;
    }
    static borrow(judulBuku,namaPembaca){
        let counter =0;
        if(judulBuku.isAvail === false){
            console.log('Buku dalam keadaan dipinjam');
        } else if (judulBuku.isAvail === true){
            for(let i=0; i<perpustakaan.pembaca.length; i++){
                if(perpustakaan.pembaca[i].nama === namaPembaca.nama){
                    judulBuku.isAvail = false;
                    judulBuku.peminjam = namaPembaca.nama;
                    console.log('Buku berhasil dipinjam');
                } else {
                    counter += 1;
                }
            }
            if(counter === perpustakaan.pembaca.length){
                console.log('Daftar jadi member dulu')
            }
        }
    }
}
class Journal extends Book {
    constructor(){
        super()
        this.title = 'Jatuh Bangung Seorang Fullstack',
        this.author = 'Kang Udin',
        this._totalPages = 89,
        this.readingDays = 1,
        this.isAvail= true 
    }
}
class Biography extends Book {
    constructor(){
        super()
        this.title = 'Orang Dibalik Apple',
        this.author = 'Mas Bejo',
        this._totalPages = 327,
        this.readingDays = 4,
        this.isAvail = true,
        this.figure = 'Steve Wozniak'
    }
}
class History extends Book {
    constructor(){
        super()
        this.title = 'Awal Peradaban Callback',
        this.author = 'Bang Togar',
        this._totalPages = 127,
        this.readingDays = 2,
        this.isAvail = true,
        this.century = 'Middle Earth'
    }
}

let biography = new Biography();
// console.log(biography);
let journal = new Journal();
// console.log(journal);
// console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
// console.log(journal.totalPages) // 89
let history = new History();


let perpustakaan = new Perpustakaan();
perpustakaan.acquire_book(journal);
perpustakaan.acquire_book(biography);
perpustakaan.acquire_book(history);
// console.log(perpustakaan.book);


class Readers {
    constructor(nama,alamat,notelp){
        this.nama = nama;
        this.alamat = alamat;
        this.notelp = notelp;
    }
}
let dennis = new Readers('dennis','Lebak Bulus','123');
// console.log(dennis);

Book.borrow(journal,dennis);
// console.log(journal);
perpustakaan.addReader(dennis);
Book.borrow(journal,dennis);





// ### RELEASE 3
// - Pisahkan masing-masih class menjadi 1 class 1 file
// - input data buku dan peminjam kedalam file json
