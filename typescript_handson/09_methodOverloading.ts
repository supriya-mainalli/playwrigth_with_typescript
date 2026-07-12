//Method and constructor overlaoding

class Calculators {
    constructor();
    constructor(a: number, b: number);

    constructor(a?: number, b?: number) {
        if (a !== undefined && b !== undefined) {
            console.log(a + b);
        }
        else {
            console.log('No params passed');
        }
    }

    // Method overlaoding
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number): number {
        if (c) {
            return a + b + c;
        }
        else {
            return a + b;
        }

    }
}

const cal1 = new Calculators(100, 200);
console.log(cal1.add(1, 2, 3));
console.log(cal1.add(10, 20));
