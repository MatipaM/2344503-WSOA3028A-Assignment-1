
const form = document.getElementById("form");
form.onsubmit = submit;

//just added
function validateForm(){
    let isUsernameValid = checkUsername();
    // isEmailValid = checkEmail(),
    // isPasswordValid = checkPassword(),
    // isConfirmPasswordValid = checkConfirmPassword();
    // console.log(password);
    // console.log(password2);

//let isFormValid = isUsernameValid
// &&
//     // isEmailValid &&
//     isPasswordValid &&
//     isConfirmPasswordValid;
}

function checkUsername(){
    usernameValid = false;
    console.log("is checking username");
    const username = document.getElementById("username").value;
    console.log(username);
    // const emailValue = Object.values(email);
    var usernameError;

    if(username.length < 3){
        console.log("is under 3 character");
        message = "This username is too short";
        showError(message);
        return usernameValid = false;
    }
    else if(username.length>=20)
    {
        message = "This username is too long";
        showError(message);
        return usernameValid = false;
    }
    else{
        usernameValid = true;  
        showSuccess();
        return usernameValid = true;   
    }
}


const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (message) => {
    if(usernameValid == false)
    {
        const formField = document.getElementById("form-field-1");

        formField.classList.remove("success-1");
        formField.classList.add('error-1'); //working
        const error = document.getElementsByClassName("error-1");
        error.textContent = message;
        error.innerHTML = message;
        console.log(message);
        console.log(usernameValid);
    }


};

const showSuccess = () => { //not running
    if(usernameValid == true)
    {
        console.log("succesful username")
        console.log("show success is running")
        const formField = document.getElementById("form-field-1");
        formField.classList.remove('error-1'); 
        formField.classList.add("success-1");  //should work outside this if/else function
    }
};

const checkPassword = () => { //is working

    let valid = false;

    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    console.log(password);
    console.log(password2);

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
    const password2 = document.getElementById("password2").value;

    if (password !== password2) {
        showError(password2, 'Passwords do not match');
    } else {
        showSuccess(password2);
        valid = true;
    }

    console.log(password);
    console.log(password2);

    return valid;
  
};


form.addEventListener('input', (e) => {
    checkUsername();
});

form.addEventListener('submit', (e) => {
    console.log("is working");
    
        // e.preventDefault();
    
        let isUsernameValid = checkUsername(); //added in semi colon
        console.log(isUsernameValid);
            // isPasswordValid = checkPassword(),
            // isConfirmPasswordValid = checkConfirmPassword();
    
        //let isFormValid = isUsernameValid
            //  &&
            // isPasswordValid &&
            // isConfirmPasswordValid;
    
        if (isUsernameValid == true) { //changed from isFormValid
            localStorage.setItem('username1', 'username');
            console.log("registration was succesgul");
            // localStorage.setItem('password', 'password');
            // const username1 = localStorage.getItem('username1');
            // console.log(username1)
        }
        else{
            e.preventDefault();
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


