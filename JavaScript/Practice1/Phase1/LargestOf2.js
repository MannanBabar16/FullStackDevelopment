//Compare two numbers and print the larger one.

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(input1){
    rl.question("Enter second number: ", function(input2){

        largestOf2(input1,input2);

        
        rl.close();
    });
});


function largestOf2(input1, input2){
    number1=Number(input1);
    number2=Number(input2);

    if(isNaN(number1) || isNaN(number2)){
        console.log("Invalid Input");
        return;
    }

    if(number1===number2){
        console.log("Both numbers are equal");
    }

    else if(number1>number2){
        console.log("Larger number is: "+ number1);
    }

    else{
        console.log("Larger number is: "+ number2);
    }
}
