let num = NaN

console.log(typeof(num));

let tostring = String(num);

console.log(typeof(tostring));

//null typeof => object
//undefined typeof => undefined
//NaN typeof => number 

/*
If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.
*/
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
//Expected output: "x:4, y:3"

//If used prefix, with operator before operand (for example, ++x), 
//the increment operator increments and returns the value after incrementing.

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
//Expected output: "a:4, b:4"


