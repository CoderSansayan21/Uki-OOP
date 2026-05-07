class BankAccount {
  #balance = 0; // Private field (hidden from outside)

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

const account = new BankAccount();
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Balance: $300

// account.#balance = 99999; ❌ ERROR! Cannot access private field