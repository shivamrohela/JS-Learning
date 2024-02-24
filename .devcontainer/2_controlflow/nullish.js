// Nullish coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 10;
val1 = null ?? 10 ?? 15;

console.log(val1);

//terniary operator

// condition ? true : false

const icetea = 10;

icetea > 15 ? console.log("drink it ") : console.log("donnot drink it");
