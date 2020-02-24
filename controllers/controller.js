"use strict";
var id = 0;
var rocketsObj = {};
function createRocket(code, thrusters) {
    rocketsObj[code] = new newRocket(code, thrusters);
    var rocEle = document.getElementById("rocketsList");
    var rocEleContent = rocEle.innerHTML;
    rocEle.innerText = rocEleContent + " " + code + " " + thrusters + "<br />";
}
function toggle() {
    var t1 = document.getElementById("tab1");
    var t2 = document.getElementById("tab2");
    if (t2.style.display === "inline-block") {
        t2.style.display = "none";
        t1.style.display = "inline-block";
    }
    else {
        t2.style.display = "inline-block";
        t1.style.display = "none";
    }
}
function introduceRocket() {
    var codeName = document.getElementById("code");
    var thrusters = document.getElementById("thrusters");
    createRocket(codeName.value, thrusters.value);
    toggle();
    console.log(rocketsObj);
}
function myButtonClicked(el) {
    el.disabled = true;
    toggle();
}
