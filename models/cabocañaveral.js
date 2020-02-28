"use strict";
var newRocket = /** @class */ (function () {
    function newRocket(code, thrusters, boost) {
        this.code = code;
        this.thrusters = thrusters;
        this.boost = boost;
        this.currentSpeed = 0;
        this.aCurrentSpeed = [];
        this.initializeArray();
    }
    newRocket.prototype.initializeArray = function () {
        for (var index = 0; index < this.thrusters; index++) {
            this.aCurrentSpeed.push(0);
        }
        console.log(this.aCurrentSpeed);
    };
    newRocket.prototype.calculateSpeed = function () {
        this.currentSpeed = 0;
        for (var index = 0; index < this.aCurrentSpeed.length; index++) {
            this.currentSpeed += this.aCurrentSpeed[index];
        }
        console.log("---BOOST & CURRENT SPEED---");
        console.log(this.boost);
        console.log(this.aCurrentSpeed);
        console.log("------");
    };
    newRocket.prototype.showBoosters = function () {
        var str = this.boost.join(' ');
        return str;
    };
    newRocket.prototype.acelera = function () {
        for (var index = 0; index < this.boost.length; index++) {
            if (this.aCurrentSpeed[index] < this.boost[index]) {
                this.aCurrentSpeed[index] += 10;
            }
        }
        this.calculateSpeed();
    };
    newRocket.prototype.frena = function () {
        for (var index = 0; index < this.boost.length; index++) {
            if (this.aCurrentSpeed[index] > 0) {
                this.aCurrentSpeed[index] -= 10;
            }
            if (this.aCurrentSpeed[index] < 0) {
                this.aCurrentSpeed[index] = 0;
            }
        }
        this.calculateSpeed();
    };
    return newRocket;
}());
