export default class Negotiation {

    constructor(
        private _date: Date,
        private _quantity: number,
        private _value: number,
        private _volume: number = 10,
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

    public get volume() : number {
        return this._volume;
    }
    
    
    
}