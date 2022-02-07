/*
* Excercise 1
*
*/

document.getElementById("color-block").addEventListener("click", changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){

    var bgroundColor = document.getElementById("color-block");
    var colorName = document.getElementById("color-name").innerHTML;

    //Write a condition determine what color it should be changed to
    if(colorName == '#F08080'){
        //change the background color using JS
        bgroundColor.style.backgroundColor = "#80adf0"
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#80adf0"
    }
    else{
        //change the background color using JS
        bgroundColor.style.backgroundColor = "#F08080"
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#F08080"
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

document.getElementById("convertbtn").addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    var fahrenheit = document.getElementById("f-input").value;
    var celsius = (fahrenheit-32) / 1.8;
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = celsius
}


