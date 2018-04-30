//get the reference of the shooting star image
var star = document.getElementById('star');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

//let the shooting star begin from the top right corner of the screen
var starX = windowWidth;
var starY = -100;

var move = requestAnimationFrame(moveStar);

//move star to the bottom left corner
function moveStar(event){
  move = requestAnimationFrame(moveStar);
  // if (starX >= windowWidth || starY <= windowHeight){
    starX -= 3;
    starY += 1;
    star.style.left = starX + 'px';
    star.style.top = starY + 'px';

    //loop the star as long as it falls out of the screen
    if (starX <= 0 || starY >= windowHeight){
      starX = windowWidth;
      starY = -100;
    }

}

star.addEventListener('load', moveStar);
