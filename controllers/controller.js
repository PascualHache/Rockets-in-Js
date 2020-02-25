"use strict";
window.onload = iniciar;
var id = 0;
var rocketsObj = {};
function iniciar() {
    var listenerr = document.getElementById("login");
    listenerr.addEventListener('guardaRocket', validateForm, false);
}
function createRocket(code, thrusters) {
    rocketsObj[code] = new newRocket(code, thrusters);
    var rocEle = document.getElementById("rocketsList");
    var rocEleContent = rocEle.innerHTML += code + " " + thrusters + " <br>";
}
function toggle() {
    clearFields();
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
    var potencia = document.getElementById("potencia");
    createRocket(codeName.value, thrusters.value);
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
    var arrPrecessed = validaArraydeNums(arr);
    console.log("Validacion de propulsores");
    console.log(arrPrecessed.length);
    console.log(arrPrecessed.length != parseInt(numeroPropul.value));
    console.log(potencia.validity.valueMissing);
    console.log("--------");
    if (!potencia.checkValidity()) {
        console.log("loco");
        if (potencia.validity.valueMissing) {
            alert("Introduce un valor numérico por número de propulsores separado por comas");
        }
        else if (arrPrecessed.length != parseInt(numeroPropul.value)) {
            console.log("AAAAAA");
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
    // console.log(arrTemp);
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
    var thrusters_ = rocketsObj[code].thrusters;
    var rocEleContent = rocEle.innerHTML += code + " " + thrusters_ + " <br>";
}
