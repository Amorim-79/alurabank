"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NegotiationController_1 = require("./controllers/NegotiationController");
const negotiationController = new NegotiationController_1.default();
$('.form').on('submit', negotiationController.addNegotiations.bind(negotiationController));
$('#import-button').on('click', negotiationController.importNegotiations.bind(negotiationController));
