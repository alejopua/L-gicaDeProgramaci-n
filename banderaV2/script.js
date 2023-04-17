
function dibujarCuadrado(x,y,color, height) {
  let lienzo = document.getElementById("lienzo");
  let pincel = lienzo.getContext("2d");
  
  pincel.fillStyle = color;
  pincel.fillRect(x, y, 50, height);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, 50, height);
}

for (let i = 0; i < 600; i = i + 50) {
  dibujarCuadrado(i,0,"yellow", Math.floor(Math.random()*50 + 1));
  dibujarCuadrado(i,50,"blue", Math.floor(Math.random()*50 + 1));
  dibujarCuadrado(i,100,"red",Math.floor(Math.random()*50 + 1));
}

// dibujarCuadrado(0,0,"yellow", Math.floor(Math.random()*50 + 1));
// dibujarCuadrado(50,0,"blue", Math.floor(Math.random()*50 + 1));
// dibujarCuadrado(100,0,"red",Math.floor(Math.random()*50 + 1));
