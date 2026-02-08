//Factorial of a Number

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ",function(input){

    let factorial=calculateFactorial(input);
    console.log(input+"! = "+factorial);
    rl.close();
});

function calculateFactorial(input){

    let n=Number(input);

    let fact=n;
    for(let i=1;i<n;i++){
        fact=fact*(n-i);

        console.log("iteration "+i+" = "+ fact);
    }

    return fact;
}