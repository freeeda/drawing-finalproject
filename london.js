//get the reference of the shooting star image
var star = document.getElementById('star');

var windowWidth = document.innerWidth;
var windowHeight = document.innerHeight;


/*
const canvas1 = document.getElementById('c1');
const context1 = canvas1.getContext('2d');

var referenceWidth = window.innerWidth;
var referenceHeight = window.innerHeight;

function setup(){
  canvas1.style.width = referenceWidth + 'px';
  canvas1.style.height = referenceHeight + 'px';

  var scale = window.devicePixelRatio;
  canvas1.width = referenceWidth * scale;
  canvas1.height = referenceHeight * scale;

  context1.scale(scale, scale);

  draw();

}

function draw(){
  //set the initial position of soup dumpling at the center of the screen
  var xPos = 0.5 * canvas1.width;
  var yPos = 0.5 * canvas1.height;
  var food1 = document.getElementById('food1');
  var xSpeed = 2;
  var ySpeed = 2;


  moveFood();

  function moveFood(){
    context1.clearRect(0,0,referenceWidth, referenceHeight);
    context1.drawImage(food1, xPos, yPos);
    yPos += ySpeed;
    xPos += xSpeed;

    if (xPos > referenceWidth || xPos < 0){
      xSpeed *= -1;
    }

    if (yPos > referenceHeight || yPos < 0){
      ySpeed *= -1;
    }

    requestAnimationFrame(moveFood);
  }

}

window.addEventListener('load', setup);
*/
