class Negociation {
    constructor(_date, _quantity, _value, _volume = 10) {
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
        this._volume = _volume;
    }
    get date() {
        return this._date;
    }
    get quantity() {
        return this._quantity;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return this._volume;
    }
}
