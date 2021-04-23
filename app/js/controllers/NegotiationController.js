"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Decorators_module_1 = require("../helpers/decorators/Decorators.module");
const Services_module_1 = require("../helpers/services/Services.module");
const Models_module_1 = require("../models/Models.module");
const Views_module_1 = require("../views/Views.module");
class NegotiationController {
    constructor() {
        this.negotiations = new Models_module_1.NegotiationsData();
        this.negotiationsView = new Views_module_1.NegotiationsView('#negotiationsView', true);
        this.messageView = new Views_module_1.MessageView('#messageView');
        this.negotiationsService = new Services_module_1.NegotiationsService();
        this.negotiationsView.update(this.negotiations);
    }
    importNegotiations() {
        this.negotiationsService.getNegotiaions(this.validateResponse)
            .then((response) => {
            const latestNegotiations = this.negotiations.getNegotiations();
            response.filter((negotiation) => {
                !latestNegotiations.some((latestNegotiation) => negotiation.isEquals(latestNegotiation));
            }).forEach((negotiation) => this.negotiations.addNegotiations(negotiation));
        })
            .catch((error) => this.messageView.update(error));
    }
    addNegotiations(event) {
        const negotiation = new Models_module_1.Negotiation(new Date(String(this.inputDate.val()).replace(/-/g, ',')), Number(this.inputQuantity.val()), Number(this.inputValue.val()));
        if (this.isWeekend(negotiation.date)) {
            return this.messageView.update('Negotiations accepted on business days only');
        }
        this.negotiations.addNegotiations(negotiation);
        this.messageView.update('The negotiation was successfully created!');
        this.negotiationsView.update(this.negotiations);
    }
    validateResponse(response) {
        if (response.ok) {
            return response;
        }
        else {
            throw new Error(response.statusText);
        }
    }
    isWeekend(date) {
        if (date.getDay() === DaysOfTheWeek.SUNDAY || date.getDay() === DaysOfTheWeek.SATURDAY) {
            return true;
        }
        else {
            return false;
        }
    }
}
__decorate([
    Decorators_module_1.domInject('#date')
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    Decorators_module_1.domInject('#quantity')
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    Decorators_module_1.domInject('#value')
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    Decorators_module_1.throttle()
], NegotiationController.prototype, "importNegotiations", null);
__decorate([
    Decorators_module_1.throttle()
], NegotiationController.prototype, "addNegotiations", null);
exports.default = NegotiationController;
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUNDAY"] = 0] = "SUNDAY";
    DaysOfTheWeek[DaysOfTheWeek["MONDAY"] = 1] = "MONDAY";
    DaysOfTheWeek[DaysOfTheWeek["TUESDAY"] = 2] = "TUESDAY";
    DaysOfTheWeek[DaysOfTheWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DaysOfTheWeek[DaysOfTheWeek["THURSDAY"] = 4] = "THURSDAY";
    DaysOfTheWeek[DaysOfTheWeek["FRYDAY"] = 5] = "FRYDAY";
    DaysOfTheWeek[DaysOfTheWeek["SATURDAY"] = 6] = "SATURDAY";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
