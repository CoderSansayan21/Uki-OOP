// Base class — Encapsulation + Abstraction
class Account {
  #balance;
  #owner;

  constructor(owner, initialBalance = 0) {
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  getOwner() {
    return this.#owner;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) return "Deposit amount must be positive.";
    this.#balance += amount;
    return `Deposited $${amount}. New balance: $${this.#balance}`;
  }

  // Can be overridden by child classes (Polymorphism)
  withdraw(amount) {
    if (amount <= 0) return "Withdraw amount must be positive.";
    if (amount > this.#balance) return "Insufficient funds.";
    this.#balance -= amount;
    return `Withdrew $${amount}. New balance: $${this.#balance}`;
  }

  getSummary() {
    return `Account Owner: ${this.#owner} | Balance: $${this.#balance}`;
  }
}

// Inheritance — SavingsAccount extends Account
class SavingsAccount extends Account {
  #interestRate;

  constructor(owner, initialBalance, interestRate) {
    super(owner, initialBalance);
    this.#interestRate = interestRate;
  }

  // Unique to SavingsAccount
  applyInterest() {
    const interest = this.getBalance() * this.#interestRate;
    this.deposit(interest);
    return `Interest applied: $${interest.toFixed(2)}`;
  }

  // Polymorphism — overrides base withdraw with a savings limit rule
  withdraw(amount) {
    if (this.getBalance() - amount < 100) {
      return "Savings accounts must maintain a minimum balance of $100.";
    }
    return super.withdraw(amount);
  }
}

// Inheritance — CheckingAccount extends Account
class CheckingAccount extends Account {
  #overdraftLimit;

  constructor(owner, initialBalance, overdraftLimit = 200) {
    super(owner, initialBalance);
    this.#overdraftLimit = overdraftLimit;
  }

  // Polymorphism — overrides base withdraw to allow overdraft
  withdraw(amount) {
    if (amount <= 0) return "Withdraw amount must be positive.";
    if (amount > this.getBalance() + this.#overdraftLimit) {
      return `Exceeds overdraft limit of $${this.#overdraftLimit}.`;
    }
    // Use deposit trick won't work on private — call super directly
    return super.withdraw(amount);
  }
}

// --- Demo ---

const savings = new SavingsAccount("Vithushan", 1000, 0.05);
const checking = new CheckingAccount("Amal", 500, 200);

console.log("=== Savings Account ===");
console.log(savings.getSummary());
console.log(savings.deposit(500));
console.log(savings.applyInterest());
console.log(savings.withdraw(1300)); // blocked — minimum balance rule
console.log(savings.withdraw(500));  // allowed
console.log(savings.getSummary());

console.log("\n=== Checking Account ===");
console.log(checking.getSummary());
console.log(checking.withdraw(600)); // allowed — within overdraft limit
console.log(checking.withdraw(200)); // blocked — exceeds overdraft
console.log(checking.getSummary());
