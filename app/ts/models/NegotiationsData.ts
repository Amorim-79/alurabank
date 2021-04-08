import Negotiation from "./Negotiations";

export default class NegotiationsData {
    private negotiations: Negotiation[] = [];

    public addNegotiations(negotiation: Negotiation): void {
        this.negotiations.push(negotiation);
    }

    public getNegotiations(): Negotiation[] {
        return <Negotiation[]>[].concat(this.negotiations);
    }
}