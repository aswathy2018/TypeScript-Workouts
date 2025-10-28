abstract class Animal{
    abstract sound():void;
    move(){
        console.log("Moving..");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Barking");
    }
}

const dog = new Dog();

dog.move()
dog.sound()