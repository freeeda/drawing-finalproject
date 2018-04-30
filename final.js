

var sh = document.getElementById('tower');
var ldn = document.getElementById('telephone');
var hel = document.getElementById('church');

var view1 = document.getElementById('shanghai');
var view2 = document.getElementById('london');
var view3 = document.getElementById('helsinki');

sh.addEventListener('mouseover', increaseOpacity1);
sh.addEventListener('mouseout', decreaseOpacity1);

ldn.addEventListener('mouseover', increaseOpacity2);
ldn.addEventListener('mouseout', decreaseOpacity2);

hel.addEventListener('mouseover', increaseOpacity3);
hel.addEventListener('mouseout', decreaseOpacity3);

function increaseOpacity1(){
  view1.style.opacity = 0.95;
  view1.style.zIndex = 25;
  view2.style.opacity = 0.4;
  view3.style.opacity = 0.4;
}

function decreaseOpacity1(){
  view1.style.opacity = 0.8;
  view1.style.zIndex = 0;
}

function increaseOpacity2(){
  view2.style.opacity = 0.95;
  view2.style.zIndex = 25;
  view1.style.opacity = 0.4;
  view3.style.opacity = 0.4;
}

function decreaseOpacity2(){
  view2.style.opacity = 0.8;
  view2.style.zIndex = 0;
}

function increaseOpacity3(){
  view3.style.opacity = 0.95;
  view3.style.zIndex = 25;
}

function decreaseOpacity3(){
  view3.style.opacity = 0.8;
  view3.style.zIndex = 0;
  view1.style.opacity = 0.4;
  view2.style.opacity = 0.4;
}
