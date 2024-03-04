
const arr = [1,0,4,5,6,];

for (const num of arr) {
    //console.log(num);
    
}

const str = "heodncs7812991xj"

for (const i of str) {
    //console.log(i);
    
}

//maps 

const map = new Map()
map.set("in", "india")
map.set("fr", "france")
map.set("fr", "france")

//console.log(map);

for (const keys of map) {
    console.log(keys);
}

for (const [keys, value] of map) {
    console.log(keys, value);
}

const obj = {
    hey: "shivam",
    hello: "motu",
    namaste: "uncle"
}

for (const [keys, value] of obj) { // objects not iterable in forof loop.
    console.log(keys, value);
}

