const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const helloUser = document.getElementById("helloUser");
var loggedIn = false;

var usernameValid = true;
var emailValid = true;
var passwordValid = true;

// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log("button is working");
//     if((usernameValid === true) && (passwordValid===true)){
//         loggedIn = true;
//         console.log("is working");
//     }
//     else{
//         console.log("prevent default");
//         e.preventDefault();
//     }
// })

form.addEventListener('submit', function (e) {
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

    }
    else{
        e.preventDefault();
    }
});

function checkUsername(){
    console.log("is checking username");
    const usernameValue = username.value;
    // const emailValue = Object.values(email);


    if(usernameValue < 3){
        console.log("is under 3 character");
        message = "This username is too short";
        return setErrorFor(message);
    }
    else if(usernameValue>20)
    {
        message = "This username is too long";
        return setErrorFor(message);
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

    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input, message) => {

    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Confirm password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

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

if(loggedIn == true)
{
    helloUser.textContent = "hello" + usernameValue+ ", My name is Matipa";
}
