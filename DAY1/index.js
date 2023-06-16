//Using var
var a='1024';
console.log(a);

//Using let
let b='123';
console.log(b);

//Using const
const c=555;
console.log(c);

// alert('Hello World')

// const age=prompt('Your age? ');
// console.log(age)

// const isStd=confirm('Are you a student?')
// console.log(isStd)

let x=1;
const y=2;
if(x==1){
    console.log("x is 1");
}
if(x==1 && y==2){
    console.log("testing && operator");
}
if((x==1) || (y==3)){
    console.log("|| operator tested");
}
if((!x)){
    console.log("x is not true");
}

//Ternary operator
if(x==1){
    console.log("x is 1");
}
else{
    console.log("x is not 1");
}

//if-else ternary op
let result = x ===1 ? "x is 1" : "x is not 1";

//if-elseif-else ternary op
result = x === 1 ? "x is 1" : x ===2 ? "x is 2" : "x is not 1 or 2";

//loop
for(let i=0;i<5;i++){
    console.log(i);
}

//ES5 style
//Functions
// function add(a, b){
//     console.log(a+b);
// }
function area(a,b){
    console.log(a*b)
}
area(1,2)
//arrow function (ES6 style)
const add = (a,b)=>{
    console.log(a+b);
}
add(2,3)
add(1,2)

