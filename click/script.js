
let lienzo = document.getElementById("lienzo");
let pincel = lienzo.getContext("2d");

pincel.fillStyle = "lightgrey ";
pincel.fillRect(0, 0, 600, 400);

function mostrarMensaje(x,y){

  var x = evento.pageX - lienzo.offsetLeft; //pos x
  var y = evento.pageY - lienzo.offsetTop; //pos y
  
  console.log("x=" + x + ", y=" + y);

  pincel.fillStyle = "red";
  pincel.beginPath();
  pincel.arc(x,y,10,0, Math.PI*2);
  pincel.fill();
}

lienzo.onclick = mostrarMensaje;

