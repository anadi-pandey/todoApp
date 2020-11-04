const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const userName = document.getElementById('userName');
const email = document.getElementById('emailAddr');
const password = document.getElementById('conPassword');
const form = document.getElementById('form');
var checkExist = 0;
var userArray = [];
const errorElement = document.getElementById('error');
var pwd = password.value;
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numberCheck = /[0-9]/g;
let regEmailCheck = /^[a-z A-Z 0-9 _ -]+@[a-zA-Z]+\.com$/g;

var myPw = document.getElementById('pasSWORD');

form.addEventListener('submit', (e) => {
    let messages = []

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (email.value == key) {
            checkExist++;
        }
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than six characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value.match(lowerCaseLetters)) {
        console.log('lowercase validation done')
    } else {
        messages.push('Password must contain atleast one lower case letter')
    }

    if (password.value.match(upperCaseLetters)) {
        console.log('uppercase validation done')
    } else {
        messages.push('Password must contain atleast one upper case letter')
    }

    if (password.value.match(numberCheck)) {
        console.log('number validation done')
    } else {
        messages.push('Password must contain atleast one digit')
    }
    if (regEmailCheck.test(email.value) && checkExist == 0) {

        console.log('Email validation done')
    }
    else {
        messages.push('Check email seems invalid')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ');
    }

    form.onsubmit(addUser());
})


window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
            imgUrl = URL.createObjectURL(this.files[0]);

        }
    });
});


function imageIsLoaded() {
    var imgELement = document.getElementById('myImg');
    imgELement.classList.add("myImgStyle");
}

var imgUrl;


function addUser() {
    let firstName = document.getElementById("firstName").value;
    console.log(firstName);
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let emailAdd = document.getElementById("emailAddr").value;
    let imgRef = imgUrl;
    let password = document.getElementById("conPassword").value;

    var userObj = {
        fName: firstName,
        lName: lastName,
        gen: gender,
        eadd: emailAdd,
        img: imgRef,
        pass: password
    };

    userArray.push(userObj);
    localStorage.setItem(emailAdd, JSON.stringify(userArray));

}


