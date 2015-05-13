function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color; // Type-checker can catch the mistyped name here
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
myArray = ["Bob", "Fred"];
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
var Clock2 = (function () {
    function Clock2(h, m) {
    }
    return Clock2;
})();
var cs = Clock2;
var newClock = new cs(7, 30);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
