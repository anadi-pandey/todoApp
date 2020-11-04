
var myObj, myJSON, text;

const formin = document.getElementById("formIN");

const inPassword = document.getElementById("passWORD");
var receievedPass = inPassword.value;
console.log(receievedPass);

const inEmail = document.getElementById('userEMAIL');
var receievedEmail = inEmail.value;
console.log(receievedEmail);



formin.addEventListener('submit', (e) => {
    userEntry(receievedEmail,receievedPass)
})



function userEntry(EMAIL,PASSWORD)
{
 
    for (i = 0; i < localStorage.length; i++) {
        let keyIn = localStorage.key(i);
       
        console.log(keyIn);
        console.log(receievedPass);
        console.log(receievedPass);


        if (keyIn == EMAIL) {
            text = localStorage.getItem(keyIn);
            console.log(text);
            myObj = JSON.parse(text);
            console.log(myObj);
            if (myObj.pass == PASSWORD) {
                console.log("LOgged In");
            }else{
                console.log("Invalid Password");
            }
        } else {
            console.log("Invalid Username");
        }
    }
}

