class NegotiationController {
    
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new NegotiationsData();
    private negotiationsView = new NegotiationsView('#negotiationsView');
    private messageView = new MessageView('#messageView');

    constructor() {
        this.inputDate = <HTMLInputElement>document.querySelector('#date');
        this.inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
        this.inputValue = <HTMLInputElement>document.querySelector('#value');
        this.negotiationsView.update(this.negotiations);
    }

    public addNegotiations(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this.inputDate.value.replace(/-/g, ',')),
            Number(this.inputQuantity.value),
            Number(this.inputValue.value),
        );

        this.negotiations.addNegotiations(negotiation);
        this.messageView.update('The negotiation was successfully created!');
        this.negotiationsView.update(this.negotiations);
    }
}