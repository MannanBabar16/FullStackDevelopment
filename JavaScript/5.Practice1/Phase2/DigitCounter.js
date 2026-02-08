//Count Digits in a Number

const readline=require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ",function(input){

    let digits=countDigits(input);
    console.log("Total digits in "+input+" are: "+digits);
    rl.close();
});

function countDigits(input){

    let n=Number(input);

    if (isNaN(n)) {
    console.log("Invalid input. Please enter a valid number.");
    return null;
  }

  n=Math.abs(n);

  if(n===0) return 1;

  let count=0;

  while(n>0){
    n=Math.floor(n)/10;
    count++;

  }

    return count-1;
}