// let fun = function(){
//     console.log("hello");
// };

// fun();

// let fun1 = function(num1, num2){
//     let result = num1+num2;
//     console.log(result);
// };

// fun1(4,5)

// let fun2 = function(num1, num2){
//     let result = num1+num2;
//     return result;
// };

 //console.log(fun2(5,5));



// let fun4 = function(num1, num2){
    
//     return num1+num2;
//     //console.log("everyone");// after the return statement in block of code the will not execute. 
// };

// fun4(6,6);

let sum = function(x, y){
    
    console.log("shivam");
    return x+y
}

console.log(sum(4, 4));

let enjoy = function(...nums){ // used rest operator for execute all value
    return nums
}

console.log(enjoy(100, 200, 300)); // it make array and store all values.

//objects are used in functions
let obj = {
    name: "shivam",
    price: 3000

}

let funobj = function(item){
    console.log(`my name is ${item.name} and price is ${item.price}`);
}

funobj(obj)

//shortcut way
// funobj({
//     name: "shivam",
//     price: 3000

// })


//let arr = [100,300,200,500]

let funarr = function(itemnum){
   return itemnum[1]
}

//console.log(funarr(arr));
console.log(funarr([100,200,300]));
