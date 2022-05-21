
    const form = document.getElementById("form");
form.addEventListener('submit', (e) => {


const username = document.getElementById("username").innerHTML;
console.log(username);
const email = document.getElementById("email").innerHTML;
const helloUser = document.getElementById("helloUser").innerHTML;
var loggedIn = false;

console.log(password);
console.log(password2);
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isUsernameValid = checkUsername(),
        // isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        // isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        localStorage.setItem('username1', 'username');
        localStorage.setItem('password', 'password');
        const username1 = localStorage.getItem('username1');
        console.log(username1)
    }
    else{
       // e.preventDefault();
    }
});

//just added
function validateForm(){
    let isUsernameValid = checkUsername(),
    // isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();
    console.log(password);
    console.log(password2);

let isFormValid = isUsernameValid &&
    // isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;
}

function checkUsername(){
    console.log("is checking username");
    const usernameValue = username.value;
    // const emailValue = Object.values(email);


    if(usernameValue < 3){
        console.log("is under 3 character");
        message = "This username is too short";
        return showError(message);
    }
    else if(usernameValue>20)
    {
        message = "This username is too long";
        return showError(message);
    }
    else{
        localStorage.setItem("Username",usernameValue);
        return usernameValid = true;
        
    }
}


const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {

    //const formField = input.parentElement;
    const formField = document.getElementsByClassName("form-field");
    formField.className = "error";
    var errorLabel = document.getElementsByClassName('passwordLabel');
    console.log(errorLabel);
    // errorLabel.setAttribute('id', 'error')
    //var errorLabel2 = document.getElementsByClassName('passwordLabel2'); intro.setAttribute('id', 'error')
    // console.log(formField);
    // console.log(formField.outerHTML);
    // formField.classList.remove('success');
    //errorLabel.classList.add('error');
    //const error = formField.querySelector('small');
    const error = formField.className;
    error.innerHTML = message; //not showing in error.innerHTML
    console.log(message);
};

const showSuccess = (input, message) => {

    //const formField = input.parentElement;
    const formField = document.getElementsByClassName("form-field");
    formField.className = 'foo';
    //formField.classList.remove('error');
    //formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const checkPassword = () => { //is working

    let valid = false;

    const password = document.getElementById("password").innerHTML;

    if (!isPasswordSecure(password)) {
        console.log(password);
        showError(password, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        valid = false;
    } else {
        showSuccess(password);
        console.log(password);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const password2 = document.getElementById("password2").innerHTML;

    if (!isRequired(password2)) {
        showError(password2, 'Please enter the password again');
    } else if (password !== password2) {
        showError(password2, 'Confirm password does not match');
    } else {
        showSuccess(password2);
        valid = true;
    }

    console.log(password);
    console.log(password2);

    return valid;
  
};

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        // case 'email':
        //     checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
});

// function checkEmail(){
//     const emailStringArray = emailValue.split("");

//     atpos = emailStringArray.indexOf("@");
//     dotpos = emailVemailStringArrayalue.lastIndexOf(".");

//     if (atpos < 1 || ( dotpos - atpos < 2 )) {
//         e.preventDefault();
//         messsage = "Please enter a valid email address";
//         return setErrorFor(message);
//       }
//       else{
       
//         localStorage.setItem(emailValid);
//         return emailValid = true;
//     }
// }

// function setErrorFor(message){
// const errorMessage = document.getElementById("error").textContent;
// errorMessage = message;
// }

//  var submit = document.getElementById("submit"); //working
// submit.onclick = function() {
    
//     console.log("is working");
//     checkUsername();
//     checkPassword();

//     checkValidity();

//   console.log("Button pressed!");
// }

