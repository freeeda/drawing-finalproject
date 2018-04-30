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
  var leaf = document.getElementById('leaf');
  //var xSpeed = Math.random(2, 4);
  //var ySpeed = Math.random(5, 8);
  var ySpeed = Math.floor(Math.random()*6) + 3;


  moveFood();

  function moveFood(){
    context1.clearRect(0,0,referenceWidth, referenceHeight);
    context1.drawImage(leaf, xPos, yPos);

    var imageData = context1.getImageData(0,0, canvas1.width, canvas1.height);
    var data = imageData.data;

    for (var i = 0; i< data.length; i+= 4){
      data[i+3] = 150; //randomly change the opacity of image

    }
    context1.putImageData(imageData, 0, 0);

    yPos += ySpeed;

    if (xPos > referenceWidth || xPos < 0){
      ySpeed = Math.floor(Math.random()*6) + 3;

      xPos = Math.random()*canvas1.width;
      yPos = 0;
    }

    else if (yPos > referenceHeight || yPos < 0){
      ySpeed = Math.floor(Math.random()*6) + 3;

      xPos = Math.random()*canvas1.width;
      yPos = 0;
    }

    requestAnimationFrame(moveFood);
  }


}

window.addEventListener('load', setup);
*/
