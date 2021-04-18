export function domInject(selector: string) {
    
    return (target: any, key: string) => {

        let element: JQuery;

        const getter = function() {
            if(!element) {
                element = $(selector);
                
                console.log(`Recuperando o input ${selector}`);
            }

            return element;
        };

        Object.defineProperty(target, key, {
            get: getter,
        });
    };
}