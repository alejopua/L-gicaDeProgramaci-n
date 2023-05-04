// statement

function sum (a,b) {
    sums = a + b;

    return  sums 
}

console.log(sum(5,5));

// expressive

var rest = function (a,b) {
    return a - b
}

console.log(rest(10,5));

// complex funtions whith template string

function greet (person) {
    console.log(`Hola ${person}`);
}

console.log(greet("Lleritos"))

