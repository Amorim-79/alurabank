class NegociationsView {

    private element: Element;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    public update(): void {
        this.element.innerHTML = this.template();
    }

    template(): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>VALUE</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `
    }
}