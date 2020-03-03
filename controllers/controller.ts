var id = 0;
var rocketsObj: any = {};
var arrPrecessed: number[] = [];
var arrRockets: string[] = [];

function createRocket(code: string, thrusters: number, arrPrecessed: number[]) {
    rocketsObj[code] = new newRocket(code, thrusters, arrPrecessed);
    arrRockets.push(code);
    printRocketInfo(code);
}

function toggle() {
    let t1: any = document.getElementById("tab1");
    let t2: any = document.getElementById("tab2");


    if (t2.style.display === "inline-block") {
        t2.style.display = "none";
        t1.style.display = "inline-block";

    } else {
        t2.style.display = "inline-block";
        t1.style.display = "none";
    }
}

function introduceRocket() {
    let codeName: any = document.getElementById("code");
    let thrusters: any = document.getElementById("thrusters");
    let potencia: any = document.getElementById("potencia");
    createRocket(codeName.value, thrusters.value, arrPrecessed);
    toggle();
    console.log(rocketsObj);
    clearFields();
}

function validateForm() {
    if (validaCode() && validaThrusters() && validaPropulsores()) {
        introduceRocket();
        return true
    } else {
        return false;
    }
}

function validaPropulsores() {
    let potenciaMax: any = document.getElementById("potencia");
    var arr: Number[] = potenciaMax.value.split(",").map(Number);
   
    if (!validaArraydeNums(arr)) {
        if (potenciaMax.validity.valueMissing) {
            alert("Introduce un valor numérico por número de propulsores separado por comas");
        }
        else{
            alert("El número de propulsores no se corresponde con las potencias introducidas");
        }
        return false;
    } 
    return true;
}

function validaArraydeNums(arrPotencia: any[]) {
    let arrTemp = arrPotencia;
    let potenciaMax: any = document.getElementById("potencia");
    let numeroPropul: any = document.getElementById("thrusters")
    for (let index = 0; index < arrPotencia.length; index++) {
        if (isNaN(arrPotencia[index])) {
            arrTemp.splice(index, 1);
        }
    }
    arrPrecessed=arrTemp;
    if (arrTemp.length !== parseInt(numeroPropul.value)) {
        potenciaMax.setCustomValidity("Invalid field.");
        return false;
    } else{
        potenciaMax.setCustomValidity("");
    }
    return true;
}

function validaCode() {
    var elemento: any = document.getElementById("code");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            alert("Introduce un valor de 8 dígitos en el código del cohete");
        }
        else if (elemento.validity.patternMismatch) {
            alert("Estas seguro que tiene 8 dígitos?")
        }
        return false;
    }
    return true;
}

function validaThrusters() {
    var elemento: any = document.getElementById("thrusters");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            alert("Introduce un valor numérico en los propulsores");
        }
        else if (elemento.validity.patternMismatch) {
            alert("Estas seguro que es un valor numérico?")
        }
        return false;
    }
    return true;
}

function myButtonClicked(el: any) {
    el.disabled = true;
    toggle();
}

function clearFields() {
    let codeName: any = document.getElementById("code");
    let thrusters: any = document.getElementById("thrusters");
    let potencia: any = document.getElementById("potencia");
    let rocEle: any = document.getElementById("rocketsList");
    rocEle.innerHTML = "";
    if (codeName.value != "" || thrusters.value != "" || potencia.value != "") {
        codeName.value = "";
        thrusters.value = "";
        potencia.value = "";
    }
}

function printRocketInfo(code: string) {
    let rocEle: any = document.getElementById("rocketsList");
    rocEle.innerHTML += "Rocket code: " + code + " / Nº propulsores: " + rocketsObj[code].thrusters + " / Boosters MAX power: " + rocketsObj[code].showBoosters() + " / Current Speed: " + rocketsObj[code].currentSpeed +" <br>";
}

function accelerate(el: any) {
    if (arrRockets.length < 1) {
        alert("Primero introduce los cohetes");
    } else {
        let a: number = getObjectNameId(el);
        rocketsObj[arrRockets[a]].acelera();
        printRocket(el);
    }
}

function slow(el: any) {
    if (arrRockets.length < 1) {
        alert("Primero introduce los cohetes");
    } else {
        let a: number = getObjectNameId(el);
        rocketsObj[arrRockets[a]].frena();
        printRocket(el);
    }
}

function getObjectNameId(el: any) {
    return parseInt(el.id[el.id.length - 1]);
}

function printRocket(el: any) {
    clearFields();
    if (arrRockets.length < 1) {
        alert("Primero introduce los cohetes");
    }
    else{
    let a: number = getObjectNameId(el);
    if (a == 2) {
        for (let index = 0; index < arrRockets.length; index++) {
            printRocketInfo(arrRockets[index]);
        }
    } else {
        printRocketInfo(arrRockets[a]);
    }
}
}