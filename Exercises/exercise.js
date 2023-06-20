//Exercises
// console.log("Hello world");

// const PI=3.1415;
// console.log(PI)


// var a=parseInt(prompt("Enter the first number: "));
// var b=parseInt(prompt("Enter the second number: "));
// sum=a+b;
// console.log(sum);
// if(a==b){
//     console.log(sum*sum*sum);
// }


// var n=parseInt(prompt("Enter any +ve number: "));
// if(n%3==0){
//     console.log(n+" is multiple of 3")
// }
// if(n%7==0){
//     console.log(n+" is multiple of 7")
// }
// else{
//     console.log("Not a multiple of 3 or 7")
// }


const date=new Date()
console.log(date)


// function operation(a,b){
//     console.log(a*b);
//     console.log(a/b);
// }
// operation(3,2)


// function CelsiusToFah(c){
//     return (c*9)/5+32;
// }
// function FahToCelsius(f){
//     return (5/9)*(f-32);
// }
// var c=parseFloat(prompt("Enter the value in celsius"));
// var fah=CelsiusToFah(c)
// console.log(c+'deg celsius = '+fah+'deg fahrenheit');
// var f=parseFloat(prompt("Enter the value in fahrenheit"));
// var cel=FahToCelsius(f);
// console.log(f+'deg fahrenheit = '+cel+'deg celsius');


function vowelcount(st){
    var vowel='aeiouAEIOU';
    var count=0;
    for(i=0;i<st.length;i++){
        if (vowel.indexOf(st[i]) !== -1){
                count += 1;
        }
    }
    console.log("vowel count= "+count)
}
let st = prompt("Enter a string: ");
vowelcount(st)
