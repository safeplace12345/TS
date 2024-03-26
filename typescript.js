var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mapData = function (url) {
    return fetch(url, {})
        .then(function (res) { return res; })["catch"](function (err) { return err; });
};
mapData("http://")
    .then(function (res) {
    console.log(res.age);
    console.log(res.name);
})["catch"](function (err) { return err; });
var applyTexture = function (numbers) {
    return numbers.reduce(function (acc, nNum) {
        if (typeof nNum === "object") {
            return applyTexture(nNum);
        }
        return (acc += nNum);
    }, 0);
};
applyTexture([1, [2, 3], 4, [5, [6, 7]]]);
var newSet = new Set();
newSet.add(1);
// set.add("abc"); //Throws Error
var returnKeyValue = function (obj, key) {
    return obj[key];
};
returnKeyValue({
    a: 1,
    b: "test",
    c: true
}, "a");
var t = function (st) {
    return st;
};
// Using Enums
var Fruits;
(function (Fruits) {
    Fruits[Fruits["peach"] = 0] = "peach";
    Fruits[Fruits["apple"] = 1] = "apple";
    Fruits[Fruits["banana"] = 6] = "banana";
})(Fruits || (Fruits = {}));
console.log(Fruits.apple); // 2 => Because of indexing
console.log(Fruits.peach); // 1 => Because of indexing
console.log(Fruits.banana); // 6 => Because of Assignment
// Fruits.apple = 4 // Throws Error
//Using Implements and Extends
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () { };
    Vehicle.prototype.radio = function () { };
    return Vehicle;
}());
var MotorBike = /** @class */ (function (_super) {
    __extends(MotorBike, _super);
    function MotorBike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MotorBike;
}(Vehicle));
var motor1 = new MotorBike();
console.log(motor1.color); // is available as black
motor1.color = "red";
// class Ship implements Vehicle, Design {
//     // Will work only if manually assign properties as parent
// }
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.drive = function () { };
    Ship.prototype.radio = function () { };
    Ship.prototype.eco = function () { };
    return Ship;
}());
// More Generics
var removeFirstOrder = function (arr) {
    arr.shift();
    return arr;
};
console.log(removeFirstOrder([1, 2, 3, 4, 5, 6]));
console.log(removeFirstOrder(["1", "2", "3"]));
console.log(removeFirstOrder(["1", "2", 3, true]));
// const andy: Required<Passenger> = { name: "Andy", id: 12322 }; //This will fail
var andy2 = { name: "Andy", id: 12322 };
// Using Literal types like 10 , get etc and "AS" keyword
// const req = { url: "http://", method: "POST" } as const OR
var req = { url: "http://", method: "POST" };
function request(url, method) {
    return 10;
}
console.log(request(req.url, req.method)); // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
