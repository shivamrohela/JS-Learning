for (let i = 1; i <= 10; i++) {
    const element = i;
    //console.log(element);
    
}

const myArray = ["cricket", "football", "hockey"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

for (let index = 1; index < 5; index++) {
    //console.log(`outer loop is ${index}`);
    for (let j = 1; j < 5; j++) {
        //console.log(`inner loop is ${j}`);
    }
    
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("index is 5");
    }
    console.log(index);
    
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("index is 5");
        break;                        // here iteration is stop
    }
    console.log(index);
    
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        //console.log("index is 5");
        continue;                        // here iteration is skip
    }
    console.log(index);
    
}

