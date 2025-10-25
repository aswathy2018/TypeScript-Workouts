type person = {
    name: string,
    age: number
}

type employee = {
    id: number,
    department: string
}

type worker = person & employee

const emp: worker = {
    name: "ASwathy",
    age: 23,
    id: 1946,
    department: "IT"
}

console.log(emp);
