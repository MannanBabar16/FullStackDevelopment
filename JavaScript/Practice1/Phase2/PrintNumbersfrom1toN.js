//Print Numbers from 1 to N

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Destination Number (N): ",function(input){

    numberPrinterTillN(input);

    rl.close();
});

function numberPrinterTillN(input){

    const n=Number(input);

    for(let i=1; i<=n;i++){
        console.log(i);
    }
}