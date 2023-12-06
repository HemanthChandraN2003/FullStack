let gmailLogin= document.querySelector(".gmailLogin");
let passwordLogin= document.querySelector(".passwordLogin");
let count=0;

document.querySelector(".submit").addEventListener("click",()=>{
    data.forEach(function(element){
        if (element.gmail === gmailLogin.value && element.password === passwordLogin.value) {
            
            alert("Login Succesful");        
            count=1;
        }
        
        
        
    });
    if(count===0){
        alert("Your Email or Password is Incorrect");
        // document.querySelector(".signupbutton").innerHTML="Your Email or Password is Incorrect";
    }
});

