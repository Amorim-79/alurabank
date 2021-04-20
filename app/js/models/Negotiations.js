System.register([], function (exports_1, context_1) {
    "use strict";
    var Negotiation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, quantity, value) {
                    this.date = date;
                    this.quantity = quantity;
                    this.value = value;
                }
                get volume() {
                    return this.quantity * this.value;
                }
                isEquals(object) {
                    if (this.date === object.date &&
                        this.quantity === object.quantity &&
                        this.value === object.value) {
                        return true;
                    }
                    return false;
                }
                ;
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
