// Using instanceof


class Dog{
    bark(){
        console.log("Boww")
    }
}

class Cat{
    meow(){
        console.log("Meowww..")
    }
}


function makeSound(animals: Dog|Cat){
    if(animals instanceof Dog){
        animals.bark()
    }else{
        animals.meow()
    }
}

const dog = new Dog();
const cat = new Cat();

makeSound(cat)
