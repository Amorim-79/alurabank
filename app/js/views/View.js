System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, escape = false) {
                    this.element = $(selector);
                    this.escape = escape;
                }
                update(model) {
                    let template = this.template(model);
                    if (this.escape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    }
                    this.element.html(template);
                }
            };
            exports_1("default", View);
        }
    };
});
