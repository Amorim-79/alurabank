import NegotiationController from "./controllers/NegotiationController";

const negotiationController = new NegotiationController();

// Using jQuery
$('.form').on('submit', negotiationController.addNegotiations.bind(negotiationController));
$('#import-button').on('click', negotiationController.importNegotiations.bind(negotiationController));
