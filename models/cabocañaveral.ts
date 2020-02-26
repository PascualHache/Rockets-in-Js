class newRocket{
    code:string;
    thrusters:number;
    boost: Number[]; 
    
    constructor(code:string,thrusters:number,boost:Number[]){
        this.code=code;
        this.thrusters=thrusters;
        this.boost=boost;
    }
    
    showState():void{
        console.log("Rocked num= "+this.code);
        console.log("Thrusters num= "+this.thrusters);
        console.log("Boost num= "+this.boost);
    }

    showBoosters(){
        var str = this.boost.join(' ')
        return str;            
        }
    }
}