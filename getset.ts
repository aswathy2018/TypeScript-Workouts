class Student{
    private _name: string = "";

    set name(val: string){
        this._name = val
    }

    get name():string{
        return this._name
    }
}

let val = new Student();

val.name = "Aswathy"
console.log(val.name);