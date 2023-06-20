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

//Exercises
console.log("Hello world");

const PI=3.1415;
console.log(PI)

const person = {
    fName:"John",
    lName:"Doe",
    fullname:()=>{
        return `${person.fName} ${person.lName}`;
    }
};
console.log(person.fName);
console.log(person.lName)
const p1=person.fullname();
console.log(p1);

const student ={
    name:'Ram',
    crn:45,
    detail:()=>{
        return `${student.name} ${student.crn}`;
    }
};
const s1=student.detail();
console.log(s1);

const cars=['saab','volvo','BMW',45,{name:"Alto",company:"suzuki"}];
//Accessing the first item from the array
let firstcar=cars[0];
console.log(firstcar);
//Accessing the last item from the array
// const lastcar=cars[cars.length-1];
// console.log(lastcar)
// console.log(cars.sort())
// console.log(cars.push("Audi"));
// console.log(cars);

const myFunction = (data) => {
    console.log(data);
}
cars.forEach(myFunction);
cars.map(d=>console.log(d));

//User model
const user={
    firstName:'Ram',
    lastName:'Yadav',
    email:'ram@gmail.com',
    phone:'9844356789',
    password:'19805672',
};
const{password,phone,...rest}=user;
console.log({rest});