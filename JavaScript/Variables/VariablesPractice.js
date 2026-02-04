//Practice

//Beginner

//1
let a=5;
let b=a;
b=10;
console.log(a,b); //5 10


//2
let x;
console.log(typeof x); //undefined

//3
console.log(typeof null) //object

//4
let str="JS";
str[0]="j";
console.log(str);  //JS

//--------------------------------------------------------------------------------------------------

//Intermediate

//5
let obj1={
    value:10
};

let obj2 = obj1;

obj2.value=20;

console.log(obj1.value); //20

//6
let c=null;
let d=undefined;
console.log(c==d); //true
console.log(c===d); //false

//7
let y=0;
if(y){
    console.log("truthy");
}else{
    console.log("falsy");
} //falsy


//--------------------------------------------------------------------------------------------------

//Advanced

//8
let e={
    n:1
};

let f=e;

e={
    n:2
};

console.log(f.n) //1


//9
const user={
    name:"John"
};

user.name="Alex";
console.log(user);

//10
let p=Symbol("id");
let q=Symbol("id");
console.log(a===b);