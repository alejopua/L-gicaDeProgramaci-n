// var user1 = prompt("Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera");
// var user2 = prompt("Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera");

// function game(user1,user2) {
//     if ((user1 == "Piedra" && user2 == "Tijera") || (user1 == "Papel" && user2 == "Piedra") || (user1 == "Tijera" && user2 == "Papel") ) {
//         return "Gana usuario 1";
//     } 
//     else if (user1 == user2) {
//         return "Empate";
        
//     } else {
//         return "Gana usuario 2";
//     }   
// }

// console.log(game(user1,user2));



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera\n', (user1) => {
    rl.question('Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera\n', (user2) => {
    console.log(game(user1.trim(), user2.trim()));
    rl.close();
    });
});

function game(user1, user2) {

    if ((user1 === "1" && user2 === "3") || (user1 === "2" && user2 === "1") || (user1 === "3" && user2 === "2")) {
    return "Gana usuario 1"; } 

    else if (user1 === user2) {
    return "Empate";
    } 
    else {
    return "Gana usuario 2";
    }   
}