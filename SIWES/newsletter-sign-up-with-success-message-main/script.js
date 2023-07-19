function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]=$/;
    return pattern.test(email);
}

function handleSubmit(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    emailError.innerText = '';
    if (!validateEmail(emailInput.value)) {
        emailError.innerText = "Valid Email Required";
        emailError.style.display = 'block';
        return;
    }
}

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit)