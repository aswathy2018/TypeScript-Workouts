"use strict";
// // Using instanceof
Object.defineProperty(exports, "__esModule", { value: true });
// class Dog{
//     bark(){
//         console.log("Boww")
//     }
// }
// class Cat{
//     meow(){
//         console.log("Meowww..")
//     }
// }
// function makeSound(animals: Dog|Cat){
//     if(animals instanceof Dog){
//         animals.bark()
//     }else{
//         animals.meow()
//     }
// }
// const dog = new Dog();
// const cat = new Cat();
// makeSound(cat)
function isString(value) {
    return typeof value == "string";
}
function printV(value) {
    if (isString(value)) {
        console.log("Value: ", value);
    }
    else {
        console.log("Number: ", value);
    }
}
printV("Aswathy");
//# sourceMappingURL=typeGuards.js.map