var Deadline_Array = [];

check_reminder();

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



document.getElementById('close_Btn').addEventListener('click', function () {
    var session_user = sessionStorage.getItem('current_user');
    var user_Object = JSON.parse(session_user);
    var First_Item = user_Object.remind_user[0];

    if (First_Item == "No reminders yet") {
        user_Object.remind_user = Deadline_Array;
    } else {
        user_Object.remind_user = (user_Object.remind_user).concat(Deadline_Array);
    }

    var ready_Object = JSON.stringify(user_Object);
    sessionStorage.setItem('current_user', ready_Object);
    window.location.reload();
})





function check_reminder() {

    var date_current = new Date();
    var yyyy = date_current.getFullYear();
    var mm = date_current.getMonth()+1;
    var dd = date_current.getDate();
    var today = yyyy+'-'+mm+'-'+dd;
    var req = JSON.parse(sessionStorage.getItem('current_user'));
    console.log(req);
    for (q = 0; q < req.remind_user.length; q++) {
        if (req.remind_user[q].date == today ) {
            alert("TASK "+req.remind_user[q].task + " HAS TODAY'S DEADLINE");

        }
    }
}