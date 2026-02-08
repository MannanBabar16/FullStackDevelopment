//Take a number and print whether it is even or odd.

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ",function(input){

    evenOddChecker(input);

    rl.close();
});


function evenOddChecker(input){
    if(input%2===0){
        console.log(input+" is even");
    }
    else{
        console.log(input+" is odd");
    }
}
