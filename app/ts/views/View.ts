export default abstract class View<T> {
    private element: JQuery;

    constructor(selector: string) {
        this.element = $(selector);
    }

    public update(model: T): void {
        this.element.html(this.template(model));
    }

    abstract template(model: T): string;
}
