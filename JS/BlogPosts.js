const hidden = document.getElementById("toggleText1");

hidden.onmouseout = toggleText;

function toggleText(){
    hidden.classList.remove("hide-text");
    console.log("hiding text");g
};

