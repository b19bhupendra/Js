document.body.style.backgroundColor="gray";
    const turnOn=()=>
    {//bulb on
        let imgOb=document.getElementById('bulb');
        imgOb.setAttribute("src","bulb_ON.jpg");

    };

    function turnOFF()
    {
        let imgOb=document.getElementById('bulb');
        imgOb.setAttribute("src","bulb_OFF.jpg");

    };

    //toggle
    const toggleBulb=()=>
    {
        let imgOb = document.getElementById('bulb');
        let srcValue=imgOb.getAttribute("src");
        //console.log(srcValue);

        let buttonob = document.getElementById('onOFFbutton'); //cahnge the button value on of
        let buttonText = buttonob.innerHTML;


        if(srcValue=='bulb_OFF.jpg')
        {
            turnOn();
            buttonob.innerHTML="OFF"
        }
        else
        {
            turnOFF();
            buttonob.innerHTML="ON";

        }
        
    };
   
   

