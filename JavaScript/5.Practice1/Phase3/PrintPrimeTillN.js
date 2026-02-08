//Print All Primes from 1 to N

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ",function(input){

    printPrimeNumbers(input);
    rl.close();
});

function printPrimeNumbers(input){

    n=Number(input);

    if (isNaN(n)) {
    console.log("Invalid input. Please enter a valid number.");
    return null;
    }

    if(n>=1){

        for(let i=1; i<n;i++){
            
            for(let i)
        }
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
