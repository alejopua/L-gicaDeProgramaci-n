var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");    
pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400); 
pincel.strokeStyle = "black";
pincel.strokeRect(0,0,600,400);
let colors = ["blue","red","green"];
let indiceColor = 0
function dibujarCirculo(x,y){  
  pincel.fillStyle = colors[indiceColor];
  pincel.beginPath();
  pincel.arc(x,y,10,0,2*3.14);
  pincel.fill();
  console.log(x + "," + y);     
}


function alterarColor() {

  indiceColor++;

  if (indiceColor == 3) {
    indiceColor = 0;
  }
  
}

lienzo.onclick = move;
lienzo.oncontextmenu = alterarColor;


function move() {

  let intervalo;

  lienzo.onclick = function(evento) {
  // Obtener la posición X del clic dentro del lienzo
  let x = evento.pageX - lienzo.offsetLeft;
  let speed = 1;
  let direction = true;
  // Detener el movimiento automático anterior (si lo hay)
  //clearInterval(intervalo);

  // Iniciar el nuevo movimiento automático
  intervalo = setInterval(function() {
    pincel.clearRect(0,0,600,400);
    dibujarCirculo(x,evento.pageY - lienzo.offsetTop);

    if (x+10 >= lienzo.width) {
      direction = false;
    } else if (x-10 <= 0){
      direction = true;
    }


    if (direction) {
      x += speed;
    } else {
      x -= speed;
    }

  }, 10);
  };


}
