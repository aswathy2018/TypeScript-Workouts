"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fruit = "mango";
let val = new Promise((resolve, reject) => {
    if (typeof fruit == "string") {
        resolve(fruit);
    }
    else {
        reject("Not a fruit");
    }
});
val.then((res) => console.log(res))
    .catch((err) => console.log(err));
//# sourceMappingURL=promise.js.map