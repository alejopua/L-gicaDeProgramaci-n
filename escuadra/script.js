document.addEventListener("DOMContentLoaded", function() {
    // tu código JavaScript aquí
    let lienzo = document.getElementById("lienzo");
    let pincel = lienzo.getContext("2d");
    
    pincel.lineWidth = 100;

    // Techo
    pincel.beginPath();
    pincel.moveTo(50, 50);
    pincel.lineTo(50, 400);
    pincel.lineTo(400, 400);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(100, 175);
    pincel.lineTo(100, 350);
    pincel.lineTo(275, 350);
    pincel.fill();

  });

