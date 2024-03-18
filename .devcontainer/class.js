// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}` 
//     }
// }

// const chai = new user("shivam", "shivam@gmail.com", 123);
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

function users(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

users.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}` 
}

const tea = new users("shivamtea", "shivam@gmail.com", 123);
console.log(tea.encryptPassword());
console.log(tea.changeusername());
