"use strict";
var newRocket = /** @class */ (function () {
    function newRocket(code, thrusters) {
        this.code = code;
        this.thrusters = thrusters;
    }
    newRocket.prototype.showState = function () {
        console.log("Rocked num= " + this.code);
        console.log("Thrusters num= " + this.thrusters);
    };
    return newRocket;
}());
