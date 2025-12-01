interface payment{
    process():void;
}

class val implements payment{
    process(){
        console.log("Hiii.. ")
    }
}

let res = new val()

res.process()