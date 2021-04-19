System.register(["./DomInject.decorator", "./LogExecutionTime.decorator", "./Throattle.decorator"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (DomInject_decorator_1_1) {
                exportStar_1(DomInject_decorator_1_1);
            },
            function (LogExecutionTime_decorator_1_1) {
                exportStar_1(LogExecutionTime_decorator_1_1);
            },
            function (Throattle_decorator_1_1) {
                exportStar_1(Throattle_decorator_1_1);
            }
        ],
        execute: function () {
        }
    };
});
