function vari() {
    var str = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        str[_i] = arguments[_i];
    }
    str.forEach(function (val) { return console.log(val); });
}
vari("Apple", "Orenge", "Grape", "Watermelon");
