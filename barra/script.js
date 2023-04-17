
var serie2009 = [6, 47, 41, 3, 3];
var serie2019 = [81, 9, 3, 3, 4];
var colores = ["blue","green","yellow", "red","gray"];


function dibujarBarra(x, y, serie, colores, texto) {

  let lienzo = document.getElementById("lienzo");
  let pincel = lienzo.getContext("2d");

  pincel.font = "15px Arial";
  pincel.fillStyle = "black";
  pincel.fillText(texto, x, y);

  for (let i = 0; i < serie.length; i++) {
    let lienzo = document.getElementById("lienzo");
    let pincel = lienzo.getContext("2d");
    
    pincel.fillStyle = colores[i];
    pincel.fillRect(x, y, 150, serie[i]);
    pincel.strokeSTyle = "black";
    pincel.strokeRect(x, y, 150, serie[i]);
    
    y += serie[i];
  }
    
}


dibujarBarra(50,50,serie2009,colores,"2009");
  //Aquí necesitamos escribir el texto y dibujar los rectángulos




//Math.floor(Math.random()*50 + 1));
