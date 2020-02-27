"use strict";
var newRocket = /** @class */ (function () {
    function newRocket(code, thrusters, boost) {
        this.code = code;
        this.thrusters = thrusters;
        this.boost = boost;
        this.currentPower = 0;
        this.currentSpeed = 0;
        this.aCurrentSpeed = [];
        this.initializeArray();
        this.bMax = false;
        this.bMin = false;
    }
    newRocket.prototype.showState = function () {
        console.log("Rocked num= " + this.code);
        console.log("Thrusters num= " + this.thrusters);
        console.log("Boost num= " + this.boost);
    };
    newRocket.prototype.initializeArray = function () {
        for (var index = 0; index < this.thrusters; index++) {
            this.aCurrentSpeed.push(0);
        }
        console.log(this.aCurrentSpeed);
    };
    newRocket.prototype.calculateSpeed = function () {
        this.updateboost();
        for (var index = 0; index < this.aCurrentSpeed.length; index++) {
            if (this.boost[index] + this.currentPower >= 0 && (this.boost[index]) >= this.aCurrentSpeed[index] && this.bMax == false && this.bMin == false) {
                this.currentSpeed += this.aCurrentSpeed[index];
                if (this.boost[index] == this.aCurrentSpeed[index]) {
                    this.bMax = true;
                }
                else if (this.boost[index] + this.currentPower == 0) {
                    this.bMin = true;
                }
            }
        }
        console.log("------");
        console.log(this.boost);
        console.log(this.aCurrentSpeed);
        console.log("------");
    };
    newRocket.prototype.showBoosters = function () {
        var str = this.boost.join(' ');
        return str;
    };
    newRocket.prototype.acelera = function () {
        this.currentPower = 10;
        this.calculateSpeed();
        this.bMin = false;
    };
    newRocket.prototype.frena = function () {
        if (this.currentPower > 9) {
            this.currentPower = -10;
            this.bMax = false;
        }
        this.calculateSpeed();
    };
    newRocket.prototype.updateboost = function () {
        console.log(this.aCurrentSpeed);
        for (var index = 0; index < this.boost.length; index++) {
            if (this.boost[index] + this.currentPower > 0 && this.boost[index] > this.aCurrentSpeed[index]) {
                this.aCurrentSpeed[index] += this.currentPower;
            }
            else {
                this.aCurrentSpeed[index] = this.boost[index];
            }
        }
        console.log(this.aCurrentSpeed);
    };
    return newRocket;
}());
