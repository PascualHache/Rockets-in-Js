"use strict";
var newRocket = /** @class */ (function () {
    function newRocket(code, thrusters, boost) {
        this.code = code;
        this.thrusters = thrusters;
        this.boost = boost;
    }
    newRocket.prototype.showState = function () {
        console.log("Rocked num= " + this.code);
        console.log("Thrusters num= " + this.thrusters);
        console.log("Boost num= " + this.boost);
    };
    newRocket.prototype.showBoosters = function () {
        var str = this.boost.join(' ');
        return str;
    };
    return newRocket;
}());
