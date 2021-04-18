System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(selector) {
        return (target, key) => {
            let element;
            const getter = () => {
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
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
