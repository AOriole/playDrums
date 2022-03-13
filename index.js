
// call eventListener on obj/target "button" & it takes 2 args atleast | event-type(keyword) as str & interface implementation(user-defined js)
// document.querySelector("button").addEventListener("click", handleClick);


// #####################    Detect button Press     ######################

// find len of button array with class = ".drum"        | i.e. str
var totDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<totDrums; i++)
{   
    // looop via all btns & call eventListener on target obj = button & then exe use-defined fun
   document.querySelectorAll("button")[i].addEventListener("click", mysound);

    // play audio on web
    function mysound()
    {
        // find innerHTML of btn that got pressed   
        var btnInnerHtml = this.innerHTML;  

        makeSound(btnInnerHtml);                                    // call & pass arg, to play relevent sound
        
        btnAnimation(btnInnerHtml);
    }     
}



// #####################    Detect keyboard Press      ######################

// add keyboard keys to event listener .i.e. which key was pressed, using document the entire doc/ webpage starts listening for keyboard strokes
// use 'keypress' or newer is 'keydown'
document.addEventListener('keypress', function(event){ 
    //console.log(event.key);                 // know which event(in this case a keyboard press) triggered eventlistener
    makeSound(event.key);
    
    btnAnimation(event.key);
 });        


 //
function makeSound(key)
{
    // switch on text-content inside html-tag <button>  i.e. WASDJKL
    switch (key)
    {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');          // create an obj with new Audio('filepath')
            tom1.play();                                       // call inbuilt method on created obj using dot operator
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');          
            tom2.play();                                       
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');          
            tom3.play();                                       
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');          
            tom4.play();                                       
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');          
            snare.play();                                       
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');          
            crash.play();                                       
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');          
            kick.play();                                       
            break;
        
        default:
            console.log(key);                                    // if none of 'wasdjkl' btns are cliked
    }
}


// show/ animate btns when pressed
function btnAnimation(currentKey){                                  // detect activeBtn based on the current key thats pressed
    var activeBtn = document.querySelector("." + currentKey);       // "." is used for style like for classes in css

    activeBtn.classList.add('pressed');                             // adding a pressed class via js & its values are set in .css file

    setTimeout(function(){                                         // take 2 args as 'fun' & 'time' in ms
        activeBtn.classList.remove('pressed');},   // arg1         // remove the shade applied or remove the 'pressed' class after key is pressed, so it animates

    100);                                           //arg2         // wait time for transistion
}