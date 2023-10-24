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
    let userPatternArray = [];
    let runonce = 1;



    $(window).on("keypress", function () { 

        while (runonce >= 1) {
            $("#level-title").text(`Level ${level}`);
            // Run this once after the first press
            
            initialBtnFlash(patternNum)
            btnSetsValue(userPatternArray)
            runonce--;
        }
        
        
    })

    

})



function initialBtnFlash (patternNum) { 
    switch(patternNum) {
                case 1: {
                    $("#green").fadeOut(500); 
                    $("#green").fadeIn(500); 
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
}

function btnSetsValue (userPatternArray) { 

    $("#green").click(function () { 
        userPatternArray.push(1);
        console.log(userPatternArray)
    })

    $("#red").click(function () { 
        userPatternArray.push(2)
        console.log(userPatternArray)
    })

    $("#yellow").click(function () { 
        userPatternArray.push(3)
        console.log(userPatternArray)
        
    })

    $("#blue").click(function () { 
        userPatternArray.push(4)
        console.log(userPatternArray)
    })
    
}






/*
    initialBtnFlash is a function that flashes a random button at level 1 of the game

    2. Push a value to the array depending on the button clicked.
*/