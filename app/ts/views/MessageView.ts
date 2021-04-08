namespace Views {
    export class MessageView extends Views.View<string> {
    
        template(message: string): string {
            return `
                <div class="alert alert-success" role="alert">
                    ${message}
                </div>
            `
        }
    }
}
