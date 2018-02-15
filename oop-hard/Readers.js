class Readers {
    constructor(name,address,notelp) {
        this._name      = name;
        this._address   = address;
        this._notelp    = notelp;
    }

    get name() {
        return this._name
    }

    get address() {
        return this._address;
    }

    get notelp() {
        return this._notelp;
    }
}

module.exports = Readers;