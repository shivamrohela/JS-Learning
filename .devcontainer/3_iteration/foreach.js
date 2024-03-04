const arr = ["shivam", 4, "rohela", 5, 7, "mbd"]

arr.forEach( function (val) {
    //console.log(val);
})

arr.forEach( (val) => {
    //console.log(val);
})

function printme(val){
    //console.log(val);
}

arr.forEach(printme)

arr.forEach( (val, index, arr) => {
    //console.log(val, index, arr);
})

const lan = [
    {
        name: "java",
        file: "java"
        
    },
    {
        name: "javascript",
        file: "js"
        
    },
    {
        name: "python",
        file: "py"
        
    }
]

lan.forEach(function (item) {
    console.log(item.file);
})