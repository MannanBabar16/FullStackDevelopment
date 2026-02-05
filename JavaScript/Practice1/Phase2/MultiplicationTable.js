//Given a number, print its multiplication table up to 10.

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ",function(input){

    printMultiplicationTable(input);

    rl.close();
});

function printMultiplicationTable(input){

    const n=Number(input);

    for(let i=1;i<=10;i++){
        console.log(n+" x "+ i+" = "+ i*n);
    }

}