
let lienzo = document.getElementById("lienzo");
let pincel = lienzo.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function drawCircle(x, y, radio, color) {

  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2*3.14);
  pincel.fill();
}

drawCircle(300, 200, 30, "red");
drawCircle(300, 139, 30, "yellow");
drawCircle(360, 200, 30, "black");
drawCircle(300, 259, 30, "blue");
drawCircle(240, 200, 30, "orange");
//Math.floor(Math.random()*50 + 1));
