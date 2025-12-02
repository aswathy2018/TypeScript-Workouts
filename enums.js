var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["yellow"] = 2] = "yellow";
    color[color["green"] = 3] = "green";
})(color || (color = {}));
var res = color.yellow;
console.log(res);
