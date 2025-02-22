class BankAccount{
    readonly ownername: string;
    private balance: number;



constructor(ownername: string, balance: number){
    this.ownername = ownername;
    this.balance = balance;
}
    deposit (newmoney: number){
        this.balance = this.balance + newmoney;
    }
    withdraw (moneythatyouwithdraw: number){
        if (this.balance<moneythatyouwithdraw){
            return false;
        }
        else{
            this.balance = this.balance - moneythatyouwithdraw
            return true;
        }
    }
        getBalance(){
        return this.balance;
    }
    transfer (amount: number, recipient: BankAccount){

            if(this.withdraw(amount)){
            recipient.balance = recipient.balance + amount
        }
    }
}
const myBankaccount = new BankAccount("Alice", 100)
const friendBankaccount = new BankAccount("Denis", 200)
myBankaccount.withdraw(110)
myBankaccount.transfer(50, friendBankaccount)
myBankaccount.transfer(50, friendBankaccount)
console.log(friendBankaccount.getBalance())
console.log(myBankaccount.getBalance())