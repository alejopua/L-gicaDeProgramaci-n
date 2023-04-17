var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");    
pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400); 
pincel.strokeStyle = "black";
pincel.strokeRect(0,0,600,400);
let colors = ["blue","red","green"];
let indiceColor = 0
let radio = 20;
let xRandom;
let yRandom;

function dibujarCirculo(x,y,radio,color){  
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x,y,radio,0,2*3.14);
  pincel.fill();
  console.log(x + "," + y);     
}

function random(max) {
  return Math.floor(Math.random()*max + 1);
}

function circleRandom(x,y) {
  dibujarCirculo(x,y, radio + 40, "red");
  dibujarCirculo(x,y, radio + 20, "white");
  dibujarCirculo(x,y, radio, "red");
  
}

function aleatorio() {
  
  pincel.clearRect(0,0,600,400);
  xRandom = random(600);
  yRandom = random(400);
  circleRandom(xRandom,yRandom);

}
setInterval(aleatorio, 1000);

lienzo.onclick = function(evento) {
  let x = evento.pageX - lienzo.offsetLeft;
  let y = evento.pageY - lienzo.offsetTop;

  if ((x < xRandom + radio) && (x > xRandom - radio) && (y < yRandom + radio) && (y > yRandom - radio)) {
    alert("Tiro certero");
  }
};


