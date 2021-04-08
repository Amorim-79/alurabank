import NegotiationController from "./controllers/NegotiationController";
const negotiationController = new NegotiationController();
$('.form').on('submit', negotiationController.addNegotiations.bind(negotiationController));
