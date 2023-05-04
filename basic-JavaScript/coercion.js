// coerción implícita

var a = 2 + "5";
console.log(a);
console.log(typeof(a));

var b = 2 * "5";
console.log(b);
console.log(typeof(b));

var c = 2 - true;
console.log(c);
console.log(typeof(c));

// coerción explícita

var d = Number(2 + "5");
console.log(d);
console.log(typeof(d));

var e = String(2 * "5");
console.log(e);
console.log(typeof(e));

var f = Boolean(2 - true);
console.log(f);
console.log(typeof(f));




// # cSpell:disable
// # cSpell:enable
