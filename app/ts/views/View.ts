export default abstract class View<T> {
    private element: JQuery;
    private escape: boolean

    constructor(selector: string, escape: boolean = false) {
        this.element = $(selector);
        this.escape = escape;
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        this.element.html(template);
    }

    abstract template(model: T): string;
}
