let arr = (val:number[]) => {
    let res:number[] = [];

    for(let i=val.length-1 ; i>=0 ; i--){
        // res.push(val[i])
        res.push(val[i]!)
    }
    return res
}

console.log(arr([1,2,3,4,5]));