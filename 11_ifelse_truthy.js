let a=23;
let b =20;

if(a>b)
{
    console.log("A is grater then b");
}
//truthy values

if(12) //true
{
    console.log ("12 is postive so true and we will come in if block");
}
if(-23) //true
{
    console.log("in if block because value is +ve or -ve");
}

if(0) // false
{
    console.log("not come in if bec 0 is false");
}
if(null)// false
{
    console.log("wow");
}
if("") //false
{
    console.log("Hello");
}
if(NaN) // false
{
    console.log("Not a number");
}
