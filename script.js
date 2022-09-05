const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error messaage
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function isValidEmail(email) {
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         );
     };
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
       if(input.value.trim() == '') {
        console.log(input.id)
        // by using ` ` back braces you can add in variables as below
        showError(input, `${getFieldName(input)} Is required`);
       } else {
        showSuccess(input);
       };

    });  
}

// Chjeck input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input, value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input)
    }
}

//Get Field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



//Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
   
    // Create an array to loop through instead of repeating 4 times
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
});