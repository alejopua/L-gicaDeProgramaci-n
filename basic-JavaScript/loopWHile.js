/*EJEMPLO 1*/
var numero = 1

while ( numero <= 10 ){
    console.log(numero)
    numero++
}


//-----------------------------------------------

/*EJEMPLO 2*/

var edad = Number(prompt("Ingrese un valor: "))

while (edad > 18 || edad <= 0){
    edad = Number(prompt("Ingrese un valor correcto: "))
}

alert("Gracias por ingresar al programa")

//------------------------------------------------
/*EJEMPLO 3*/
let estudiantes2 = ["Diana", "Pedro", "Camila", "Catalina"]; 

function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

while (estudiantes2.length > 0) {
    var estudiante = estudiantes2.shift();
    saludar(estudiante);
}

//------------------------------------------------
/*EJEMPLO 4*/
let estudiantes = ["Diana", "Pedro", "Camila", "Catalina"]; 
let deathCount = 2;
let nuevo = "pablo";

function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
        console.log(estudiantes.pop());
        console.log(deathCount);
        deathCount--
    }
  
    estudiantes.push(nuevo);
    console.log(nuevo);
    return estudiantes;
  }
console.log(solution(estudiantes, deathCount, nuevo));