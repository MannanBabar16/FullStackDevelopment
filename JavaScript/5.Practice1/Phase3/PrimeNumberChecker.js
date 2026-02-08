//Prime Number Checker

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ",function(input){

    let isPrime=primeNumberChecker(input);

    if(isPrime){
        console.log(input+ " is a Prime Number.");
    }
    else{
        console.log(input+" is not a Prime Number.");
    }
    rl.close();
});

function primeNumberChecker(input){

    n=Number(input);

    if (isNaN(n)) {
    console.log("Invalid input. Please enter a valid number.");
    return null;
    }

    else if(n<=1){
        return false;
    }

    else if(n===2){
        return true;
    }

    else if(n%2===0){
        return false;
    }

    else{
        
        const limit=Math.floor(Math.sqrt(n));
        for(let i=3;i<=limit;i+=2){
            if(n%i===0){
                return false;
            }
        }
        return true;
    }


}
