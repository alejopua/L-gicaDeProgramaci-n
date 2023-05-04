function moto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;   
}

let motos = []

for (let i = 0; i < 5; i++) {
    var marca = prompt("Ingresa la marca de la moto");
    var modelo = prompt("Ingresa el modelo de la moto");

    motos.push(new moto(marca, modelo));
}

for (var moto of motos) {
    console.log(moto)
}

//----------------------------------------
/*EJEMPLO*/
function solution(car) {

    if (car.licensePlate === undefined) {

        car.drivingLicense = false; 
    }
    else {
        car.drivingLicense = true;
    }
    return car;
    }