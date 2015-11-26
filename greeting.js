// by Tatyana Polyakova
// 11/25/2015

var hello, text;
var textR, textG, textB;
var nextR, nextG, nextB;
var stepR, stepG, stepB;

function setNextColor() {
  var step = 16;
  var oldR = nextR;
  var oldG = nextG;
  var oldB = nextB;
  nextR = Math.round(Math.random()) * 256;  // 0 or 256
  nextG = Math.round(Math.random()) * 256;
  nextB = Math.round(Math.random()) * 256;
  stepR = ((nextR - oldR) == 0) ? 0 : ( ((nextR - oldR) < 0) ? -step : step );
  stepG = ((nextG - oldG) == 0) ? 0 : ( ((nextG - oldG) < 0) ? -step : step );
  stepB = ((nextB - oldB) == 0) ? 0 : ( ((nextB - oldB) < 0) ? -step : step );
}

function initCycle() {
  hello = document.getElementById('hello');
  text = hello.innerHTML;
  textR = new Array(text.length);
  textG = new Array(text.length);
  textB = new Array(text.length);
  nextR = 256; nextG = 256; nextB = 256;

  for (var i=0; i < text.length; i++) {
    textR[i] = 256;
    textG[i] = 256;
    textB[i] = 256;
  }
  setNextColor();
  setInterval(runCycle, 100);
}

function runCycle() {
  var lastR = textR[textR.length - 1];
  var lastG = textG[textG.length - 1];
  var lastB = textB[textB.length - 1];

  if ((lastR == nextR) && (lastG == nextG) && (lastB == nextB)) {
    // set a new color
    setNextColor();
  }
  // remove color from front, and append new color to end of arrays
  textR.shift(); textR.push(lastR + stepR);
  textG.shift(); textG.push(lastG + stepG);
  textB.shift(); textB.push(lastB + stepB);

  var out = '';
  for (var i=0; i < text.length; i++) {
     out += '<span style="color:rgb('+ textR[i] +','+ textG[i] +','+ textB[i] +')">' + text.charAt(i) +'</span>';
  }
  //out += ' ('+ textR[i-1] +','+ textG[i-1] +','+ textB[i-1] +')';    // DEBUG
  hello.innerHTML = out;

}

window.onload = initCycle;

