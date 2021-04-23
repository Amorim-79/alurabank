"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageView = void 0;
const View_1 = require("./View");
class MessageView extends View_1.default {
    template(message) {
        return `
                <div class="alert alert-success" role="alert">
                    ${message}
                </div>
            `;
    }
}
exports.MessageView = MessageView;
