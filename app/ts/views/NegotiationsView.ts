import { NegotiationsData } from "../models/Models.module";
import View from "./View";

export class NegotiationsView extends View<NegotiationsData> {

    template(model: NegotiationsData): string {
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
                                <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                                <td>${negotiation.volume}</td>
                            </tr>
                        `)).join('')}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
                <script>alert('Welcome!')</script>
            `
    }
}
