var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(5, 10));
console.log(calc.add("Hello, ", "World!"));
