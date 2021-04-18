import { domInject } from "../helpers/decorators/DomInject.decorator";
import Negotiation from "../models/Negotiations";
import NegotiationsData from "../models/NegotiationsData";
import MessageView from "../views/MessageView";
import NegotiationsView from "../views/NegotiationsView";

export default class NegotiationController {
    
    @domInject('#date')
    private inputDate: JQuery;

    @domInject('#quantity')
    private inputQuantity: JQuery;

    @domInject('#value')
    private inputValue: JQuery;

    private negotiations = new NegotiationsData();
    private negotiationsView = new NegotiationsView('#negotiationsView', true);
    private messageView = new MessageView('#messageView');

    constructor() {
        this.negotiationsView.update(this.negotiations);
    }

    public addNegotiations(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(String(this.inputDate.val()).replace(/-/g, ',')),
            Number(this.inputQuantity.val()),
            Number(this.inputValue.val()),
        );

        if (this.isWeekend(negotiation.date)) {
            return this.messageView.update('Negotiations accepted on business days only');
        }

        this.negotiations.addNegotiations(negotiation);
        this.messageView.update('The negotiation was successfully created!');
        this.negotiationsView.update(this.negotiations);
    }

    private isWeekend(date: Date): boolean {
        if (date.getDay() === DaysOfTheWeek.SUNDAY || date.getDay() === DaysOfTheWeek.SATURDAY) {
            return true;
        } else {
            return false;
        }
    }
}

enum DaysOfTheWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRYDAY,
    SATURDAY,
}