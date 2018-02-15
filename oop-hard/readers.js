class Readers {
    constructor(nama, alamat, notelp){
        this._nama = nama;
        this._alamat = alamat;
        this._notelp = notelp;
    }

    get nama(){
        return this._nama;
    }
}

module.exports = Readers;