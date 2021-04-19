import { Negotiation } from "./Models.module";

export class NegotiationsData {
    private negotiations: Negotiation[] = [];

    public addNegotiations(negotiation: Negotiation): void {
        this.negotiations.push(negotiation);
    }

    public getNegotiations(): Negotiation[] {
        return ([] as Negotiation[]).concat(this.negotiations);
    }
}