const blueBtnSound = new Audio ("./sounds/blue.mp3");
const redBtnSound = new Audio ("./sounds/red.mp3");
const greenBtnSound = new Audio ("./sounds/green.mp3");
const yellowBtnSound = new Audio ("./sounds/yellow.mp3");
const wrongSound = new Audio ("./sounds/wrong.mp3");


// new pattern on click 


/* ---------------

1. when the game loads, a new instance of pattern is set

*/
$(window).on("load", function () { 
    
    let patternArray = []; 
    let patternNum = Math.floor(((Math.random())*4)+1);
    let level = 1; 
    patternArray[0] = patternNum;
    let runonce = 1;
    // setting the randoms numbers to btns
    


    $(window).on("keypress", function () { 

        while (runonce >= 1) {
            $("#level-title").text(`Level ${level}`);
            // Run this once after the first press
            switch(patternNum) {
                case 1: {
                    $("#green").fadeOut(500); 
                    $("#green").fadeIn(500); 
                    console.log("Green")
                    break;
                } case 2: { 
                    $("#red").fadeOut(500); 
                    $("#red").fadeIn(500); 
                    break
                } case 3: { 
                    $("#yellow").fadeOut(500); 
                    $("#yellow").fadeIn(500); 
                    break
                } case 4: { 
                    $("#blue").fadeOut(500); 
                    $("#blue").fadeIn(500); 
                    break
                }
            }

            runonce--;
        }
        
    })

})


function play () { 
    
}