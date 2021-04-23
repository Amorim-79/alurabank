"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegotiationsData = void 0;
class NegotiationsData {
    constructor() {
        this.negotiations = [];
    }
    addNegotiations(negotiation) {
        this.negotiations.push(negotiation);
    }
    getNegotiations() {
        return [].concat(this.negotiations);
    }
}
exports.NegotiationsData = NegotiationsData;
