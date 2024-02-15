const obj = {
    username: "shivam",
    price: 899,
    
    display: function(){
        console.log(`hello ${this.username}`);
        console.log(this);
    }
}

// obj.display()
// obj.username = "ruhela"
// obj.display()

//console.log(this);

function chai(){
    const username = "chai pe lo"
    console.log(this.username) //here this keyword is not working it is work in object
}

chai()

const chai1 = function(){
    const username = "chai pe lo"
    console.log(this.username) //here this keyword is not working it is work in object
}

chai1()

const chai2 = () => { //arrow functon
    const username = "chai pe lo"
    console.log(this.username) //here this keyword is not working it is work in object
}

chai2()

const add = (num1, num2) => { //arrow functon
    return num1 + num2;
}

console.log(add(3,5));

const add1 = (num1, num2) => num1 + num2; //arrow functon

console.log(add1(4,5));

const add2 = (num1, num2) => (num1 + num2); //arrow functon

console.log(add2(5,5));

const funobj = () => ({name: "shivam", price: 999}); //arrow functon

console.log(funobj())


