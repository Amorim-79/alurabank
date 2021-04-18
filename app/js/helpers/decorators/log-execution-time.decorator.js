System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime(timeInSeconds = false) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            const timeType = timeInSeconds ? 's' : 'ms';
            const divider = timeInSeconds ? 1000 : 1;
            descriptor.value = (...args) => {
                const initialTime = performance.now();
                const result = originalMethod.apply(this, args);
                const finalTime = performance.now();
                console.log(`Tempo de execução do método ${propertyKey}: ${(finalTime - initialTime) / divider} ${timeType}`);
            };
            return descriptor;
        };
    }
    exports_1("logExecutionTime", logExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
