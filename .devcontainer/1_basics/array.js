const arr = new Array(1,2,3,4,5,6);
// console.log(arr);
// console.log(arr.slice(0,4));
// console.log(arr);

const arr1 = new Array(7,8,9);
// console.log(arr1);
// console.log(arr1.splice(0,4));
// console.log(arr1);

const arr3 = arr.concat(arr1);
//console.log(arr3);

const arr4 = [...arr, ...arr1];
//console.log(arr4);

const arr5 = [1,2,3,4,5,6,[7,8,],9,[10,11,[12,13,]],14];
//console.log(arr5.flat(Infinity));

const arr6 = Array.from("shivam");
//console.log(arr6);

const arr7 = Array.of("ruhela",4,7,"shivam");
//console.log(arr7);
