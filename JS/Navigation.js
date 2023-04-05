function BakeryGame()
{
    location.href = "BakeryGame.html";
}


// function ContactMe()
// {
//     location.href = "contactMe.html"
// }

function ContactThanks()
{
    location.href = "contactThanks.html"
}

// function Development()
// {
//     location.href = "Development.html"
// }

function ExternalEssay()
{
    location.href = "ExternalEssay.html";
 
}

function FarmingSimulator()
{
    location.href = "FarmingSimulator.html";
}

function Firtech()
{
    location.href = "Firtech.html";
}

// function Index()
// {
//     console.log("button pressed");
//     location.href = "index.html";
 
// }

function PlantsVsInsects()
{
    location.href = "PlantsVsInsects.html";
}

function Profile()
{
    location.href = "Profile.html";
}

function WomansFlow()
{
    location.href = "WomansFlow.html";
}


//NAV BAR
const navMenu = ["index.html","Development.html","contactMe.html", "Profile.html"];
// let navArea = document.getElementById('nav');
let header = document.getElementById("header");
header.classList.add("h-card");

let footer = document.getElementById("footer");
footer.classList.add("h-card");

footer.innerText = "ocmatipa@gmail.com";

let  nav = document.createElement("nav");
header.append(nav);
nav.classList.add("h-entry");
nav.classList.add("#nav");

let ul = document.createElement("ul");
nav.append(ul);

console.log("file is working");

// let navButtons = header.getElementsByTagName('a');
// let icons = navArea.getElementsByTagName('i');

for(let i = 0; i < navMenu.length; i++)
{
    let li = document.createElement("li");
    let a = document.createElement("a");
    let iLink =  document.createElement("i");

    ul.append(li);
    li.append(a);
    a.append(iLink);

    a.classList.add("u-url");
    iLink.classList.add("fa-solid");

    let className;
    let className2;
    let innerText;

    switch(i)
    {
        case 0:
            className = "fa-house-chimney";
            innerText = "Home";
            break;
        case 1:
            className = "fa-solid";
            className2 = "fa-code";
            innerText = "Development";

            break;
        case 2:
            className ="fa-solid";
            className2 = "fa-address-book";
            innerText = "Contact Me";
            break;
        case 3:
            className = "fa-solid";
            className2 = "fa-id-card-clip";
            innerText = "About Me";
            break;
    }

    iLink.classList.add(className);

    if(className2 != null)
    {
        iLink.classList.add(className2);

    }

    iLink.innerHTML = innerText;

    a.onclick = function()
    {
        location.href = navMenu[i]
    }
}

window.onresize = function(){ location.reload(); }



