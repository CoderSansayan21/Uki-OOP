class BankAccount {
  
  constructor(balance, BankAccNo, branch) {
    this.#balance = balance;
    this.BankAccNo = BankAccNo;
    this.branch = branch;
  }


  deposit(amount) {
    this.#balance += amount; 
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds!");
    }
  }

  getBalance() {
    return "Balance: $" + this.#balance;
  }
}
const account = new BankAccount(0, 123456789, "Main Street");
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Balance: $300

const account2 = new BankAccount(0, 987654321, "Second Street");
account2.deposit(1000);
console.log(account2.getBalance()); // Balance: $1000

// account.#balance = 99999; ❌ ERROR! Cannot access private field