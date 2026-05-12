//Here We are going to make ATM Machine in Javascript:
alert('Welcome to DD International Bank PVT. LTD.');
let sys_pin = 1234;
let user_pin = window.prompt('Please Enter Valid PIN');
if (sys_pin == user_pin){
    let balance = 12000;
    alert('Please Select the Best Option for Yourself Below Given');
    let opt = window.prompt('1. Check Balance \n 2. Withdraw Amount \n 3. Deposit Money \n 4. Change Pin \n Please Enter the Required Option');
    if(opt == 1){
        alert('Your Current Balance is:' + ' ' + balance);
    } else if (opt == 2) {
        let amt = window.prompt('Please Enter the amount to withdraw');
        balance = balance - amt;
        alert('Amount Successfully Withdrawn \n Your Current Balance is' +  ' ' +  balance);
    } else if (opt == 3) {
        let amt = window.prompt('Please enter the amount to Deposit');
        balance = balance + Number(amt);
        alert('Amount Successfully Deposited \nYour Current Balance is' + ' ' + balance);
    } else {
        sys_pin = window.prompt('Please Enter the Updated Pin');
        alert('Pin Changed');
    }
} else {
    alert('Wrong Pin Entered');
}