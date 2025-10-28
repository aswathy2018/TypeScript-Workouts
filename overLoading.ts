class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}
const calc = new Calculator();
console.log(calc.add(5, 10));
console.log(calc.add("Hello, ", "World!")); 
