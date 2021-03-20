class Negociation {
    private _date;
    private _quantity;
    private _value;

    constructor(date, quantity, value) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }

    
    public get date() : string {
        return this._date;
    }

    
    public get quantity() : string {
        return this._quantity;
    }

    
    public get value() : string {
        return this._value;
    }
    
    
    
}