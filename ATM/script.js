function HandleContinue() {
    let a = document.body.getElementsByTagName('button')[0].classList.add('btn1');
    let html = `<div class="pin-check">
                    <input type="number" placeholder="Enter Your ATM PIN" name="atm_pin" id="atm_pin" class="form-design" required />
                    <button class="primary-btn" onclick="ValidatePin()">Validate Pin</button>
                </div>
                <div class="opt">
                </div>
                `
    document.querySelector('.atm-box').innerHTML = document.querySelector('.atm-box').innerHTML+html;
}

function ValidatePin(pass) {
    let user_pin = document.getElementById('atm_pin').value;
    let pin = 2526;
    if (pin == user_pin) {
        alert('Entered Pin is Correct');
        let htmlopt = `
         <ul class="options">
            <li>1. Check Balance</li>
            <li>2. Withdraw Amount</li>
            <li>3. Deposit Money</li>
            <li>4. Change PIN</li>
        </ul>
        `
        document.querySelector('.opt').innerHTML = document.querySelector('.opt').innerHTML + htmlopt;
    } else {
        alert('You have entered wrong password \nPlease try again');
    }
}