class NegotiationController {
    constructor() {
        this.negotiations = new NegotiationsData();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.negotiationsView.update(this.negotiations);
    }
    addNegotiations(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this.inputDate.value.replace(/-/g, ',')), Number(this.inputQuantity.value), Number(this.inputValue.value));
        this.negotiations.addNegotiations(negotiation);
        this.messageView.update('The negotiation was successfully created!');
        this.negotiationsView.update(this.negotiations);
    }
}
