System.register(["../helpers/decorators/DomInject.decorator", "../models/Negotiations", "../models/NegotiationsData", "../views/MessageView", "../views/NegotiationsView"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var DomInject_decorator_1, Negotiations_1, NegotiationsData_1, MessageView_1, NegotiationsView_1, NegotiationController, DaysOfTheWeek;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DomInject_decorator_1_1) {
                DomInject_decorator_1 = DomInject_decorator_1_1;
            },
            function (Negotiations_1_1) {
                Negotiations_1 = Negotiations_1_1;
            },
            function (NegotiationsData_1_1) {
                NegotiationsData_1 = NegotiationsData_1_1;
            },
            function (MessageView_1_1) {
                MessageView_1 = MessageView_1_1;
            },
            function (NegotiationsView_1_1) {
                NegotiationsView_1 = NegotiationsView_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this.negotiations = new NegotiationsData_1.default();
                    this.negotiationsView = new NegotiationsView_1.default('#negotiationsView', true);
                    this.messageView = new MessageView_1.default('#messageView');
                    this.negotiationsView.update(this.negotiations);
                }
                addNegotiations(event) {
                    event.preventDefault();
                    const negotiation = new Negotiations_1.default(new Date(String(this.inputDate.val()).replace(/-/g, ',')), Number(this.inputQuantity.val()), Number(this.inputValue.val()));
                    if (this.isWeekend(negotiation.date)) {
                        return this.messageView.update('Negotiations accepted on business days only');
                    }
                    this.negotiations.addNegotiations(negotiation);
                    this.messageView.update('The negotiation was successfully created!');
                    this.negotiationsView.update(this.negotiations);
                }
                isWeekend(date) {
                    if (date.getDay() === DaysOfTheWeek.SUNDAY || date.getDay() === DaysOfTheWeek.SATURDAY) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            };
            __decorate([
                DomInject_decorator_1.domInject('#date')
            ], NegotiationController.prototype, "inputDate", void 0);
            __decorate([
                DomInject_decorator_1.domInject('#quantity')
            ], NegotiationController.prototype, "inputQuantity", void 0);
            __decorate([
                DomInject_decorator_1.domInject('#value')
            ], NegotiationController.prototype, "inputValue", void 0);
            exports_1("default", NegotiationController);
            (function (DaysOfTheWeek) {
                DaysOfTheWeek[DaysOfTheWeek["SUNDAY"] = 0] = "SUNDAY";
                DaysOfTheWeek[DaysOfTheWeek["MONDAY"] = 1] = "MONDAY";
                DaysOfTheWeek[DaysOfTheWeek["TUESDAY"] = 2] = "TUESDAY";
                DaysOfTheWeek[DaysOfTheWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
                DaysOfTheWeek[DaysOfTheWeek["THURSDAY"] = 4] = "THURSDAY";
                DaysOfTheWeek[DaysOfTheWeek["FRYDAY"] = 5] = "FRYDAY";
                DaysOfTheWeek[DaysOfTheWeek["SATURDAY"] = 6] = "SATURDAY";
            })(DaysOfTheWeek || (DaysOfTheWeek = {}));
        }
    };
});
