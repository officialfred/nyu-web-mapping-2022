
// need to change this to jquery

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var vid = document.getElementById("vid");


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
