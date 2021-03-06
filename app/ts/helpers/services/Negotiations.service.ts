import { PartialNegotiationsData, Negotiation } from "../../models/Models.module";

// No service foi utilizado uma api disponibilizada pelo curso
export class NegotiationsService {
    
    public getNegotiaions(handler: HandlerFunction) {
        return fetch(BASE_URL)
            .then(response => handler(response))
            .then(response => response.json())
            .then((data: PartialNegotiationsData[]) => {
                data.map((negotiation) => (new Negotiation(new Date(), negotiation.vezes, negotiation.montante)))
            })
            .catch((error) => error);
    }

}

export interface HandlerFunction {
    (Response: Response): Response
}