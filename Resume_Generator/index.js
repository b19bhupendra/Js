function addNewAQfield()
{
   // console.log("Adding new fields")

    let newNode=document.createElement('textarea'); // we have new node
    // ab is newNode pe class add kr denge 

    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');
    newNode.setAttribute('rows',3);
    

    //also taking out reference of id=aq
    let aqOb=document.getElementById('aq'); //iss element k andr add krna h

    //now we have to add these newNodes above this aqAddButton 
    //so we will take referance of button id=aqAddButton
    let aqAddButtonOb=document.getElementById('aqAddButton'); //or isse phele add krna h
    
    //aqOb k andr newNode ko insert krega or aqAddButton k phele
    aqOb.insertBefore(newNode,aqAddButtonOb);

};

function addNewSkillsfield()
{
    let newNode=document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');
    //newNode.setAttribute('rows',2)

    let skillsOb=document.getElementById('skills');


    let skillsAddButtonOb=document.getElementById('skillsAddButton');

    skillsOb.insertBefore(newNode,skillsAddButtonOb);
};

function addNewProjectField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('projectField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placceholder','Enter here');

    let projectOb=document.getElementById('project');

    let projectAddButtonOb=document.getElementById('ProjectAddButton');

    projectOb.insertBefore(newNode,projectAddButtonOb);
}

// this function is ging to generate cv that means it will  take the values 
// from our form fields and set the values to our templets
//generating CV
function  generateCV()
{
  //  console.log("Working")
  let nameField=document.getElementById('nameField').value;

  let nameT1=document.getElementById('nameT1');
  nameT1.innerHTML=nameField;

  //direct
  document.getElementById('nameT2').innerHTML=nameField;

  //email
  document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;
//emailField se data arha h or emailT me set ho  rha h

//email
document.getElementById('dobT').innerHTML=document.getElementById('dateField').value;

//contact
document.getElementById('contactT').innerHTML=document.getElementById('ContactField').value;

//address
document.getElementById('addressT').innerHTML=document.getElementById('AddressField').value;

//linkedin
document.getElementById('linkdinT').innerHTML=document.getElementById('LinkedinField').value;

//Github
document.getElementById('githubT').innerHTML=document.getElementById('GithubField').value;

//Other
document.getElementById('otherT').innerHTML=document.getElementById('OthersField').value;


//Objective
document.getElementById('objectiveT').innerHTML=document.getElementById('ObjectiveField').value;


//Academic Qualifications
//first we will find array object

let aqOb=document.getElementsByClassName('aqField');

// taking variable to create li
let str=''

for(let e of aqOb)
{
    str=str+`<li> ${e.value} </li>`;
}

document.getElementById('aqT').innerHTML=str;


//Skills
let skillsOb=document.getElementsByClassName('skillField');

let str1=''

for(let e of skillsOb )
{
    str1=str1+`<li> ${e.value} </li>`;
}
document.getElementById('skillT').innerHTML=str1;

//Project
let projectsOb=document.getElementsByClassName('projectField');

let str2=''

for(let e of projectsOb )
{
    str2=str2+`<li> ${e.value} </li>`;
}
document.getElementById('projectT').innerHTML=str2;

//certificate

document.getElementById('certiT').innerHTML=document.getElementById('certiField').value;



//code fore setting image
let file=document.getElementById('imgField').files[0];
console.log(file);

let reader= new FileReader();

reader.readAsDataURL(file);
console.log(reader.result);

//set the img to templet
    
// reader function call krega jise load end ho jyega 
// reader file ko read krega  or jise hi load end ho jyega ye function call hojyega 
//q ki bina is funtion k maybe file ko read krne me time lag rha ho agr thoda sa time 
// lag rha hoga to vo jo phlele ka code tha vo 
//phele chal ja rha tha thenfile puri ki puri completed  read ho ja rhi thi 
// now ye reader kya krega jise hi img jo load kr rha hoga vo end hoga ye funtn tb call hoga
// and tb hummar a result set hoga
reader.onloadend=function()
{
   // console.log()
    document.getElementById("imgTemplet").src = reader.result;
};



//set attribute funtn
//let reader=document.getElementById('imgField');
//reader.setAttribute('src','reader.result');

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';

}



function printCV()
{
    // console.log("Working toooooooo")
    window.print();

}












