class Name{
    name:string;

    constructor(name: string){
        this.name = name
    }

    wish(){
        console.log(`Hii ${this.name}, `)
    }
}

class stud extends Name{
    val(){
        console.log(`${this.name} is a student`);
    }
}

let res = new stud("Aswathy")

res.wish()
res.val()