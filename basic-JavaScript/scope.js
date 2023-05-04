//global scope

var name = "Peter";

//local scope

function fullName () {
    var lastName = "Ramirez"
    console.log(name + " " + lastName)  
}

console.log(fullName())
console.log(name)
console.log(lastName)