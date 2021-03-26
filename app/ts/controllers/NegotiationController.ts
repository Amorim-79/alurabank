class NegotiationController {
    
    private inputDate: JQuery;
    private inputQuantity: JQuery;
    private inputValue: JQuery;
    private negotiations = new NegotiationsData();
    private negotiationsView = new NegotiationsView('#negotiationsView');
    private messageView = new MessageView('#messageView');

    constructor() {
        this.inputDate = $('#date');
        this.inputQuantity = $('#quantity');
        this.inputValue = $('#value');
        this.negotiationsView.update(this.negotiations);
    }

    public addNegotiations(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this.inputDate.val().toString().replace(/-/g, ',')),
            Number(this.inputQuantity.val()),
            Number(this.inputValue.val()),
        );

        this.negotiations.addNegotiations(negotiation);
        this.messageView.update('The negotiation was successfully created!');
        this.negotiationsView.update(this.negotiations);
    }
}