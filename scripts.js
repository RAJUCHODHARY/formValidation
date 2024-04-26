let names = document.querySelector('#name');
let nameError = document.querySelector('.nameError');
let phone = document.querySelector('#phone');
let phoneError = document.querySelector('.phoneError');
let email = document.querySelector('#email');
let emailError = document.querySelector('.emailError');

let gender = document.querySelectorAll('#gender input');
let GenderError = document.querySelector('.GenderError');
let selectedValue = document.getElementById("course");
let selectsError = document.querySelector('.selectsError');
let textarea = document.querySelector('#textarea');
let textareaError = document.querySelector('.textareaError');
let btn = document.querySelector('#btn');


btn.addEventListener('click', (e) => {
    e.preventDefault();


    if (!(names.value.match(nameExp))) {
       names.classList.add('has-error')
        nameError.innerHTML = "fill name properly"
    }
    else {
        nameError.innerHTML = ""
    }
    if (!(phone.value.match(phoneExp))) {
        phone.classList.add('has-error')
        phoneError.innerHTML = "fill phone number properly";
    } else {
        phoneError.innerHTML = "";
    }
    if (!(email.value.match(emailExp))) {
        email.classList.add('has-error')
        emailError.innerHTML = "fill email properly";
    }
    else {
        emailError.innerHTML = "";
    }
    if (gender[0].checked === false && gender[1].checked === false && gender[2].checked === false) {
        GenderError.innerHTML = "chack one option"
    } else {
        GenderError.innerHTML = ""
    }

    if (selectedValue.value === "") {
       selectsError.innerHTML="select a value"
    }else{
        selectsError.innerHTML=""
    }
    if (!(textarea.value.match(textareaexp))) {
        textareaError.innerHTML = "Type  youe hobbies";
    } else {
        textareaError.innerHTML = ""
    }
    
});






let nameExp = /^[a-zA-Z ]{3,15}$/;
let emailExp = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]{2,5}$/;
let phoneExp = /^[0-9]{10}$/;
let textareaexp = /^[a-zA-Z0-9]{2,100}$/