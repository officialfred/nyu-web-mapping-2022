
// need to change this to jquery

// create variables for the buttons to allow them to disappear
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

// create functions for each of the first three buttons. /n
// They make themselves disappear and show the next button. /n
// They do the same, but to other buttons /n
// Next step is to learn how to write this more concisely
button1.onclick = function() {
    button2.style.visibility = "visible";
    button1.style.visibility = "hidden";
}

button2.onclick = function() {
    button3.style.visibility = "visible";
    button2.style.visibility = "hidden";
}

button3.onclick = function() {
    button4.style.visibility = "visible";
    button3.style.visibility = "hidden";
}
