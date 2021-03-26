class NegociationsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update() {
        this.element.innerHTML = this.template();
    }
    template() {
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
        `;
    }
}
