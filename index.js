const pw = document.getElementById('password');
const confirm_pw = document.getElementById('confirm_password');
const submit = document.getElementById('submit');
const error = document.getElementById('pw-error')

pw.addEventListener('input', validateMatch);
confirm_pw.addEventListener('input', validateMatch);


function validateMatch() {
    if(pw.value !== confirm_pw.value) {
        //alert user to mismatch and set confirm_pw input to invalid
        confirm_pw.setCustomValidity('Passwords dont match')
        error.textContent = 'Your passwords don\'t match, Champ!';

    } else {
        //clear message and set confirm_pw input to valid
        confirm_pw.setCustomValidity('');
        error.textContent = '';
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault();

    //use built in checkValidity() method to see if input is valid or invalid. if invalid, show message 
    if(!confirm_pw.checkValidity()) {
        alert('Please make sure passwords match.');
        return;
    }

    window.location.href = 'thankyou.html';
})