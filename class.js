"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const person = new Person("Alice", 30);
person.greet();
//# sourceMappingURL=class.js.map