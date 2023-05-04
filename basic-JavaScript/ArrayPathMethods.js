var artículos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700 },
    ]

//Method filter
var costo = artículos.filter(function (valor){
    return valor.costo <= 500;
    });

//Method map
var name = artículos.map(function (names){
    return names.nombre;
    });

//Method find
var findItem = artículos.find(function (item){
    return item.nombre === "Laptop"
});

//Method forEach
artículos.forEach(function(item){
    console.log(item.nombre);
});

//Method some
var cheapItems = artículos.some(function(itemsLows){
    return itemsLows.costo <= 700; 
});