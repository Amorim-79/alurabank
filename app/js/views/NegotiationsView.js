import View from "./View";
export default class NegotiationsView extends View {
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
                        ${model.getNegotiations().map(negotiation => (`
                            <tr>
                                <td>${negotiation.date.getDate()}/${negotiation.date.getMonth()}/${negotiation.date.getFullYear()}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                                <td>${negotiation.volume}</td>
                            </tr>
                        `)).join('')}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
            `;
    }
}
