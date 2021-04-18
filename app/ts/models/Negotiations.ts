export default class Negotiation {

    constructor(
        readonly date: Date,
        readonly quantity: number,
        readonly value: number,
    ) { }

    public get volume() : number {
        return this.quantity * this.value;
    }
    
    
    
}