const obj = {
    hey: "shivam",
    hello: "motu",
    namaste: "uncle"
}

for (const key in obj) { // print only keys
   // console.log(key);
}

for (const key in obj) { // print only values
   // console.log(obj[key]);
}

for (const key in obj) { // print both key and values 
   // console.log(`${key} "greeting" ${obj[key]}`);
}

const arr = [1,0,4,5,6];

for (const key in arr) {// they print keys only and array has also keys
    //console.log(key);
}

for (const key in arr) {// they print values
   // console.log(arr[key]);
}

const map = new Map()
map.set("in", "india")
map.set("fr", "france")
map.set("fr", "france")

for (const key in map) {// for in loop not iterable on map
    console.log(key);
}

