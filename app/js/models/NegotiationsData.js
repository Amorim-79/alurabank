export default class NegotiationsData {
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
