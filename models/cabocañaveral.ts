class newRocket{
    code:string;
    thrusters:number;
    
    constructor(code:string,thrusters:number){
        this.code=code;
        this.thrusters=thrusters;
    }
    
    showState():void{
        console.log("Rocked num= "+this.code);
        console.log("Thrusters num= "+this.thrusters);
    }
}