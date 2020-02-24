var id = 0;
var rocketsObj: any = {};

function createRocket(code: string, thrusters: number) {
    rocketsObj[code] = new newRocket(code, thrusters);
    let rocEle: any = document.getElementById("rocketsList");
    let rocEleContent = rocEle.innerHTML;
    rocEle.innerText= rocEleContent+" "+code+" "+ thrusters+"<br />";
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

function introduceRocket(){
    let codeName: any = document.getElementById("code");
    let thrusters: any = document.getElementById("thrusters");
    createRocket(codeName.value, thrusters.value);
    toggle();
    console.log(rocketsObj);
}

function myButtonClicked(el:any)
{
    el.disabled = true;
    toggle(); 
}
