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

}

console.log(Deadline_Array);

