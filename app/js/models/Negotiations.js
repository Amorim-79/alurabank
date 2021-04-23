"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negotiation = void 0;
class Negotiation {
    constructor(date, quantity, value) {
        this.date = date;
        this.quantity = quantity;
        this.value = value;
    }
    get volume() {
        return this.quantity * this.value;
    }
    isEquals(object) {
        if (this.date === object.date &&
            this.quantity === object.quantity &&
            this.value === object.value) {
            return true;
        }
        return false;
    }
    ;
}
exports.Negotiation = Negotiation;
