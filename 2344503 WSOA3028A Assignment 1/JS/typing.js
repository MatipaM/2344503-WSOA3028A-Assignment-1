var i = 0;
var txt = 'Welcome to my portfolio website!'; /* The text */
var speed = 50; 

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sentence").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}