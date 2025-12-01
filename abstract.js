"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    move() {
        console.log("Moving..");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Barking");
    }
}
const dog = new Dog();
dog.move();
dog.sound();
//# sourceMappingURL=abstract.js.map