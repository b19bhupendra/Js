let d= new Date();
console.log(d);
console.log(d.toLocaleTimeString());
console.log(d.toLocaleDateString());
console.log(d.toUTCString());
console.log(`Date ${d.getDate()}`);
console.log(`Month ${d.getMonth()+1}`); //we will inc this value by one bec month ki strting  se hoti h or ye 0 se count krta h 
console.log(`Time ${d.getTime()}`);
console.log(`day ${d.getDay()+1}`);
console.log(`Year ${d.getFullYear()}`);

//let d1= new Date("1 January 2023");
//console.log(d1);

let d2 = new Date(2023,01,02);
console.log(d2);