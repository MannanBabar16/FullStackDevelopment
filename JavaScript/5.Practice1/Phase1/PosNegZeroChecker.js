//Given a number, determine if it’s positive, negative, or zero.

const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a number ", function(input){

    posNegZeroChecker(input);
    
    rl.close();
});


function posNegZeroChecker(input){

    number =Number(input);

    if(number===0){
        console.log("Number is 0");
    }
    else if(number<0){
        console.log("Number is -ve");
    }
    else{
        console.log("Number is +ve");
    }
}