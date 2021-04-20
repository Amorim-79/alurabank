import { MyObject } from "./Object.model";

export class Negotiation implements MyObject {

    constructor(
        readonly date: Date,
        readonly quantity: number,
        readonly value: number,
    ) { }

    public get volume() : number {
        return this.quantity * this.value;
    }
    
    public isEquals(object: Negotiation): boolean {
        if (this.date === object.date &&
            this.quantity === object.quantity &&
            this.value === object.value
            ) {
            return true;
        }
        return false;
    };
    
}