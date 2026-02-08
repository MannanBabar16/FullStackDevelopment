//Compare three numbers and print the larger one.

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(input1){
    rl.question("Enter second number: ", function(input2){
        rl.question("Enter third number: ", function(input3){

        largestOf3(input1,input2,input3);

        
        rl.close();
        });
    });
});


function largestOf3(input1, input2,input3){
    const number1=Number(input1);
    const number2=Number(input2);
    const number3=Number(input3);

    if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
        console.log("Invalid Input");
        return;
    }

    if(number1===number2 && number2===number3){
        console.log("All numbers are equal");
    }

    else if(number1>=number2 && number1>=number3){
        console.log("Larger number is: "+ number1);
    }

    else if(number2>=number1 && number2>=number3){
        console.log("Larger number is: "+ number2);
    }

    else{
        console.log("Larger number is: "+ number3);
    }
}
