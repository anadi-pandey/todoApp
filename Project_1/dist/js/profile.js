const userNameObject = sessionStorage.getItem('current_user');
const userNam = JSON.parse(userNameObject);
document.getElementById('firstName').placeholder = userNam.fName;
document.getElementById('lastName').placeholder = userNam.lName;
document.getElementById('userEmail').placeholder = userNam.eadd;
document.getElementById('gender').placeholder = userNam.gen;
// document.getElementById


document.querySelector(".display_picture").src = userNam.img;
console.log(userNam);

// loading picture


// });
