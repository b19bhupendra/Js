let number;

const generate_number=()=>
{
   let n1= Math.random()   // it will produce random number in between 0 and 1
   console.log(n1);
   // now we want one digit number that means  between 0 and 9
   // so we multiply by *10
   
   let n2=n1*10; // ye ek digit ka number h but ikse sth point bhi hai
   // so we will remove point k bad ki value using Math.trunc() funtn
    console.log(n2);
   n2= Math.trunc(n2); // removing decimal value

   //now we have to generate_number between 1 to 6
   // we n2%6 but it will include 0 so we add 1
    n2=(n2%10)+1;
    number=n2;

    console.log(number);

}
const generate_number_btn_click=()=>
{
    document.querySelector(`#section1`).style.display='none';
    document.querySelector(`#section2`).style.display='none';
    document.querySelector(`#section3`).style.display='block';

    setTimeout(()=>
    {
        generate_number();

        document.querySelector("#field").value="";

         document.querySelector(`#section1`).style.display='none';
         document.querySelector(`#section2`).style.display='block';
         document.querySelector(`#section3`).style.display='none';
    },3000)
};

//check number

const check_number=()=>
{
    let value= document.querySelector(`#field`).value
    if(value==number)
    {
        alert("Congrates, you won the game");
    }
    else
    {
        alert(`OPPS !!! Your Guess is wrong...`);
    }
    generate_number_btn_click();
}