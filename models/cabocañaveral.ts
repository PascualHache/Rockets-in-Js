class newRocket {
    code: string;
    thrusters: number;
    boost: number[];
    currentSpeed: number;
    aCurrentSpeed: number[];

    constructor(code: string, thrusters: number, boost: number[]) {
        this.code = code;
        this.thrusters = thrusters;
        this.boost = boost;
        this.currentSpeed = 0;
        this.aCurrentSpeed = [];
        this.initializeArray();
    }

    initializeArray() {
        for (let index = 0; index < this.thrusters; index++) {
            this.aCurrentSpeed.push(0);
        }
        console.log(this.aCurrentSpeed);
    }

    calculateSpeed() {
        this.currentSpeed = 0;
        for (let index = 0; index < this.aCurrentSpeed.length; index++) {
            this.currentSpeed += this.aCurrentSpeed[index];
        }
        console.log("---BOOST & CURRENT SPEED---");
        console.log(this.boost);
        console.log(this.aCurrentSpeed);
        console.log("------");
    }

    showBoosters() {
        var str = this.boost.join(' ')
        return str;
    }

    acelera() {
        for (let index = 0; index < this.boost.length; index++) {
            if(this.aCurrentSpeed[index] < this.boost[index]){
                this.aCurrentSpeed[index]+=10;
            }
        }
        this.calculateSpeed();
    }

    frena() {
        for (let index = 0; index < this.boost.length; index++) {
            if(this.aCurrentSpeed[index] > 0){
                this.aCurrentSpeed[index]-=10;
            }
            if(this.aCurrentSpeed[index] < 0){
                this.aCurrentSpeed[index]=0;
            }
        }
        this.calculateSpeed();
    }
}
