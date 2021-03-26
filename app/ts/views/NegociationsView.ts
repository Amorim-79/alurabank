class NegociationsView {

    private element: Element;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    public update(negocations: NegociationsData): void {
        this.element.innerHTML = this.template(negocations);
    }

    template(model: NegociationsData): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>VALUE</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.getNegociations().map(negociation => (`
                        <tr>
                            <td>${negociation.date.getDate()}/${negociation.date.getMonth()}/${negociation.date.getFullYear()}</td>
                            <td>${negociation.quantity}</td>
                            <td>${negociation.value}</td>
                            <td>${negociation.volume}</td>
                        </tr>
                    `)).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `
    }
}