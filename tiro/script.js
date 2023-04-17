var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");
let canIDraw = false;

//Dibuja rectángulo gris
pincel.fillStyle = "orange";
pincel.fillRect(0,0,600,400); 
pincel.strokeStyle = "black";
pincel.strokeRect(0,0,600,400);

//Dibuja cuadrado rojo
pincel.fillStyle = "pink";
pincel.fillRect(0,0,50,50); 
pincel.strokeStyle = "black";
pincel.strokeRect(0,0,50,50);

//Dibuja cuadrado verde
pincel.fillStyle = "green";
pincel.fillRect(50,0,50,50); 
pincel.strokeStyle = "black";
pincel.strokeRect(50,0,50,50);

//Dibuja cuadrado azul
pincel.fillStyle = "blue";
pincel.fillRect(100,0,50,50); 
pincel.strokeStyle = "black";
pincel.strokeRect(100,0,50,50);

//let colors = ["blue","red","green"];
//let indiceColor = 0
let color = "blue";
function dibujarCirculo(evento){  
  xR = evento.pageX - lienzo.offsetLeft;
  yR = evento.pageY - lienzo.offsetTop;

  if (canIDraw) {
    if ((xR > 0 && yR > 56) || (xR > 156 && yR > 0)) {
      pincel.fillStyle = color;
      pincel.beginPath();
      pincel.arc(xR,yR,6,0,2*Math.PI);
      pincel.fill();
      console.log(xR + "," + yR);      
    }
  }
}

lienzo.onmousemove = dibujarCirculo;

function enableDraw() {
  canIDraw = true;
}

function disableDraw() {
  canIDraw = false;
}

lienzo.onmousedown = enableDraw;
lienzo.onmouseup = disableDraw;

let xR;
let yR;

lienzo.onclick = function(evento) {
  let x = evento.pageX - lienzo.offsetLeft;
  let y = evento.pageY - lienzo.offsetTop;
  console.log(x + "," + y); 

  if ((x <= 50) && (y <= 50)) {
    color = "pink";
  } else if ((x > 50 && x <= 100) && (y <= 50)) {
    color = "green"
  } else if ((x > 100 && x <= 150) && (y <= 50)) {
    color = "blue"
  }
};


