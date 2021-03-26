class NegociationController {
    
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negociations = new NegociationsData();
    private negociationsView = new NegociationsView('#negociationsView');

    constructor() {
        this.inputDate = <HTMLInputElement>document.querySelector('#date');
        this.inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
        this.inputValue = <HTMLInputElement>document.querySelector('#value');
        this.negociationsView.update();
    }

    public addNegociations(event: Event) {
        event.preventDefault();

        const negociation = new Negociation(
            new Date(this.inputDate.value.replace(/-/g, ',')),
            Number(this.inputQuantity.value),
            Number(this.inputValue.value),
        );

        this.negociations.addNegociations(negociation);
    }
}