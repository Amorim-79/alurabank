export default class View {
    constructor(selector) {
        this.element = $(selector);
    }
    update(model) {
        this.element.html(this.template(model));
    }
}
