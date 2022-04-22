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

form.addEventListener(document.getElementById("submit"), (e)=>{
    e.preventDefault();
    console.log("button is working");
    if((usernameValid === true) && (passwordValid===true)){
        loggedIn = true;
        console.log("is working");
    }
    else{
        console.log("prevent default");
        e.preventDefault();
    }
})

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

function checkPassword(){
    console.log("checking password")

    const passwordValue = password.value;
    const password2Value = password2.value;

    console.log(password2); //coming back as undefined
    console.log(passwordValue);

    if(passwordValue != password2Value) // need more secure password validation
  {
    message = "Both passwords need to be the same";
    return setErrorFor(message);
  }
  else{
      console.log("Passwords are the same");
    localStorage.setItem("Password",passwordValue);
    return passwordValid = true;
   
}
}

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

function setErrorFor(message){
const errorMessage = document.getElementById("error").textContent;
errorMessage = message;
}

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
