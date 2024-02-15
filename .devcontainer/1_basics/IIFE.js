// Immediately Invoked Function Expressions (IIFE)

// ()()

(function chai() { // named IIFE
    console.log("chai pe lo");
})(); // IIFE

// whenever we used two IIFE continously then always remmeber to used semicolon after the first IIFE

(() => { 
    console.log("lemon tea pe lo");
})();

( (name) => { //here with parameter
    console.log(`${name}`);
} ) ("blacktea")