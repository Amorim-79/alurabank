import Negotiation from "../models/Negotiations";
import NegotiationsData from "../models/NegotiationsData";
import MessageView from "../views/MessageView";
import NegotiationsView from "../views/NegotiationsView";
export default class NegotiationController {
    constructor() {
        this.negotiations = new NegotiationsData();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = $('#date');
        this.inputQuantity = $('#quantity');
        this.inputValue = $('#value');
        this.negotiationsView.update(this.negotiations);
    }
    addNegotiations(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this.inputDate.val().toString().replace(/-/g, ',')), Number(this.inputQuantity.val()), Number(this.inputValue.val()));
        this.negotiations.addNegotiations(negotiation);
        this.messageView.update('The negotiation was successfully created!');
        this.negotiationsView.update(this.negotiations);
    }
}
