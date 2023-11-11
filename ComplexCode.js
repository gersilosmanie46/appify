/*
Filename: ComplexCode.js

Description:
This code demonstrates a complex JavaScript program designed to simulate a virtual banking system. It includes various features such as account creation, deposit and withdraw functions, account balance checking, transaction history tracking, and administrative functionalities.

Please note that this code is a simplified demonstration and does not contain all the necessary security measures or error handling typically found in real-world banking systems.

*/

// Define global variables
let accounts = [];

// Account class representing a bank account
class Account {
  constructor(accountNumber, accountHolderName, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = initialBalance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactionHistory.push(`Deposited ${amount}`);
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (this.balance >= amount && amount > 0) {
      this.balance -= amount;
      this.transactionHistory.push(`Withdrawn ${amount}`);
      return true;
    }
    return false;
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}

// Function to create a new account
function createAccount() {
  const accountNumber = Math.floor(Math.random() * 100000000);
  const accountHolderName = prompt("Enter account holder name:");
  const initialBalance = parseFloat(prompt("Enter initial balance:"));

  const account = new Account(accountNumber, accountHolderName, initialBalance);
  accounts.push(account);

  console.log("Account created successfully!");
}

// Function to perform deposit into an account
function depositToAccount() {
  const accountNumber = parseInt(prompt("Enter account number:"));
  const amount = parseFloat(prompt("Enter amount to deposit:"));

  const account = findAccountByNumber(accountNumber);
  if (account) {
    const success = account.deposit(amount);
    if (success) {
      console.log("Deposit successful!");
    } else {
      console.log("Invalid amount entered.");
    }
  } else {
    console.log("Invalid account number.");
  }
}

// Function to perform withdrawal from an account
function withdrawFromAccount() {
  const accountNumber = parseInt(prompt("Enter account number:"));
  const amount = parseFloat(prompt("Enter amount to withdraw:"));

  const account = findAccountByNumber(accountNumber);
  if (account) {
    const success = account.withdraw(amount);
    if (success) {
      console.log("Withdrawal successful!");
    } else {
      console.log("Insufficient balance or invalid amount entered.");
    }
  } else {
    console.log("Invalid account number.");
  }
}

// Function to find an account by its account number
function findAccountByNumber(accountNumber) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === accountNumber) {
      return accounts[i];
    }
  }
  return null;
}

// Function to display account balance
function displayAccountBalance() {
  const accountNumber = parseInt(prompt("Enter account number:"));

  const account = findAccountByNumber(accountNumber);
  if (account) {
    console.log(`Account Balance: ${account.getBalance()}`);
  } else {
    console.log("Invalid account number.");
  }
}

// Function to display transaction history
function displayTransactionHistory() {
  const accountNumber = parseInt(prompt("Enter account number:"));

  const account = findAccountByNumber(accountNumber);
  if (account) {
    console.log(`Transaction History:`);
    account.getTransactionHistory().forEach((transaction) => {
      console.log(transaction);
    });
  } else {
    console.log("Invalid account number.");
  }
}

// Function to display all account details
function displayAllAccounts() {
  console.log(`All Accounts:`);
  if (accounts.length === 0) {
    console.log("No accounts found.");
  } else {
    accounts.forEach((account) => {
      console.log(`Account Number: ${account.accountNumber}`);
      console.log(`Account Holder Name: ${account.accountHolderName}`);
      console.log(`Balance: ${account.balance}`);
    });
  }
}

// Function to remove an account
function removeAccount() {
  const accountNumber = parseInt(prompt("Enter account number:"));

  const account = findAccountByNumber(accountNumber);
  if (account) {
    const index = accounts.indexOf(account);
    accounts.splice(index, 1);
    console.log("Account removed successfully!");
  } else {
    console.log("Invalid account number.");
  }
}

// Main program loop
let running = true;
while (running) {
  const choice = parseInt(
    prompt(
      "Choose an option:\n1. Create Account\n2. Deposit\n3. Withdraw\n4. Display Account Balance\n5. Display Transaction History\n6. Display All Accounts\n7. Remove Account\n8. Exit"
    )
  );

  switch (choice) {
    case 1:
      createAccount();
      break;
    case 2:
      depositToAccount();
      break;
    case 3:
      withdrawFromAccount();
      break;
    case 4:
      displayAccountBalance();
      break;
    case 5:
      displayTransactionHistory();
      break;
    case 6:
      displayAllAccounts();
      break;
    case 7:
      removeAccount();
      break;
    case 8:
      running = false;
      break;
    default:
      console.log("Invalid choice.");
  }
}

console.log("Program exited.");