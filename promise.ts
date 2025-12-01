let fruit: string = "mango"

let val: Promise<string> = new Promise((resolve, reject)=>{
    if(typeof fruit=="string"){
        resolve(fruit)
    }else{
        reject("Not a fruit")
    }
})

val.then((res)=>console.log(res))
.catch((err)=>console.log(err))