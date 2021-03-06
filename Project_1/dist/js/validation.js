const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const userName = document.getElementById('userName');
const email = document.getElementById('emailAddr');
const password = document.getElementById('conPassword');
const form = document.getElementById('form');
var checkExist = 0;
var count = 0;
var userArray = [];
const errorElement = document.getElementById('error');
var pwd = password.value;
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numberCheck = /[0-9]/g;
let regEmailCheck = /\S+@\S+\.\S+/;

// ============ Image Upload and reference
var imgUrl;
const file_ = document.querySelector('input[type="file"]').files[0];
const reader = new FileReader();



window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
        }
    });
});

var imgTrue = false;
function changeFile() {
    let changePicInput = document.getElementById("profileimg");
    let reader = new FileReader();
    reader.readAsDataURL(changePicInput.files[0]);

    var filePath = changePicInput.value;
    var allowedExtension = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtension.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
        
    } else {
        reader.onloadend = function (event) {
            let Image = document.getElementById("profileimg");
            Image.src = event.target.result;
            console.log(Image);
            imgUrl = Image.src;
            console.log(imgUrl);
            imgTrue = true;
        }
    }

}


function imageIsLoaded() {
    var imgELement = document.getElementById('myImg');
    imgELement.classList.add("myImgStyle");
}



// submit action firing validations 

form.addEventListener('submit', (e) => {
    let messages = []


    var local_values = localStorage.getItem('user');
    if (local_values != null) {
        var local_array = JSON.parse(local_values);

        for (let i = 0; i < local_array.length; i++) {
            let key = local_array[i].eadd;
            if (email.value.toLowerCase() == key) {
                checkExist++;
                messages.push('Already Registered')
            }
        }
    }

    if(imgUrl == undefined){
        messages.push('Wrong Image Input');
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
    if (regEmailCheck.test(email.value) && checkExist == 0 || localStorage == null) {

        console.log('Email validation done')
    }
    else {
        messages.push('Check email seems invalid')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ');
    } else {
        addUser();
    }


})



// Adding user information in the local storage

function addUser() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let gender = document.getElementById("gender").value;
    let emailAdd = document.getElementById("emailAddr").value;
    let imgRef = imgUrl;
    let password = document.getElementById("conPassword").value;

    let array = [];
    let arrayRemind = ["No reminders yet"];


    let addressUser = document.getElementById("addressAdded").value;
    console.log(addressUser);

    var userObj = {
        fName: firstName,
        lName: lastName,
        gen: gender,
        eadd: emailAdd.toLowerCase(),
        img: imgRef,
        pass: password,
        address: addressUser,
        todo_items: array,
        remind_user: arrayRemind

    };

    Push_details_local(userObj);

}

function Push_details_local(reObj) {
    let keyIn = localStorage.key(0);

    if (keyIn == null) {

        let copy = Object.assign({}, reObj);
        userArray.push(copy);
        window.localStorage.setItem('user', JSON.stringify(userArray));
    }
    else {
        let gotData = localStorage.getItem('user');
        let gotArray = JSON.parse(gotData);
        gotArray.push(reObj);
        window.localStorage.setItem('user', JSON.stringify(gotArray));
    }

}

