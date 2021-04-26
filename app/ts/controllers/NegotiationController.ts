import { domInject, throttle } from "../helpers/decorators/Decorators.module";
import { Negotiation, NegotiationsData,} from "../models/Models.module";
import { MessageView, NegotiationsView } from "../views/Views.module";

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

    @throttle()
    public importNegotiations() {
        import('../helpers/services/Negotiations.service').then((service) => {
            const negotiaionService = new service.NegotiationsService();

            negotiaionService.getNegotiaions(this.validateResponse)
                .then((response) => {
                    const latestNegotiations = this.negotiations.getNegotiations();
    
                    response.filter((negotiation: Negotiation) => {
                            !latestNegotiations.some((latestNegotiation) => negotiation.isEquals(latestNegotiation))
                        }).forEach((negotiation: Negotiation) => this.negotiations.addNegotiations(negotiation));
    
                })
                .catch((error) => this.messageView.update(error));

        });
    }

    @throttle()
    public addNegotiations(event: Event) {
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

    private validateResponse(response: Response) {
        if (response.ok) {
            return response;
        } else {
            throw new Error(response.statusText);
        }
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