const negotiationController = new NegotiationController();

// Using jQuery
$('.form').on('submit', negotiationController.addNegotiations.bind(negotiationController));
