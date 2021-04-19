System.register([], function (exports_1, context_1) {
    "use strict";
    var NegotiationsData;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NegotiationsData = class NegotiationsData {
                constructor() {
                    this.negotiations = [];
                }
                addNegotiations(negotiation) {
                    this.negotiations.push(negotiation);
                }
                getNegotiations() {
                    return [].concat(this.negotiations);
                }
            };
            exports_1("NegotiationsData", NegotiationsData);
        }
    };
});
