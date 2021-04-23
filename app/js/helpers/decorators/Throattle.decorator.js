"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
function throttle(milliseconds = 500) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        let timer = 0;
        descriptor.value = function (...args) {
            const event = args[0];
            if (event)
                event.preventDefault();
            clearInterval(timer);
            timer = Number(setTimeout(() => originalMethod.apply(this, args), milliseconds));
        };
        return descriptor;
    };
}
exports.throttle = throttle;
