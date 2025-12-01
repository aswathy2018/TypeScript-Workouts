var val = /** @class */ (function () {
    function val() {
    }
    val.prototype.process = function () {
        console.log("Hiii.. ");
    };
    return val;
}());
var res = new val();
res.process();
