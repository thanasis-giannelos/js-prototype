function BankAccount (name) {
  this.name = name;
}

BankAccount.prototype.iban = "GR567873243" + Math.floor(Math.random()*9);
BankAccount.prototype.balance = 0;

BankAccount.prototype.deposit = function(anAmount) {
  if (typeof anAmount !== "number") {
    console.log("invalid input, please insert a number");
    return;
  }
  if (anAmount <= 0) {
    console.log("invalid input, please insert a positive number");
    return;
  }
  this.balance += anAmount;
  console.log(`A deposit just made: ${anAmount}$`);

};

BankAccount.prototype.withdraw = function(anAmount) {
  if (typeof anAmount !== "number") {
    console.log("invalid input, please insert a number");
    return;
  }
  if (anAmount <= 0) {
    console.log("invalid input, please insert a positive number");
    return;
  }
  if (anAmount > this.balance) {
    console.log("not enough balance to withdraw amount");
    return;
  }
  this.balance -= anAmount;
  console.log("withdraw successful");
};

BankAccount.prototype.getBalance = function() {
  console.log(`Current balance: ${this.balance}$`);
};


const acc1 = new BankAccount("Makis Takis");

acc1.getBalance()     // 0
acc1.deposit( 100 )  
acc1.getBalance()     // 100
acc1.withdraw( 50 )  
acc1.getBalance()     // 50
acc1.withdraw( 500 )   // Error 'Insufficient balance!'
acc1.withdraw( "50" )  // Error 'Invalid amount'
acc1.withdraw( -150 )  // Error 'Invalid amount'
