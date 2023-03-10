const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input,message){
    input.className = 'form error';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'error_box';
}
function valid(input){
    input.className = 'form valid';
    const div = input.nextElementSibling;
    div.innerText = '';
    div.className = '';
}
function checkMail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if(re.test(input.value)){
        valid(input);
    }else{
        error(input, "Email is not right, check your email.");
    }
}
function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ""){
            error(input, `${input.id} is required.`);
        }else{
            valid(input);
        }
    })
}
function checkLength(input, min ,max){
    if(input.value.length < min){
        error(input, `${input.id} should be min ${min} charachter `);
    }else if(input.value.length>max){
        error(input, `${input.id} should be max ${max} charachter `);
    }else{
        valid(input);
    }
}
function checkPasswords(input1,input2) {
    if(input1.value !== input2.value) {
        error(input2, 'Passwords are not match');
    }
}
function checkPhone(input) {
    var exp = /^\d{10}$/;   
    if(!exp.test(input.value)) 
        error(input, 'Phone should be 10 charachter');
}
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    checkMail(email);
    checkLength(username,7,30);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
});