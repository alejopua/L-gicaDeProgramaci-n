document.addEventListener("DOMContentLoaded", function() {
    // tu código JavaScript aquí
    let lienzo = document.getElementById("lienzo");
    let pincel = lienzo.getContext("2d");
    
    pincel.fillStyle = "#145A32";
    pincel.fillRect(0, 0, 350, 300);

    pincel.fillStyle = "black";
    pincel.fillRect(50, 50, 90, 90);

    pincel.fillStyle = "black";
    pincel.fillRect(50, 50, 90, 90);

    pincel.fillStyle = "black";
    pincel.fillRect(210, 50, 90, 90);

    pincel.fillStyle = "black";
    pincel.fillRect(140, 140, 70, 100);

    pincel.fillStyle = "black";
    pincel.fillRect(100, 190, 40, 110);

    pincel.fillStyle = "black";
    pincel.fillRect(210, 190, 40, 110);
  });

