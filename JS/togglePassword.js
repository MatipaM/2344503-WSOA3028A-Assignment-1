const password = document.getElementById("password").innerHTML;
const password2 = document.getElementById("password2").innerHTML;

togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("eye"); //eye disappeaing after moving to second input label
});

togglePassword2 = document.getElementById("togglePassword2");

togglePassword2.addEventListener("click", function () {
    // toggle the type attribute
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("eye2");
});

