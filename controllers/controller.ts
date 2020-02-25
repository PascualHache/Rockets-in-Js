window.onload = iniciar;

var id = 0;
var rocketsObj: any = {};

function iniciar() {
    let listenerr: any = document.getElementById("login");
    listenerr.addEventListener('guardaRocket', validateForm, false);
}

function createRocket(code: string, thrusters: number) {
    rocketsObj[code] = new newRocket(code, thrusters);
    let rocEle: any = document.getElementById("rocketsList");
    let rocEleContent = rocEle.innerHTML;
    rocEle.innerText = rocEleContent + " " + code + " " + thrusters + "<br />";
}

function toggle() {
    clearFields();
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
    createRocket(codeName.value, thrusters.value);
    toggle();
    console.log(rocketsObj);
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
    let potencia: any = document.getElementById("potencia");
    let numeroPropul: any = document.getElementById("thrusters")
    var arr: Number[] = potencia.value.split(",").map(Number);
    let arrPrecessed = validaArraydeNums(arr);
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


function validaArraydeNums(arrPotencia: any[]) {
    let arrTemp = arrPotencia;
    for (let index = 0; index < arrPotencia.length; index++) {
        if (isNaN(arrPotencia[index])) {
            arrTemp.splice(index, 1);
        }
    }
    // console.log(arrTemp);
    return arrTemp;
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
    if (codeName.value != "" || thrusters.value != "" || potencia.value != "") {
        codeName.value = "";
        thrusters.value = "";
        potencia.value = "";
    }
}