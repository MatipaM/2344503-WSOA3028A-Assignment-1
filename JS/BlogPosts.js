const hidden = document.getElementById("toggleText1");

hidden.onmouseout = toggleText;

function toggleText(){
    hidden.classList.remove("HideText");
    console.log("hiding text");g
};

