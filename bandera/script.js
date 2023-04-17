document.addEventListener("DOMContentLoaded", function() {
    // tu código JavaScript aquí
    let lienzo = document.getElementById("lienzo");
    let pincel = lienzo.getContext("2d");
    
    pincel.fillStyle = "#ECF0F1 ";
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle = "green";
    pincel.fillRect(0, 0, 200, 400);
    pincel.fillStyle = "red";
    pincel.fillRect(400, 0, 200, 400);

    pincel.fillStyle = "yellow";
    pincel.beginPath();
    pincel.moveTo(300, 200);
    pincel.lineTo(200, 400);
    pincel.lineTo(400, 400);
    pincel.fill();

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(300, 200, 50, 0, 2*Math.PI*2);
    pincel.fill();
  });

