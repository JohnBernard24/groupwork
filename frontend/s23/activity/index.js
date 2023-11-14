// console.log("Hello World");


//Objective 1
//Add code here
//Note: function name is numberLooper

function numberLooper(num){

    let message = "";

    for(let ctr = num; ctr > 0; ctr--){
        
        if(ctr <=50){
            message = "The current value is at " + ctr + ". Terminating the loop.";
            break;
        };

        if(ctr % 10 == 0){
            console.log("The number is divisible by 10. Skipping the number.");
            continue;
        }

        if(ctr % 5 === 0){
            console.log(ctr);
        }

    }
    
    return message;

}

<<<<<<< HEAD

=======
>>>>>>> 4505147926558b2dcd89743f0ba9746efcbe502f
console.log(numberLooper(60));
console.log(numberLooper(65));


//Objective 2
let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = '';

//Add code here
for (let count = 0; count < string.length; count++){

    if(
        string[count] === "a" ||
        string[count] === "e" ||  
        string[count] === "i" ||  
        string[count] === "o" ||  
        string[count] === "u"
        ){
        
        continue;
    }else{
        filteredString += string[count];
    }   
    
};

console.log(filteredString);


//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        filteredString: typeof filteredString !== 'undefined' ? filteredString : null,
        numberLooper: typeof numberLooper !== 'undefined' ? numberLooper : null
    }
} catch(err){

}