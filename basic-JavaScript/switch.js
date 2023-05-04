// var user1 = prompt("Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera").toLowerCase();
// var user2 = prompt("Elige tu jugada: 1. Piedra, 2. Papel, 3. Tijera").toLowerCase();

// function game(user1,user2) {
//     switch (true) {
//         case ((user1 == "piedra" && user2 == "tijera") || (user1 == "papel" && user2 == "piedra") || (user1 == "tijera" && user2 == "papel")):
//             return "Gana usuario 1";
//             break;

//         case (user1 == user2):
//             return "Empate";
//             break;   

//         default:
//             return "Gana usuario 2";
//             break;
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
    console.log(game(user1.trim().toLowerCase(), user2.trim().toLowerCase()));
    rl.close();
    });
});

function game(user1,user2) {
    switch (true) {
        case ((user1 == "piedra" && user2 == "tijera") || (user1 == "papel" && user2 == "piedra") || (user1 == "tijera" && user2 == "papel")):
            console.log("Gana usuario 1");
            return "Gana usuario 1";
            break;

        case (user1 == user2):
            console.log("Empate");
            return "Empate";
            break;   

        default:
            console.log("Gana usuario 2");
            return "Gana usuario 2";
            break;
    }
}

