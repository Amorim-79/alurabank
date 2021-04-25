import 'bootstrap/dist/css/bootstrap.css';
import '../css/styles.css';
import 'bootstrap/js/dist/modal.js';

console.log($('h1')['modal']);
import NegotiationController from "./controllers/NegotiationController";

const negotiationController = new NegotiationController();

// Using jQuery
$('.form').on('submit', negotiationController.addNegotiations.bind(negotiationController));
$('#import-button').on('click', negotiationController.importNegotiations.bind(negotiationController));
