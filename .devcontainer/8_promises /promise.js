const promiseone = new Promise(function(resolve, reject){
    //do async task
    //db calls, cryptography, network
    setTimeout(function(){
    console.log("async task is complete");
    resolve()
    }, 1000) 
})

promiseone.then(function(){
    console.log("promise consumed");
});


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("promised 2 consumed");
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "shivam", email: "shivamrohela@gmail.com"})
    }, 2000);
});

promisethree.then(function(user){
    console.log(user);
});

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let ERROR = true;
        if(!ERROR){
            resolve({name: "shivam", password: 123})
        } else{
            console.log("something went wrong");
        }
    }, 2000);
});

promisefour
.then(function(user){
    console.log(user);
    return user.name;
}).then((name) => {
    console.log(name);
}).catch(function(ERROR){
console.log(ERROR);
}).finally(function() {
    console.log("something done");;
})

const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let ERROR = true;
        if(!ERROR){
            resolve({name: "shambhavi", password: 123})
        } else{
            console.log("something went wrong");
        }
    }, 2000);
});

async function consumepromisefive(){
    try {
        const response = await promisefive
        console.log(response);
    } catch (ERROR) {
        console.log(ERROR);
    }
}

consumepromisefive()


async function consumeuser(){
    try {
        const response = await fetch("https://api.github.com/users/shivamrohela")
        const data = await response.json()
        console.log(data);
    } catch (ERROR) {
        console.log(ERROR);
    }
}
consumeuser()

fetch("https://api.github.com/users/shivamrohela")
.then((response) => {
    return response.json()
})
.then((data) => {
console.log(data);
})
.catch((error) => console.log(error))