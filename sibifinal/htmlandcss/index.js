"use strict"

let gmailDom= document.querySelector(".username");
let passwordDom= document.querySelector(".password");
let confirmDom= document.querySelector(".confirm");

let data=JSON.parse(localStorage.getItem("data")) || [{
    gmail:"",
    password:"",
    confirmPassword:""
}];


document.querySelector(".submit").addEventListener("click",function (){
    
    if(passwordDom.value === confirmDom.value){
    data.push({
    gmail:gmailDom.value,
    password:passwordDom.value,
    confirmPassword:confirmDom.value
    });
    localStorage.setItem("data",JSON.stringify(data));
    alert("Sign Up Successful");
    }
    else{
        alert("Both Passwords should be same");
        document.querySelector(".forgot").innerHTML="Both Passwords should be same";
    }
    function delay(){}
    setTimeout(delay,15000);
    
});



//  localStorage.setItem("data",JSON.stringify(data));

/*let data=[{
    gmail:"",
    password:"",
    confirmPassword:""
}]; */

// let data=JSON.parse(localStorage.getItem("data"));