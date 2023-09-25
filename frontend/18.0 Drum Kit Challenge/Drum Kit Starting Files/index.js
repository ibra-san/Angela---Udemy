const allDrums = document.querySelectorAll(".drum") // this is an array of all the elements that contain drum as its class
 

for (let i=0; i<= allDrums.length; i++) { 
    if(allDrums[i].textContent === "w") { 
        allDrums[i].style.backgroundImage = "url('./images/tom1.png')"
    }else if(allDrums[i].textContent === "a") { 
        allDrums[i].style.backgroundImage = "url('./images/tom2.png')"
    }else if(allDrums[i].textContent === "s") { 
        allDrums[i].style.backgroundImage = "url('./images/tom3.png')"
    }else if(allDrums[i].textContent === "d") { 
        allDrums[i].style.backgroundImage = "url('./images/tom4.png')"
    }else if(allDrums[i].textContent === "j") { 
        allDrums[i].style.backgroundImage = "url('./images/snare.png')"
    }else if(allDrums[i].textContent === "k") { 
        allDrums[i].style.backgroundImage = "url('./images/crash.png')"
    }else if(allDrums[i].textContent === "l") { 
        allDrums[i].style.backgroundImage = "url('./images/kick.png')"
    }
}