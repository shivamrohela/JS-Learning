let yname = Symbol("i know");

let obj = {
    name: "shivam",
    age: 25,
    email: "shivamyahoo@gmail.com",
    arr: [1,2,3,4,5],
    objIn: {
        address: "MBD",
        pin: 244102
    },
    fun: function(){
        console.log("hello buddy");
    },
    [yname]: "yname"
};

let obj2 = {
    name: "motu",
    age:24
};

let obj3 = {
    name: "meramotu",
    age:25
};

const obj4 = new Object(); //singleton object
// console.log(obj["name"]);
// console.log(obj.fun());

//console.log(obj);



let show2={...obj, ...obj3}; 
//console.log(show2);

// Object.assign
// Object.keys
// Object.values
// Object.entries
// hasownproperty

//these are the properties and many more properties of objects are available.


const dest = {
    name: "shiavm",
    age: 25,
    hobby: "cricket"
}

const {hobby} = dest; // object destructure
console.log(hobby);

//json example
// {
//     "name": "avi",
//     "class": 4,
//     "age":9
//     "school": "modern public school"
// }

// it is also a example of json
[
    {},
    {},
    {}
]


