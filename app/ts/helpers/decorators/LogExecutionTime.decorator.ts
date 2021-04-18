export function logExecutionTime(timeInSeconds: boolean = false) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        const timeType = timeInSeconds ? 's' : 'ms';
        const divider = timeInSeconds ? 1000 : 1;

        descriptor.value = function(...args: any[]) {
            const initialTime = performance.now();
            const result = originalMethod.apply(this, args);
            const finalTime = performance.now();

            console.log(`Tempo de execução do método ${propertyKey}: ${(finalTime - initialTime)/divider} ${timeType}`);
            return result;
        };

        return descriptor;
    }
}