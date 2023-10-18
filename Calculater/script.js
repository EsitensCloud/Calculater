let screenbar = "";

function Click(){
   console.log(event.target.innerHTML)
   screenbar += event.target.innerHTML
   console.log(screenbar)
   document.querySelector("p").innerHTML = screenbar
}

function Result(){
    UpdateScreen()
    screenbar = eval(screenbar)
}

function UpdateScreen(){
    document.querySelector("p").innerHTML = eval(screenbar)
}

function Dot() {
    if (screenbar.indexOf('.') === -1) {
        // Если точка еще не присутствует в числе
        screenbar += '.';
        UpdateScreen();
    }
}

function Percent() {
    screenbar = screenbar/100
    UpdateScreen()
}



function Switch(){
    if (screenbar !== '') {
        
        if (screenbar.charAt(0) === '-') {
            screenbar = screenbar.slice(1);
        } else {
            screenbar = '-' + screenbar;
        }
        UpdateScreen();
    }
}

function Reset(){
    screenbar = ""
    document.querySelector("p").innerHTML = "0" 
}

document.querySelector(".one").addEventListener("click",Click)
document.querySelector(".two").addEventListener("click",Click) 
document.querySelector(".three").addEventListener("click",Click) 
document.querySelector(".four").addEventListener("click",Click) 
document.querySelector(".five").addEventListener("click",Click) 
document.querySelector(".six").addEventListener("click",Click) 
document.querySelector(".seven").addEventListener("click",Click) 
document.querySelector(".eight").addEventListener("click",Click) 
document.querySelector(".nine").addEventListener("click",Click) 
document.querySelector(".zero").addEventListener("click",Click) 
document.querySelector(".division").addEventListener("click",Click)
document.querySelector(".myltiply").addEventListener("click",Click)
document.querySelector(".minus").addEventListener("click",Click)
document.querySelector(".plus").addEventListener("click",Click)
document.querySelector(".equal").addEventListener("click",Result)
document.querySelector(".ac").addEventListener("click",Reset)
document.querySelector(".plus-minus").addEventListener("click",Switch)
document.querySelector(".percent").addEventListener("click", Percent)
document.querySelector(".dot").addEventListener("click", Dot);