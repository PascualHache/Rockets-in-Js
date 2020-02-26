class newRocket {
    code: string;
    thrusters: number;
    boost: Number[];
    currentPower: number;
    currentSpeed: number;

    constructor(code: string, thrusters: number, boost: Number[]) {
        this.code = code;
        this.thrusters = thrusters;
        this.boost = boost;
        this.currentPower = 0;
        this.currentSpeed = 0;
    }

    showState(): void {
        console.log("Rocked num= " + this.code);
        console.log("Thrusters num= " + this.thrusters);
        console.log("Boost num= " + this.boost);
    }

    showBoosters() {
        var str = this.boost.join(' ')
        return str;
    }
    acelera() {
        this.currentPower += 10;
    }
    frena() {
        if (this.currentPower > 9) {
            this.currentPower -= 10;
        }
    }
}
