// // Using instanceof


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





function isString(value: any){
    return typeof value=="string"
}

function printV(value: string | number){
    if(isString(value)){
        console.log("Value: ", value)
    }else{
        console.log("Number: ",value)
    }
}

printV("Aswathy")