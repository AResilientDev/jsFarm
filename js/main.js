alert("I wonder who's farm this is")


var cow = document.getElementById('cow')
var moo = document.getElementById('moo')
var sheep = document.getElementById('sheep')
var baah = document.getElementById('baah')
var rooster = document.getElementById('rooster')
var roostercall = document.getElementById('rooster-call')
var top = 0;
var left = 0;

function moveLeft(){
  left += 125;

}

function moveTop(){
  top -= 125;
}

cow.onclick = moveCow


function moveCow(){
  moveLeft = Math.floor(Math.random()*350);
  moveTop = Math.floor(Math.random()*350);
  cow.style.top = moveTop + 'px';
  cow.style.left = moveLeft + 'px';
  moo.play();
}

sheep.onclick = moveSheep

function moveSheep(){
  moveLeft = Math.floor(Math.random()*350);
  moveTop = Math.floor(Math.random()*350);
  sheep.style.top = moveTop + 'px';
  sheep.style.left = moveLeft + 'px';
  baah.play();
}

rooster.onclick = moveRooster

function moveRooster(){
  moveLeft = Math.floor(Math.random()*350);
  moveTop = Math.floor(Math.random()*350);
  rooster.style.top = moveTop + 'px';
  rooster.style.left = moveLeft + 'px';
  roostercall.play();
}
