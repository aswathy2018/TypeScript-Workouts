var Student = /** @class */ (function () {
    function Student() {
        this._name = "";
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var val = new Student();
val.name = "Aswathy";
console.log(val.name);
