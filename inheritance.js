"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Name {
    name;
    constructor(name) {
        this.name = name;
    }
    wish() {
        console.log(`Hii ${this.name}, `);
    }
}
class stud extends Name {
    val() {
        console.log(`${this.name} is a student`);
    }
}
let res = new stud("Aswathy");
res.wish();
res.val();
//# sourceMappingURL=inheritance.js.map