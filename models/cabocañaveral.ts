class newRocket {
    code: string;
    thrusters: number;
    boost: number[];
    currentPower: number;
    currentSpeed: number;
    aCurrentSpeed: number[];
    bMax: boolean;
    bMin: boolean;

    constructor(code: string, thrusters: number, boost: number[]) {
        this.code = code;
        this.thrusters = thrusters;
        this.boost = boost;
        this.currentPower = 0;
        this.currentSpeed = 0;
        this.aCurrentSpeed = [];
        this.initializeArray();
        this.bMax = false;
        this.bMin = false;
    }

    showState(): void {
        console.log("Rocked num= " + this.code);
        console.log("Thrusters num= " + this.thrusters);
        console.log("Boost num= " + this.boost);
    }

    initializeArray() {
        for (let index = 0; index < this.thrusters; index++) {
            this.aCurrentSpeed.push(0);
        }
        console.log(this.aCurrentSpeed);
    }

    calculateSpeed() {
        this.updateboost();
        for (let index = 0; index < this.aCurrentSpeed.length; index++) {
            if (this.boost[index] + this.currentPower >= 0 && (this.boost[index]) >= this.aCurrentSpeed[index] && this.bMax == false && this.bMin == false) {
                this.currentSpeed += this.aCurrentSpeed[index];
                if (this.boost[index] == this.aCurrentSpeed[index]) {
                    this.bMax = true;
                } else if (this.boost[index] + this.currentPower == 0){
                    this.bMin = true;
                }
            }
        }
        console.log("------");
        console.log(this.boost);
        console.log(this.aCurrentSpeed);
        console.log("------");
    }

    showBoosters() {
        var str = this.boost.join(' ')
        return str;
    }

    acelera() {
        this.currentPower = 10;
        this.calculateSpeed();
        this.bMin = false;
    }

    frena() {
        if (this.currentPower > 9) {
            this.currentPower = -10;
            this.bMax = false;
        }
        this.calculateSpeed();
    }

    updateboost() {
        console.log(this.aCurrentSpeed);
        for (let index = 0; index < this.boost.length; index++) {
            if (this.boost[index] + this.currentPower > 0 && this.boost[index] > this.aCurrentSpeed[index]) {
                this.aCurrentSpeed[index] += this.currentPower;
            } else {
                this.aCurrentSpeed[index] = this.boost[index];
            }
        }
        console.log(this.aCurrentSpeed);
    }
    // updateSpeed(){
    //     let arrBoostUpdate = this.updateboost();
    //     for (let index = 0; index < arrBoostUpdate.length; index++) {
    //         if(this.boost[index] < arrBoostUpdate[index]){
    //             this.currentSpeed +=arrBoostUpdate[index];
    //         }

    //     }
    // }
}
