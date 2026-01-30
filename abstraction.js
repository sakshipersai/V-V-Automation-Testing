class ATM{
    constructor(withdraw){     //to initialize this

    this.balance = 1000;
    //this.minimum = 500;
    this.withdraw = withdraw;
    }

    getAmount(){
        let minimum = 500;
        if((this.balance - this.withdraw)>=this.minimum){
            console.log("withdraw successfully!");
        } else {
            console.log("withdraw failed")
        }

    }
}

let obj = new ATM(1000);
console.log(obj.minimum)
obj.getAmount();