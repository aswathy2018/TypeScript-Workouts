class Animal{
    speak(): void{
        console.log("Animal sound");
    }
}

class Dog extends Animal{
    speak(): void{
        console.log("Dog Barkss..");
    }
}

let val = new Dog();
val.speak()