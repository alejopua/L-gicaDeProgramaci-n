// Create a regex that matches a email address
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let str = "";

//example of a valid email address
str = "";
console.log(regex.test(str));

// create example loop for testing regex
for (let i = 0; i < 10; i++) {
  str = "user" + i + "@gmail.com";
  console.log(regex.test(str));
}