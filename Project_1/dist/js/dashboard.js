
function openForm() {
    document.getElementById("myForm").style.display = "block";
    optionUpdate();
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



var myDetails = sessionStorage.getItem('current_user');
var objDetails = JSON.parse(myDetails);







