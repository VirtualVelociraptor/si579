/*
* Excercise 1
*
*/
const colorBlock = document.getElementById("color-block");
const centerText = document.getElementById("center-text");
const colorName = document.getElementById("color-name");
let isPink = true;

/*
* Then write a function that changes the text and the color inside the div
*
*/
colorBlock.addEventListener("click", changeColor);

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(isPink){
        //change the background color using JS
        colorBlock.style.backgroundColor = "#00FFFF";
        isPink = false;
        //Change the text of the color using the span id color-name
        colorName.innerHTML = "#00FFFF";
    }
    else{
        //change the background color using JS
        colorBlock.style.backgroundColor = "#F08080";
        isPink = true;
        //Change the text of the color using the span id color-name
        colorName.innerHTML = "#F08080";

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here

    //Send the calculated temperature to HTML

}


