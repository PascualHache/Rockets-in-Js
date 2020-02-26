"use strict";
var newRocket = /** @class */ (function () {
    function newRocket(code, thrusters, boost) {
        this.code = code;
        this.thrusters = thrusters;
        this.boost = boost;
        this.currentPower = 0;
        this.currentSpeed = 0;
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
    newRocket.prototype.acelera = function () {
        this.currentPower += 10;
    };
    newRocket.prototype.frena = function () {
        if (this.currentPower > 9) {
            this.currentPower -= 10;
        }
    };
    return newRocket;
}());
