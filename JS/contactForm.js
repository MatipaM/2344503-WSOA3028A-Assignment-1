email = document.getElementById("email");
message = document.getElementById("message");

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    valid &= fieldValidation(fields.email, isEmail);
    return valid;
   }

   class User {
    constructor(email, message) {
    this.email = email;
    this.message = message;
    } 
   }

   function sendContact(){
       if(isValid()){
           let user = new User(email.value, message.value);

           alert(usernameValid + "thank you for getting in contact! I will get back with you as soon as possible.");
       }
       else{
        alert("There was an error, please make sure your email address is correct");
       }
       
   }