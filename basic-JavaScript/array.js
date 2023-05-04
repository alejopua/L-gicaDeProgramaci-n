let article = ["house", "horse", "hello", "height", "hair"];

console.log(article);
// (5) ['house', 'horse', 'hello', 'height', 'hair']
// 0: "house"
// 1: "horse"
// 2: "hello"
// 3: "height"
// 4: "hair"
// length: 5


console.log(article.length);
// 5

console.log(article[2]);
// hello

let moreArticle = article.push("hotfoot");
console.log(article);
// Añade un elemto al final del array -> (6) ['house', 'horse', 'hello', 'height', 'hair', 'hotfoot']

let last = article.pop("hotfoot");
// Elimina el ultimo elemento de un array -> (5) ['house', 'horse', 'hello', 'height', 'hair']

let newLength = article.unshift("haze");
// Añade un elemento al inicio de un array -> (6) ['haze', 'house', 'horse', 'hello', 'height', 'hair']

let deleteArticle = article.shift("haze");
// Elimina un elemento al inicio de un array -> (5) ['house', 'horse', 'hello', 'height', 'hair']

let position = article.indexOf("hello");
// Arroja la posicion de un elemento dado en un array
// para este caso hello esta en la 2