"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = (val) => {
    let res = [];
    for (let i = val.length - 1; i >= 0; i--) {
        // res.push(val[i])
        res.push(val[i]);
    }
    return res;
};
console.log(arr([1, 2, 3, 4, 5]));
//# sourceMappingURL=rev.js.map