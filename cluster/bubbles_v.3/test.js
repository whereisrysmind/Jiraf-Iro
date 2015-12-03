var ARRAY_OF_ANSWERS = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX",
                        "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE",
                        "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN",
                        "EIGHTEEN", "NINETEEN", "TWENTY"];
var viewer = document.getElementById("viewer");
var ctx = viewer.getContext("2d");
var balls = [];
var colors = ['#BB60C1','#FA3EB0','#604CC1','#59A3C1','#FAE91C'];
var yellowBallCount = 0; //keeps track of how many yellow balls there are
var started = false;
var clock = null;
var opacity = 1.0;
var audio = new Audio('Simon_Says.mp3');
audio.play();

function hexToRGBA(hexval, opacity)
{
    var bigint = parseInt(hexval.substring( 1, hexval.length ), 16);
    var r = (bigint>>16) & 255;
    var g = (bigint>>8) & 255;
    var b = bigint & 255;

    return "rgba(" + r + "," + g + "," + b + "," + opacity.toFixed(2) + ")";
}

function drawImage(x, y, width, height, src)
{
	var image = new Image();
	image.onload = function()
	{
		ctx.drawImage( image, x, y, width, height);
	}
	image.src = src;
}


function createBall()
{
	var ball = [];
	ball[0] = Math.floor((Math.random() * 600) + 100);   // x
	ball[1] = Math.floor((Math.random() * 200) + 100);   // y
	ball[2] = Math.floor((Math.random() * 25) + 5);      // radius
	ball[3] = Math.floor(Math.random() * colors.length); // color
	ball[4] = Math.floor((Math.random() * 10) - 5);   // dx
	ball[5] = Math.floor((Math.random() * 10) - 5);   // dy
  ball[6] = opacity; //opacity
	balls.push(ball);

  // Count the number of yellow balls:
  if (ball[3] == 4) // 4 is the color yellow as the 4th element in the colors array
  {
    yellowBallCount++;
  }
}

function drawBalls()
{
	ctx.clearRect(0, 0, viewer.width, viewer.height);
	//drawImage( 24, 48, 100, 100, "IroGraphic.png"); // add image
	for(j = 0; j < balls.length; j++)
	{
		var ball = balls[j];
		ctx.beginPath();
		ctx.arc(ball[0], ball[1], ball[2], 0, 2 * Math.PI);
		ctx.fillStyle = hexToRGBA(colors[ball[3]], ball[6]); // fading effect
//        ctx.fillStyle = colors[ball[3]];
    ctx.fill();
	}
}

function updateBalls()
{
	for(j = 0; j < balls.length; j++)
	{
		var ball = balls[j];

		// Adjust x and y based on dx and dy.
		ball[0] = ball[0] + ball[4];
		ball[1] = ball[1] + ball[5];

		// Check boundaries.
		var bounce = false;
		if((ball[0] - ball[2] < 0)|| // x - r (west)
		   (ball[0] + ball[2] > viewer.width)) // x + r (east)
		{
			ball[4] = 0 - ball[4]; // reverse dx sign
			bounce = true;
		}
		if((ball[1] - ball[2] < 0) || // y - r (north)
		   (ball[1] + ball[2] > viewer.height)) // y + r (south)
		{
			ball[5] = 0 - ball[5]; // reverse dy sign
			bounce = true;
		}
		if(bounce)
		{

		//	ball[2] = Math.floor((Math.random() * 25) + 5);      // radius
		//	ball[3] = Math.floor(Math.random() * colors.length); // color
        }
        if(opacity > 0)
        {
            ball[6] = ball[6] - .03;
        }
	}
	drawBalls();
}

function mouseDown(event)
{
	var rect = viewer.getBoundingClientRect();
	var x = event.clientX - rect.left;
	var y = event.clientY - rect.top;
	var j = 0;
	var found = false;
	for(; j < balls.length; j++)
	{
		var ball = balls[j];
		var dx = ball[0]-x;
		var dy = ball[1]-y;
		if( Math.sqrt((dx)*(dx) + (dy)*(dy)) < ball[2] )
		{
			found = true;
			break;
		}
	}
	if(found)
	{
		balls.splice(j,1);
		drawBalls();
	}
}

function keyUp(event)
{
	var code = event.keyCode ? event.keyCode : event.which;
	// p 80
	if(code==80) hitClock();
}

function hitClock()
{
	if(started) stopClock();
	else startClock();
}

function startClock()
{
	clock = setInterval(updateBalls, 200);
	started = true;
}

function stopClock()
{
	started = false;
	clearInterval(clock);
	drawBalls();
}

function checkIntScore(aInt) {
  // THIS WILL NEED TO PASS THE RESULT INTO FINAL PAGE........
  (yellowBallCount == aInt) ? console.log("CORRECT!!!") : console.log("Incorrect");
}

function checkStringScore(text) {
  // Linear search to check if aString is in ARRAY_OF_ANSWERS
  // TEST COMMENT!!!
  for (j = 0; j < ARRAY_OF_ANSWERS.length; j++) {
    if (text == ARRAY_OF_ANSWERS[j]) {
      console.log("CORRECT"); // LEFT FOR DEBUGGING PURPOSES
      console.log("index in array: "+j); // LEFT FOR DEBUGGING PURPOSES
      console.log(ARRAY_OF_ANSWERS[j]); // LEFT FOR DEBUGGING PURPOSES
      // Sends correct index to checkIntScore(aInt)
      checkIntScore(j);
    }
  }
}

function getUserInput(){
  var userRawInputText = document.getElementById('userBallCount').value;
  var text = userRawInputText.toUpperCase();
  console.log("user input: "+text);

  var inputAsInt = parseInt(userRawInputText);
  console.log("inputAsInt: "+inputAsInt);
  // Figure out if input is all ints or is a string for text
  if (isNaN(inputAsInt)) { //If userInput is not a number, then don't check the score as an Int
    checkStringScore(text);
    console.log("array length: "+ARRAY_OF_ANSWERS.length);
  } else {
    checkIntScore(inputAsInt);
  }

  //In progress... Figuring out how to check when userInput is a string (e.g. "twelve")
}

var ballCount = Math.floor((Math.random() * 30) + 20);
//console.log("ballCount: " + ballCount);
for(j = 0; j < ballCount; j++)
{
	createBall();
}
console.log("ballCount: "+ballCount); // GET RID OF THIS TO REMOVE BALL COUNT IN CONSOLE

viewer.width = 800;
viewer.height = 600;
//viewer.style.backgroundImage  = "url('background.html')";
//viewer.style.backgroundSize = "contain";
viewer.addEventListener("mousedown", mouseDown, false);
var body = document.getElementsByTagName("BODY")[0];
body.addEventListener("keyup", keyUp, false);

drawBalls();
console.log("There are "+yellowBallCount+" yellow balls...");
