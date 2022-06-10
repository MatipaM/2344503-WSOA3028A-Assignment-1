
const form = document.getElementById("form");
form.onsubmit = submit;

//just added
function validateForm(){
    checkPassword();
    checkConfirmPassword();
    if ((checkConfirmPassword.valid == true) && (checkPassword.valid == true)) { //changed from isFormValid
        localStorage.setItem('username1', 'username');
        console.log("registration was succesgul");
        // localStorage.setItem('password', 'password');
        // const username1 = localStorage.getItem('username1');
        // console.log(username1)
    }
    else{
     
        e.preventDefault();
    }

    // isPasswordValid = checkPassword(),
    // isConfirmPasswordValid = checkConfirmPassword();
    // console.log(password);
    // console.log(password2);

//let isFormValid = isUsernameValid
// &&
//     isPasswordValid &&
//     isConfirmPasswordValid;
}

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = () => {
    if(usernameValid == false)
    {
        const formField = document.getElementById("FormField1");

        formField.classList.remove("Success1");
        formField.classList.add('Error1'); //working
        const error = document.getElementsByClassName("Error1");
        console.log(usernameValid);
    }


};

const showSuccess = () => { //not running
    if(usernameValid == true)
    {
        console.log("succesful username")
        console.log("show success is running")
        const formField = document.getElementById("FormField1");
        formField.classList.remove('Error1'); 
        formField.classList.add("Success1");  //should work outside this if/else function
    }
};


const checkPassword = () => { 

    let valid = false;

    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    console.log(password);
    console.log(password2);

    if (!isPasswordSecure(password)) {
        console.log(password);
        showError();
        alert("The password is not secure, try adding special characters, number and upper and lower case letters");
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
    const password2 = document.getElementById("password2").value;

    if (password !== password2) {
        showError();
        alert("Passwords do not match");
    } else {
        showSuccess(password2);
        valid = true;
    }

    console.log(password);
    console.log(password2);

    return valid;
};


form.addEventListener('submit', validateForm());



