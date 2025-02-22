var BankAccount = /** @class */ (function () {
    function BankAccount(ownername, balance) {
        this.ownername = ownername;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (newmoney) {
        this.balance = this.balance + newmoney;
    };
    BankAccount.prototype.withdraw = function (moneythatyouwithdraw) {
        if (this.balance < moneythatyouwithdraw) {
            return false;
        }
        else {
            this.balance = this.balance - moneythatyouwithdraw;
            return true;
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.transfer = function (amount, recipient) {
        if (this.withdraw(amount)) {
            recipient.balance = recipient.balance + amount;
        }
    };
    return BankAccount;
}());
var myBankaccount = new BankAccount("Alice", 100);
var friendBankaccount = new BankAccount("Denis", 200);
myBankaccount.withdraw(110);
myBankaccount.transfer(50, friendBankaccount);
console.log(friendBankaccount.getBalance());
console.log(myBankaccount.getBalance());
