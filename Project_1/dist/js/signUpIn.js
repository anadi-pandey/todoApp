
const recEmail = document.getElementById('userEMAIL');
const recPass = document.getElementById('passWORD');
var object_Address = 0;

const formin = document.getElementById("formIN");


formin.addEventListener('submit', (e) => {
    var validity = 0;
    let getData = localStorage.getItem('user');
    console.log(getData);
    let getDataArray = JSON.parse(getData);
    console.log(getDataArray);
    for (i = 0; i < getDataArray.length; i++) {
        if (getDataArray[i].eadd == recEmail.value) {
        checkPassword(i);
        validity++;
        }
        
    }


    function checkPassword(k){
        if (getDataArray[k].pass == recPass.value) {
            set_Session(k);
           
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

    if(validity == 0){
        alert("User Not Registered");
        e.preventDefault();
    }
       
        
    })







