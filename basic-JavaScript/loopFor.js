/*FORMA 1*/
let estudiantes = ["Diana", "Pedro", "Camila", "Catalina"]; 

function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++) {
    saludar(estudiantes[i]);
}

// Hola Diana
// Hola Pedro
// Hola Camila
// Hola Catalina
// undefined

//------------------------------------------------------------------

/*FORMA 2*/
let estudiantes2 = ["Diana", "Pedro", "Camila", "Catalina"]; 

function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

for (let estudiante of estudiantes2) {
    saludar(estudiante);
}

// Hola Diana
// Hola Pedro
// Hola Camila
// Hola Catalina
// undefined