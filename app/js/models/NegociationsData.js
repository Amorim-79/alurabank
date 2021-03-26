class NegociationsData {
    constructor() {
        this.negociations = [];
    }
    addNegociations(negociation) {
        this.negociations.push(negociation);
    }
    getNegociations() {
        return [].concat(this.negociations);
    }
}
