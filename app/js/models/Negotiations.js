System.register([], function (exports_1, context_1) {
    "use strict";
    var Negotiation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(_date, _quantity, _value, _volume = 10) {
                    this._date = _date;
                    this._quantity = _quantity;
                    this._value = _value;
                    this._volume = _volume;
                }
                get date() {
                    return this._date;
                }
                get quantity() {
                    return this._quantity;
                }
                get value() {
                    return this._value;
                }
                get volume() {
                    return this._volume;
                }
            };
            exports_1("default", Negotiation);
        }
    };
});
