const num = [1,2,3]

// const item = num.reduce( function(acc, curval){
//     return acc+curval;
// },0)

// console.log(item);

// const items = num.reduce( (acc, curval) => acc+curval,0 )
// console.log(items);

const shoppingcard = [
    {
        item: "book",
        price: 899
    },
    {
        item: "bat",
        price: 1999
    },
    {
        item: "shirt",
        price: 1499
    },
    {
        item: "mobile",
        price: 10999
    },
]

const total = shoppingcard.reduce( (acc, curval) => acc + curval.price, 0)

console.log(total);