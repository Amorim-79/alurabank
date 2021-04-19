System.register(["./Negotiations", "./NegotiationsData", "./PartialNegotiationsData.model"], function (exports_1, context_1) {
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
            function (Negotiations_1_1) {
                exportStar_1(Negotiations_1_1);
            },
            function (NegotiationsData_1_1) {
                exportStar_1(NegotiationsData_1_1);
            },
            function (PartialNegotiationsData_model_1_1) {
                exportStar_1(PartialNegotiationsData_model_1_1);
            }
        ],
        execute: function () {
        }
    };
});
