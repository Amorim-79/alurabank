class Negociation {

    constructor(
        private _date: Date,
        private _quantity: number,
        private _value: number
    ) { }

    
    public get date() : Date {
        return this._date;
    }

    
    public get quantity() : number {
        return this._quantity;
    }

    
    public get value() : number {
        return this._value;
    }
    
    
    
}