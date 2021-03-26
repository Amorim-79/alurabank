class MessageView extends View {
    template(message) {
        return `
            <div class="alert alert-success" role="alert">
                ${message}
            </div>
        `;
    }
}
