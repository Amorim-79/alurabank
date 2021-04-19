System.register(["../../models/Models.module"], function (exports_1, context_1) {
    "use strict";
    var Models_module_1, NegotiationsService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Models_module_1_1) {
                Models_module_1 = Models_module_1_1;
            }
        ],
        execute: function () {
            NegotiationsService = class NegotiationsService {
                getNegotiaions(handler) {
                    return fetch('http://localhost:8080')
                        .then(response => handler(response))
                        .then(response => response.json())
                        .then((data) => {
                        data.map((negotiation) => (new Models_module_1.Negotiation(new Date(), negotiation.vezes, negotiation.montante)));
                    })
                        .catch((error) => error);
                }
            };
            exports_1("NegotiationsService", NegotiationsService);
        }
    };
});
