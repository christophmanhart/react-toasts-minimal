export function add(a: number, b: number): number {
    return a + b;
}

//TODO so die einzelnen Komponenten exportieren
export { default as Button } from './Button';

console.log(add(3, 5)); //output: 8