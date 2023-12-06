let gmailLogin= document.querySelector(".gmailLogin");
let passwordLogin= document.querySelector(".passwordLogin");


document.querySelector(".submit").addEventListener("click",()=>{
    data.forEach(function(element){
        if (element.gmail === gmailLogin.value && element.password === passwordLogin.value) {
            alert("Login Succesful");        
        }
    });
});
