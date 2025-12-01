"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    _name = "";
    set name(val) {
        this._name = val;
    }
    get name() {
        return this._name;
    }
}
let val = new Student();
val.name = "Aswathy";
console.log(val.name);
//# sourceMappingURL=getset.js.map