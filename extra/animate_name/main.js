// Simple bubble program.
var name = prompt("Hello, please enter your name:");
console.log("Hello " + name + "!");

// Our colors, to be stored in an array. 
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

// Array of Colors
//var letterColors = [red,orange,green,blue,purple];
// circle and sqaure are our only options. 
var bubbleShape = "circle";


// var myname="Chris!";
drawName(name, letterColors);
//drawName(myName, letterColors);



bounceBubbles();