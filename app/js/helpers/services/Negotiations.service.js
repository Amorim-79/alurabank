"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegotiationsService = void 0;
const Models_module_1 = require("../../models/Models.module");
class NegotiationsService {
    getNegotiaions(handler) {
        return fetch('http://localhost:8080')
            .then(response => handler(response))
            .then(response => response.json())
            .then((data) => {
            data.map((negotiation) => (new Models_module_1.Negotiation(new Date(), negotiation.vezes, negotiation.montante)));
        })
            .catch((error) => error);
    }
}
exports.NegotiationsService = NegotiationsService;
