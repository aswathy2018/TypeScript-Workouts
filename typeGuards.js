// Using instanceof
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Boww");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meowww..");
    };
    return Cat;
}());
function makeSound(animals) {
    if (animals instanceof Dog) {
        animals.bark();
    }
    else {
        animals.meow();
    }
}
var dog = new Dog();
var cat = new Cat();
makeSound(cat);
