const calculateAge=()=>
{
    let date=document.getElementById("date_field").value;
    let month=document.getElementById("month_field").value;
    let year=document.getElementById("year_field").value;

    console.log(date);
    console.log(month);
    console.log(year);


    if(date>31)
    {
        alert('input valid date');
        return;
    }
    //parse
    let dob= new Date(`${date} ${month} ${year}`);
    let currentDate=new Date(); //brkrt me kuch ni pass krege to current date dega

    let difference=currentDate-dob; // ye jo output dega vo millisecond me hoga to isko days me convert krege

    let days=Math.floor(difference/(1000 * 60 * 60 * 24));

    
    alert("Your age is "+days+" days ");

    

}