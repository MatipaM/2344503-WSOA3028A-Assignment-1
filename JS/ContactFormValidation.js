const form = document.getElementById("form");
form.onsubmit = submit;

function validateForm(){
    checkEmail();
}

function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

form.addEventListener('submit', (e) => {
    console.log("is working");
    
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