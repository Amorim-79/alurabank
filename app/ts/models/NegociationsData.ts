class NegociationsData {
    private negociations: Negociation[] = [];

    public addNegociations(negociation: Negociation): void {
        this.negociations.push(negociation);
    }

    public getNegociations(): Negociation[] {
        return <Negociation[]>[].concat(this.negociations);
    }
}