class BankAccount {
    constructor(accountNumber, owner, transactions = []){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = transactions;
    }
    balance(){
        let balance = 0
        for(let i = 0; this.transactions.length > i; i++){
            balance += this.transactions[i].amount        
        }
        console.log(balance)
        return balance
    }
    deposit(amt){
        this.amt = amt;
        if(amt <= 0){
            console.log("invalid deposit")
        } else {
            transactions.push(this)
        }

    }
    charge(payee, amt){
        if(amt > balance){
          console.log("transaction amount is greater than curr balance")
    } else {
        transactions.push(amt)
    }
}
}
class Transaction {
    constructor(amount, payee){
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}

let TaeTransaction = new Transaction([444], "Tae");
let bankAccount = new BankAccount(1234, "Peyton Sawyer", [TaeTransaction])
bankAccount.balance();

console.log()