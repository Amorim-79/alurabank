System.register(["./controllers/NegotiationController"], function (exports_1, context_1) {
    "use strict";
    var NegotiationController_1, negotiationController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegotiationController_1_1) {
                NegotiationController_1 = NegotiationController_1_1;
            }
        ],
        execute: function () {
            negotiationController = new NegotiationController_1.default();
            $('.form').on('submit', negotiationController.addNegotiations.bind(negotiationController));
            $('#import-button').on('click', negotiationController.importNegotiations.bind(negotiationController));
        }
    };
});
