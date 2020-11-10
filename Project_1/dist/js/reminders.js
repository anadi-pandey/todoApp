var Deadline_Array = [];

document.getElementById('Push').addEventListener('click', function () {
    var dated = document.getElementById('Date').value;
    var task_chosen = document.getElementById('appendIt').value;

    var deadline = {
        task: task_chosen,
        date: dated,
    };
    console.log(deadline);
    Push_deadline(deadline);
})

function Push_deadline(objnew) {
    Deadline_Array.push(objnew);
    alert("reminder succesfully added");
    // check_reminder();
}

console.log(Deadline_Array);

var date_current = new Date();
console.log(date_current.getDate());

var session_user = sessionStorage.getItem('current_user')


function check_reminder() {

    for (q = 0; q < Deadline_Array.length; q++) {
        if (Deadline_Array[q].date == date_current.getDate()) {
            alert(Deadline_Array[q].task);
        }
    }
}