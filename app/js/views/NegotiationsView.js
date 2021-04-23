"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegotiationsView = void 0;
const View_1 = require("./View");
class NegotiationsView extends View_1.default {
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
            `;
    }
}
exports.NegotiationsView = NegotiationsView;
