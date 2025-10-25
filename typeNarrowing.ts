function printVal(value: string | Number){
    if(typeof value==="string"){
        console.log("It is string: ", value);
    }else{
        console.log("Number: ", value);
    }
}

printVal(123)