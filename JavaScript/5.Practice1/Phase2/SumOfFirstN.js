//Sum of First N Natural Numbers

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Destination Number (N): ",function(input){

    let sum=calculateSum(input);
    console.log("Sum of "+1+" to "+input+" is: "+sum);
    rl.close();
});

function calculateSum(input){

    const n=Number(input);

    let sum=0;

    for(let i=1;i<=n;i++){
        sum=sum+i;
    }

    return sum;
}