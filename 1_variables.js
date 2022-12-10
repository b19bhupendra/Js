/*
variables :
        */

let message; //declaration
message="hey , How are you ?"; //assignment
console.log(message);

let message1="helllo"; // declaration + assignment
console.log(message1);
let a=12,
b=9,
c=8;
console.log(a);
console.log(b);
console.log(c);

// MAIN PROPERTY we can change the value in let
 a=20;
console.log(a);

//CREATING CONSTANT VARIABLE
// we cannot chmage the value of constant
const user = "bhupendra@19"
console.log(user);

// scope of let 
if(9>3)
{
    console.log("inside the block");
    let address = "Delhi";
    console.log(address);

}

// CREATING VAR  and its scope is - global or function scope
var myvar=56; // this is global 
// var has no block scope
if(9>3)
{
    console.log("inside the block");
    var address = "Delhi"; 
   // console.log(address);
}
    console.log(address);
// var tollarates redeclared
    var x=89;
    var x= 36;
    console.log(x);
    console.log(x);
// var variable can be declared bellow their use 
z=98;
console.log(z);
var z;