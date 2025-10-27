var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hi ".concat(this.name, ", age: ").concat(this.age));
    };
    return Person;
}());
var person = new Person("Alice", 30);
person.greet();
