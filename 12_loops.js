//for loop

for(let i=1;i<4;i++)
{
console.log(`hey ${i} we are in for loop`);
};

//while an do-while loop
let i=0;
while(i<=4)
{
    console.log(`hello ${i} while loop`);
    i++;
}

//do while loop

let w=1;
do 
{
    console.log(`value of w is ${w}`);
    w++;
}
while(w<=5);

//for-in loop 
// for-in loop is an special type of loop that iterates over the properties of an object ,  or the elements of an array.
// Creating object
let st= { 
    name:'bhupendra', // Key:value
    phn:6387648857,
    add:'LKO',
};
console.log(st);
console.log(typeof st);
for(let i in st)
{
     console.log(i);// this will give key

     console.log(`${i}=> ${st[i]}`);// this will give key and value st[i]

}

let arr = ["ACB","XYZ","LMN"]
for( let i in arr)
{
    console.log(i) //array ka index uski key hoti hai 
    console.log(arr[i]); // it will give value of array
}

// for-of loop 
// ES6 introduces a new for-of loop which allows 
// us to iterable over arrays  or iterable objects
// eg strings very easily

let arr2= ["hello", "how", "Are", "You"];
for(let i of arr2)
{
    console.log(i); // this will give value
}