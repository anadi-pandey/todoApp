
const recEmail = document.getElementById('userEMAIL');
const recPass = document.getElementById('passWORD');
var object_Address = 0;

const formin = document.getElementById("formIN");


formin.addEventListener('submit', (e) => {

    let getData = localStorage.getItem('user');
    console.log(getData);
    let getDataArray = JSON.parse(getData);
    console.log(getDataArray);
    for (i = 0; i < getDataArray.length; i++) {
        if (getDataArray[i].eadd == recEmail.value) {

            if (getDataArray[i].pass == recPass.value) {
                set_Session(i);
                alert("Logged in");
                // window.location(profile.html);
            } else {
                e.preventDefault();
                alert("Wrong Login Credentials");
            }

            function set_Session(dataToLoad) {
                dataIN = JSON.stringify(getDataArray[dataToLoad]);
                console.log(getDataArray[dataIN]);
                sessionStorage.setItem('current_user', dataIN);
            }
        }

    }

})







