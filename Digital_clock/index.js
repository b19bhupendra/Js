const getTime=()=>  // arrow function
{
    let d= new Date();
    let hours= d.getHours();
    let AmPm= hours>=12 ? "PM" :"AM";
    hours=hours%12;
    hours=hours==0? 12:hours    

    let minutes=d.getMinutes();
    minutes=minutes>9?minutes:"0"+minutes;

    let second=d.getSeconds();
    second=second>9?second:"0"+second;

    let millisec=d.getMilliseconds();

    return `${hours} : ${minutes} : ${second}: ${millisec} :${AmPm}`;


    //we can doit by another inbuilt method without applying logic
    //by using variable_name.tolocalTimeString();
    //return d.tolocalTimeString();
}
setInterval(()=> // anonmous function h to iske andr jo code likhenge vo hr bar call hoga q ki ye humme har sec call krna h 
{
   // console.log(getTime());

    let clockOb=document.querySelector('.clock');
    clockOb.innerHTML=getTime();

},1000);

getTime();

let audioOb=document.getElementById('audio');
