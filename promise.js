var fruit = 123;
var val = new Promise(function (resolve, reject) {
    if (typeof fruit == "string") {
        resolve(fruit);
    }
    else {
        reject("Not a fruit");
    }
});
val.then(function (res) { return console.log(res); })
    .catch(function (err) { return console.log(err); });
