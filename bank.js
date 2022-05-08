// const account = {
//     accountName: 'Jacob',
//     balance: 100,
//     getBalance: function () {
//       const choice = parseInt(alert(`Your account balance is ${this.balance}. Press OK to go back.`));
  
//       // Go back to main menu
//       this.goBack(choice);
//     },
  
//     deposit: function () {
//       const deposit = parseFloat(prompt("How much would you like to deposit?"));
//       // Parsefloat convers strings to numbers.
  
//       if (isNaN(deposit) || deposit < 0 || deposit === "" || typeof deposit === 'string') {
//         const invalidInput = alert(`Sorry ${deposit} is an invalid input. Press OK to try again`);
  
//         if (typeof invalidInput === 'string' || typeof invalidInput === 'number' || isNaN(invalidInput)) {
//           this.deposit();
//         };
  
//       } else {
//         this.balance += deposit;
//         const goBack = parseInt(alert(`This is your new account balance ${this.balance}. Press OK to go back.`));
  
//         // Go back to main menu
//         this.goBack(goBack);
//       };
//     },
  
//     withdrawal: function () {
//       const withdrawal = parseFloat(prompt(`How much would you like to withdrawal? current balance: ${this.balance}.`));
  
//       if (isNaN(withdrawal) || withdrawal > this.balance || withdrawal === "" || typeof withdrawal === 'string') {
//         const invalidInput = alert(`Sorry ${withdrawal} is an invalid input. Press OK to try again`);
  
//         if (typeof invalidInput === 'string' || typeof invalidInput === 'number' || isNaN(invalidInput)) {
//           this.withdrawal();
//         };
  
//       } else {
//         this.balance -= withdrawal;
  
//         const newBalance = alert(`This is your new account balance: ${this.balance}. Press OK to go back.`);
//         // Go back to main menu
//         this.goBack(newBalance);
//       }
//     },
  
//     getAccountName: function () {
//       const accountName = alert(`Account name: ${this.accountName}. Press OK to go back.`);
  
//       this.goBack(accountName);
//     },
  
//     accountError: function (param, func) {
  
//       if (isNaN(param) || param < 0 || param === "" || typeof param === 'string') {
//         const invalidInput = alert(`Sorry ${param} is an invalid input. Press OK to try again`);
//       } else {
//         func;
//       }
//     },
  
//     exitAccount: function () {
//       const exit = parseInt(prompt("Are you sure you want to exit? Type 1 to continue or 2 to go back"));
//       if (exit === 1) {
//         window.close();
//       } else {
//         // Go back to main menu
//         atm();
//       };
//     },
  
//     // Added this go back function to make the code cleaner
//     goBack: function (param) {
//       if (typeof param === 'string' || typeof param === 'number' || isNaN(param)) {
//         atm();
//       };
//     }
//   }
  
//   function atm() {
//     let choice = parseInt(prompt("Menu: 1- Get account balance. 2- Make a deposit. 3- Make a withdrawal. 4- Account name. 5- Exit."));
  
//     // Get balance
//     if (choice === 1) {
//       account.getBalance();
//       // Deposit
//     } else if (choice === 2) {
//       account.deposit();
//       // withdrawal
//     } else if (choice === 3) {
//       account.withdrawal();
//       // Get account name
//     } else if (choice === 4) {
//       account.getAccountName();
//       // Exit account
//     } else if (choice === 5) {
//       account.exitAccount();
//     } else {
//       // If the user clicks ok without input or inputs something not on the menu the menu reopens
//       this.atm();
//     }
//   };
  
//   atm();