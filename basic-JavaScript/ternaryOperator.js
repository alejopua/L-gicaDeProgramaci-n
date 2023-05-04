// var user1 = prompt("Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera");
// var user2 = prompt("Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera");

// function game(user1,user2) {
//     return (user1 == "Piedra" && user2 == "Tijera") || (user1 == "Papel" && user2 == "Piedra") || (user1 == "Tijera" && user2 == "Papel") ? "Gana usuario 1" : user1 === user2 ? "Empate" : "Gana usuario 2" ;
// }

// console.log(game(user1,user2));




/* Opción para la terminal*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera\n', (user1) => {
    rl.question('Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera\n', (user2) => {
    console.log(game(user1.trim().toLowerCase(), user2.trim().toLowerCase()));
    rl.close();
    });
});

function game(user1,user2) {
    return (user1 == "piedra" && user2 == "tijera") || (user1 == "papel" && user2 == "piedra") || (user1 == "tijera" && user2 == "papel") ? "Gana usuario 1" : user1 === user2 ? "Empate" : "Gana usuario 2" ;
}
