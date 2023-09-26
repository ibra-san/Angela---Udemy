const allDrums = document.querySelectorAll(".drum") 
const tom1Sound = new Audio("./sounds/tom-1.mp3");
const tom2Sound = new Audio("./sounds/tom-2.mp3");
const tom3Sound = new Audio("./sounds/tom-3.mp3");
const tom4Sound = new Audio("./sounds/tom-4.mp3");
const crashSound = new Audio("./sounds/crash.mp3");
const kickBassSound = new Audio("./sounds/kick-bass.mp3");
const snareSound = new Audio("./sounds/snare.mp3");

window.addEventListener("keypress", (event) => {
    if(event.key==="w") {
        tom1Sound.play();
    } else if (event.key==='a') {
        tom2Sound.play();
    } else if (event.key==='s') { 
        tom3Sound.play();
    } else if (event.key==='d') { 
        tom4Sound.play();
    } else if (event.key==='j') { 
        snareSound.play();
    } else if (event.key === 'k') { 
        crashSound.play();
    } else if (event.key === 'l') { 
        kickBassSound.play();
    }
})

for (let i=0; i<= allDrums.length; i++) { 
    if(allDrums[i].textContent === "w") { 
        allDrums[i].style.backgroundImage = 'url("./images/tom1.png")'
        allDrums[i].addEventListener("click", () => { 
            tom1Sound.play();
        })
        
    }else if(allDrums[i].textContent === "a") { 
        allDrums[i].style.backgroundImage = "url('./images/tom2.png')"
        allDrums[i].addEventListener("click", () => { 
            tom2Sound.play();
        })
    }else if(allDrums[i].textContent === "s") { 
        allDrums[i].style.backgroundImage = "url('./images/tom3.png')"
        allDrums[i].addEventListener("click", () => { 
            tom3Sound.play();
        })
    }else if(allDrums[i].textContent === "d") { 
        allDrums[i].style.backgroundImage = "url('./images/tom4.png')"
        allDrums[i].addEventListener("click", () => { 
            tom4Sound.play();
        })
    }else if(allDrums[i].textContent === "j") { 
        allDrums[i].style.backgroundImage = "url('./images/snare.png')"
        allDrums[i].addEventListener("click", () => { 
            snareSound.play();
        })
    }else if(allDrums[i].textContent === "k") { 
        allDrums[i].style.backgroundImage = "url('./images/crash.png')"
        allDrums[i].addEventListener("click", () => { 
            crashSound.play();
        })
    }else if(allDrums[i].textContent === "l") { 
        allDrums[i].style.backgroundImage = "url('./images/kick.png')"
        allDrums[i].addEventListener("click", () => { 
            kickBassSound.play();
        })
    }
}

