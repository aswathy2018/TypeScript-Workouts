class Animal{
    constructor(public name: string){}

    seek(){
        console.log(`${this.name} make a sound`);
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Buddy")

dog.speak()
dog.seek()