namespace ingenuity {
    export namespace utils {
        export function padZero(value: number|string, size:number){
            const len = value.toString().length;
            return ('0').repeat(size - len) + value;
        }
    }
}