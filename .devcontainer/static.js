class user{
    constructor(username){
        this.username = username;
    }

     logme(){
        console.log(`usernamr: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const shivam = new user("rohela")

shivam.logme()
//console.log(shivam.createId());

class teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email
    }
} 

const realme = new teacher("10pro+", "realme@.com")
//console.log(realme.createId());
