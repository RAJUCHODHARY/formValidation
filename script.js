let name = document.querySelector('#name');
let email = document.querySelector('#email');
let number = document.querySelector('#number');
let btn = document.querySelector('#btn');
let nam = document.querySelector('#nam');
let ema = document.querySelector('#ema');
let num = document.querySelector('#num');




btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(name.value.match(nameExp))) {
        nam.innerHTML = "fill name properly"
    }
    else {
        nam.innerHTML = ""
    }
    if (!(email.value.match(emailExp))) {
        ema.innerHTML = "fill email properly"
    } else {
        ema.innerHTML = ""

    }
    if (!(number.value.match(phoneExp))) {
        num.innerHTML = "fill number properly"

    } else {
        num.innerHTML = ""
    }
    if ((name.value.match(nameExp)) && (email.value.match(emailExp)) && (number.value.match(phoneExp))) {
        let arr = [];
        arr.push(name.value);
        arr.push(email.value);
        arr.push(number.value);
        console.log(arr);
        name.value = "";
        email.value = "";
        number.value = "";

    }
})
let nameExp = /^[a-zA-Z ]{3,15}$/;
let emailExp = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]{2,5}$/;
let phoneExp = /^[0-9]{10}$/;