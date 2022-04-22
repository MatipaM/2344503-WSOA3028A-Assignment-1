var text = document.getElementById("helloUser");

let userName = prompt("Please enter your name");
if (userName == null || userName == "") {
  text = "User cancelled the prompt.";
} else {
  text.innerHTML = "Hello " + userName + "! My name is Matipa.";
}