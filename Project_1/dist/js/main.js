const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});




// SIGN UP FORM 


// function check(){
//     var storedName = localStorage.getItem('name');
//     var storedPw = localStorage.getItem('pw');

//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('userPw');

//     if(userName.value != storedName || userName.Pw == storedPw){
//     alert('ERROR');
// }else {
//     alert('You are logged in');
// }

