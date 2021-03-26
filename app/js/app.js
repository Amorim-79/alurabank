const negotiationController = new NegotiationController();
document
    .querySelector('.form')
    .addEventListener('submit', negotiationController.addNegotiations.bind(negotiationController));
