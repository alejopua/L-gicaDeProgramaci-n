var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");    
pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400); 
let colors = ["blue","red","green"];
let indiceColor = 0
function dibujarCirculo(evento){
  var x = evento.pageX - lienzo.offsetLeft;
  var y = evento.pageY - lienzo.offsetTop;    
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

lienzo.onclick = dibujarCirculo;
lienzo.oncontextmenu = alterarColor;