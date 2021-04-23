"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domInject = void 0;
function domInject(selector) {
    return (target, key) => {
        let element;
        const getter = function () {
            if (!element) {
                element = $(selector);
                console.log(`Recuperando o input ${selector}`);
            }
            return element;
        };
        Object.defineProperty(target, key, {
            get: getter,
        });
    };
}
exports.domInject = domInject;
