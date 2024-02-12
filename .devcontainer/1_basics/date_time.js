const mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());

let mycreated = new Date(2024, 0, 5);
console.log(mycreated);

//++++++++++++++++++++

const mytime = Date.now();
console.log(mytime);

const my = new Date();
console.log(my.getDate());
console.log(my.getMonth() + 1);
console.log(Math.floor(my.getTime() / 1000));
