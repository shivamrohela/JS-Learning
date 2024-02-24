const userEmail = []

if (userEmail) {
    console.log("i got email");
    } else{
        console.log("not got email");
    }

// falsey value 

// false, 0, -0, bigint 0n, "", null, undefined, Nan

//truthy values

// true, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("empty");
    
}

const obj = {}

if (Object.keys(obj).length===0) {
    console.log("objects are empty");
    
}