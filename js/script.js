// formValdation for forgotten password
let email=document.querySelector('#exampleInputEmail1');
let password = document.querySelector('#exampleInputPassword1');
let message = document.querySelector('#message');
let form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();


    if(email.value === ""||password.value === ""){
        message.style.color = "red";
        message.innerHTML = "Input cannot be blank";
        
    }else{
        message.style.color = "green";
        message.innerHTML ="Form submitted successfully";
        
    }

})