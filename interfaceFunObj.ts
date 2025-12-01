interface obj{
    name: string;
    age: number;
}

function val(user: obj){
    console.log(user.name, user.age);
}

val({name: "Aswathy", age: 22})