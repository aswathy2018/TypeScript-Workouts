async function greet():Promise<string>{
    return "Hello world"
}

async function main(){
    try {
        let res = await greet()
        console.log(res);
    } catch (error) {
        console.log("Error.. ", error);
    }
}


main();