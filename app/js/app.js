const negociationController = new NegociationController();
document
    .querySelector('.form')
    .addEventListener('submit', negociationController.addNegociations.bind(negociationController));
