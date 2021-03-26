class NegociationController {
    constructor() {
        this.negociations = new NegociationsData();
        this.negociationsView = new NegociationsView('#negociationsView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.negociationsView.update(this.negociations);
    }
    addNegociations(event) {
        event.preventDefault();
        const negociation = new Negociation(new Date(this.inputDate.value.replace(/-/g, ',')), Number(this.inputQuantity.value), Number(this.inputValue.value));
        this.negociations.addNegociations(negociation);
        this.negociationsView.update(this.negociations);
    }
}
