class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person = new Person("Alice", 30)

person.greet()