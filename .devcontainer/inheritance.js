class user{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`USERNAME IS: ${this.username} `);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was add: ${this.username}`);
    }
}

const data = new teacher("chai", "chai@gmail.com", "5997");

data.logme()

const masalachai = new user ("masalachai");

masalachai.logme()

console.log(masalachai instanceof user);
