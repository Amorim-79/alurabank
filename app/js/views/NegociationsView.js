class NegociationsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(negocations) {
        this.element.innerHTML = this.template(negocations);
    }
    template(model) {
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
        `;
    }
}
