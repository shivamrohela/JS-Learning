const vals = [1,2,3,4,5,6,7,8,9,10]

// const newval = vals.map( (num) => num+10 )
// console.log(newval);

const item = vals
                 .map((num) => num*10)
                 .map((num) => num+2)
                 .filter((num) => num%2==0 && num>=50);
        
console.log(item);                 