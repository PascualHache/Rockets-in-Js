"use strict";
var id = 0;
var rocketsObj = {};
var arrPrecessed = [];
var arrRockets = [];
function createRocket(code, thrusters, arrPrecessed) {
    rocketsObj[code] = new newRocket(code, thrusters, arrPrecessed);
    arrRockets.push(code);
    printRocketInfo(code);
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
    clearFields();
}
function introduceRocket() {
    var codeName = document.getElementById("code");
    var thrusters = document.getElementById("thrusters");
    var potencia = document.getElementById("potencia");
    createRocket(codeName.value, thrusters.value, arrPrecessed);
    toggle();
    console.log(rocketsObj);
}
function validateForm() {
    if (validaCode() && validaThrusters() && validaPropulsores()) {
        introduceRocket();
        return true;
    }
    else {
        return false;
    }
}
function validaPropulsores() {
    var potencia = document.getElementById("potencia");
    var numeroPropul = document.getElementById("thrusters");
    var arr = potencia.value.split(",").map(Number);
    arrPrecessed = validaArraydeNums(arr);
    if (!potencia.checkValidity()) {
        if (potencia.validity.valueMissing) {
            alert("Introduce un valor numérico por número de propulsores separado por comas");
        }
        else if (arrPrecessed.length != parseInt(numeroPropul.value)) {
            alert("El número de propulsores no se corresponde con las potencias introducidas");
        }
        return false;
    }
    return true;
}
function validaArraydeNums(arrPotencia) {
    var arrTemp = arrPotencia;
    for (var index = 0; index < arrPotencia.length; index++) {
        if (isNaN(arrPotencia[index])) {
            arrTemp.splice(index, 1);
        }
    }
    return arrTemp;
}
function validaCode() {
    var elemento = document.getElementById("code");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            alert("Introduce un valor de 8 dígitos en el código del cohete");
        }
        else if (elemento.validity.patternMismatch) {
            alert("Estas seguro que tiene 8 dígitos?");
        }
        return false;
    }
    return true;
}
function validaThrusters() {
    var elemento = document.getElementById("thrusters");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            alert("Introduce un valor numérico en los propulsores");
        }
        else if (elemento.validity.patternMismatch) {
            alert("Estas seguro que es un valor numérico?");
        }
        return false;
    }
    return true;
}
function myButtonClicked(el) {
    el.disabled = true;
    toggle();
}
function clearFields() {
    var codeName = document.getElementById("code");
    var thrusters = document.getElementById("thrusters");
    var potencia = document.getElementById("potencia");
    if (codeName.value != "" || thrusters.value != "" || potencia.value != "") {
        codeName.value = "";
        thrusters.value = "";
        potencia.value = "";
    }
}
function printRocketInfo(code) {
    var rocEle = document.getElementById("rocketsList");
    rocEle.innerHTML += "Rocket code:" + code + " " + "Nº propulsores:" + rocketsObj[code].thrusters + "Boosters MAX power: " + rocketsObj[code].showBoosters() + " <br>";
}
function accelerate(el) {
    var a = getObjectNameId(el);
    console.log(arrRockets);
    rocketsObj[arrRockets[a]].acelera();
    console.log(rocketsObj[arrRockets[a]].currentPower);
}
function slow(el) {
    var a = getObjectNameId(el);
    rocketsObj[arrRockets[a]].frena();
    console.log(rocketsObj[arrRockets[a]].currentPower);
}
function getObjectNameId(el) {
    return parseInt(el.id[el.id.length - 1]);
}
