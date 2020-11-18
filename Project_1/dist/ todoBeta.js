var incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul of #incomplete-tasks

var completedTasksHolder = document.getElementById("completed-tasks");
var normalTaskHolder = document.getElementById("normalList");
var urgentTaskHolder = document.getElementById("urgentList");
var importantTaskHolder = document.getElementById("importantList");

populateTodo();
document.getElementById("Add").addEventListener('click', function () {

    var categorySelected = "";
    var selPublic = false;
    var selReminder = false;
    var category = document.getElementsByName("category");
    var isPend = true;
    var isComp = false;

    for (i = 0; i < category.length; i++) {
        if (category[i].checked) {
            categorySelected = category[i].value;
            console.log(categorySelected);
        }
    }

    var deadlineSelected = document.getElementById("deadline").value;
    console.log(deadlineSelected);



    var listItem = document.createElement("li");

    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    var taskString = document.getElementById("new-task").value;
    label.innerText = taskString;
    console.log(taskString);

    checkBox.type = "checkbox";
    editInput.type = "text";

    var spanOfCategory = document.createElement("span");
    var spanOfReminder = document.createElement("span");
    var spanOfPublic = document.createElement("span");

    var isPublic = document.getElementById("public");
    if (isPublic.checked) {
        selPublic = true;
        console.log("public");
    }

    var isReminder = document.getElementById("Reminder");
    if (isReminder.checked) {
        selReminder = true;
        console.log("Reminder Set");
    }

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    if (selPublic == true) {
        spanOfPublic.innerText = "Public";
        listItem.appendChild(spanOfPublic);
    }

    if (isReminder == true) {
        spanOfReminder = "Reminder Set" + deadlineSelected;
        listItem.appendChild(spanOfReminder);
    }
    spanOfCategory.innerText = categorySelected;
    listItem.appendChild(spanOfCategory);


    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    var SessionUser = sessionStorage.getItem('current_user');
    var ObjectOfUser = JSON.parse(SessionUser);



    var todoObject = {
        Title: taskString,
        Reminder: selReminder,
        Category: categorySelected,
        Deadline: deadlineSelected,
        Public: selPublic,
        isPending: isPend,
        isComplete: isComp
    }

    ObjectOfUser.todo_items.push(todoObject);
    console.log(ObjectOfUser.todo_items);

    var doneObj = JSON.stringify(ObjectOfUser);
    sessionStorage.setItem('current_user', doneObj);

    addTask(listItem);
})


function addTask(listItem) {

    incompleteTaskHolder.appendChild(listItem);
    window.location.reload();
    // push_in_session(listItem);
}


// function push_in_session(){


// }




function populateTodo() {
    var SessionUser = sessionStorage.getItem('current_user');

    var SessionObject = JSON.parse(SessionUser);
    console.log(SessionObject);
    var len = SessionObject.todo_items.length;

    for (j = 0; j < len; j++) {
        var categorySelected = SessionObject.todo_items[j].Category;
        var selPublic = SessionObject.todo_items[j].Public;
        var selReminder = SessionObject.todo_items[j].Reminder;
        var deadlineSelected = SessionObject.todo_items[j].Deadline;
        var isPending = SessionObject.todo_items[j].isPending;
        console.log(isPending);

        console.log(categorySelected.length);
        var listItem = document.createElement("li");

        var checkBox = document.createElement("input");
        var label = document.createElement("label");
        var editInput = document.createElement("input");
        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");

        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";

        checkBox.className = "checkIn";

        label.innerText = SessionObject.todo_items[j].Title;


        checkBox.type = "checkbox";
        editInput.type = "text";

        var spanOfCategory = document.createElement("span");
        var spanOfReminder = document.createElement("span");
        var spanOfPublic = document.createElement("span");

        listItem.appendChild(checkBox);
        listItem.appendChild(label);

        if (selPublic == true) {
            spanOfPublic.innerText = "Public";
            listItem.appendChild(spanOfPublic);
        }


        spanOfCategory.innerText = categorySelected;
        listItem.appendChild(spanOfCategory);

        if (selReminder == true) {
            spanOfReminder.innerText = "Reminder Set: " + deadlineSelected;
            listItem.appendChild(spanOfReminder);
        }

        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        if (isPending) {
            appendMyList();
        } else {
            console.log(listItem);
            completedTaskList(listItem);
        }
        //   appendMyComplete(listItem);
        // }

        function completedTaskList(listItem) {
            var completedTasksHolder = document.getElementById('completed-tasks');
            completedTasksHolder.appendChild(listItem);
        }


        function appendMyList() {
            incompleteTaskHolder.appendChild(listItem);
        }

        var newItem = listItem;

      

    }

}




// ---------Click ability to close button-----------

var dlete = document.getElementsByClassName("delete");
var i;
for (i = 0; i < dlete.length; i++) {


    console.log(i);

    dlete[i].onclick = function () {

        var div = this.parentElement;
        var valueOfParent = this.parentNode;
        deleteTask(valueOfParent);
        // div.style.display = "none";

        removeFromSession(valueOfParent);

    }
}






var deleteTask = function (valueOfParent) {
    console.log("Delete Task...");

    var listItem = valueOfParent;
    var ul = listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
    console.log(listItem);
}

function removeFromSession(valueOfParent) {
    var SessionRemoval = sessionStorage.getItem('current_user');
    var BeginRemoval = JSON.parse(SessionRemoval);
    var titleofTask = valueOfParent.querySelector("label").innerText;


    var test = BeginRemoval.todo_items;


    for (t = 0; t < test.length; t++) {
        if (titleofTask == test[t].Title) {
            var indexOfRemoval = t;
        }
    }

    if (indexOfRemoval > -1) {
        test.splice(indexOfRemoval, 1);
    }

    console.log(test);

    BeginRemoval.todo_items = test;
    sessionStorage.setItem('current_user', JSON.stringify(BeginRemoval));


}


var tick = incompleteTaskHolder.getElementsByClassName("checkIn");

var v;
for (v = 0; v < tick.length; v++) {


    console.log(v);

    tick[v].onclick = function () {

        var div = this.parentElement;
        var valueOfParent = this.parentNode;
        console.log(valueOfParent);
        // div.style.display = "none";
        completedTask(valueOfParent);


        var sessionRelay = sessionStorage.getItem('current_user');
        var relayDone = JSON.parse(sessionRelay);
        var titleofTask = valueOfParent.querySelector("label").innerText;
        var tasklist = relayDone.todo_items;
        var indexFound;
        for (w = 0; w < tasklist.length; w++) {
            if (titleofTask == tasklist[w].Title) {
                indexFound = w;
                changes();
            }
        }

        function changes() {
            tasklist[indexFound].isComplete = true;
            tasklist[indexFound].isPending = false;
            console.log(tasklist);
            alert("TO-DO Item Moved To Completed Task");
        }

        relayDone.todo_items = tasklist;
        console.log(relayDone);
        sessionStorage.setItem('current_user', (JSON.stringify(relayDone)));

        // sessionStorage.setItem('current_user', (JSON.stringify(relayDone)));




    }


    function completedTask(valueOfParent) {


        var item = valueOfParent;
        console.log(item);
        completedTasksHolder.appendChild(item);
    }
}



// ----------- Edit Task ----------------

var editStart = document.getElementsByClassName('edit');
console.log(editStart);
for (i = 0; i < editStart.length; i++) {
    editStart[i].onclick = function () {
        document.getElementById("openform").style.display = "block";
        document.getElementById("hideOn").style.display = "none";
        document.getElementById("completed-tasks").style.display = "none";
        document.getElementById("incomplete-tasks").style.display = "none";
        var ItemofClick = this.parentNode;
        console.log(ItemofClick);
        populatePopUp(ItemofClick);
    }
}



function populatePopUp(ItemofClick) {
    var titlePopUp = ItemofClick.querySelector("label").innerText;
    var BringInSession = sessionStorage.getItem('current_user');
    var BroughtSession = JSON.parse(BringInSession);
    var testingArray = BroughtSession.todo_items;
    console.log(titlePopUp);
    for (q = 0; q < testingArray.length; q++) {

        if (titlePopUp == testingArray[q].Title) {
            var indexGot = q;
        }
    }

    document.getElementById("pop-new-task").placeholder = testingArray[indexGot].Title;

    var checkPublic = document.getElementById("poppublic");
    var checkReminder = document.getElementById("popReminder");

    if (testingArray[indexGot].Public) {
        console.log("public checked");
        checkPublic.checked = true;
    }

    if (testingArray[indexGot].Reminder) {
        checkReminder.checked = true;
    }

    var catImp = document.getElementById("popimportant");
    var catUrg = document.getElementById("popurgent");
    var catpop = document.getElementById("popnormal");

    if (testingArray[indexGot].Category == "Important") {
        catImp.checked = true;
    }
    if (testingArray[indexGot].Category == "Urgent") {
        catUrg.checked = true;
    }
    if (testingArray[indexGot].Category == "Normal") {
        catpop.checked = true;
    }

}



document.getElementById("SaveMyChanges").addEventListener("click", function () {
    var BringInSession = sessionStorage.getItem('current_user');
    var BroughtSession = JSON.parse(BringInSession);
    var testingArray = BroughtSession.todo_items;
    var todoInput = document.getElementById("pop-new-task").value;
    var topic = document.getElementById("pop-new-task").placeholder;
    console.log(topic);
    var CheckPublic = document.getElementById("poppublic");
    var CheckReminder = document.getElementById("popReminder");

    for (t = 0; t < testingArray.length; t++) {
        if (topic == testingArray[t].Title) {
            var positionOfEdit = t;
        }
        console.log(positionOfEdit);
    }

    var pendValue = testingArray[positionOfEdit].isPending;
    var compValue = testingArray[positionOfEdit].isComplete;
    var deadlineEdited = document.getElementById("popdeadline").value;
    console.log(deadlineEdited);
    var categorySelected = "";

    var selPublic = false;
    var selReminder = false;


    var popcategory = document.getElementsByName("popcategory");
    if (popcategory[0].checked) {
        categorySelected = "Important";
    }

    if (popcategory[1].checked) {
        categorySelected = "Urgent";
    }

    if (popcategory[2].checked) {
        categorySelected = "Normal";
    }

    if (CheckPublic.checked) {
        selPublic = true;
    }
    if (CheckReminder.checked) {
        selReminder = true;
    }


    if (todoInput == "") {
        todoInput = testingArray[positionOfEdit].Title;
    }
    if (deadlineEdited == "") {
        deadlineEdited = testingArray[positionOfEdit].Deadline;
    }

    var editedObject = {
        Category: categorySelected,
        Deadline: deadlineEdited,
        Public: selPublic,
        Reminder: selReminder,
        Title: todoInput,
        isComplete: compValue,
        isPending: pendValue
    }



    console.log(editedObject);

    testingArray[positionOfEdit] = editedObject;
    console.log(testingArray);

    BroughtSession.todo_items[positionOfEdit] = editedObject;
    sessionStorage.setItem('current_user', (JSON.stringify(BroughtSession)));
    window.location.reload();
});



var editEnd = document.getElementById("closeBtn");
editEnd.addEventListener("click", function () {

    document.getElementById("openform").style.display = "none";
    document.getElementById("hideOn").style.display = "block";
    document.getElementById("completed-tasks").style.display = "block";
    document.getElementById("incomplete-tasks").style.display = "block";
    window.location.reload();
})

// Custom font size

var size22 = makeSizer(22);
var size28 = makeSizer(28);
var size32 = makeSizer(32);

document.getElementById('size-22').onclick = size22;
document.getElementById('size-28').onclick = size28;
document.getElementById('size-32').onclick = size32;

function makeSizer(size) {
    console.log(size);
    return function () {
        console.log(size + 'px');
        for (z = 0; z < (document.querySelectorAll("#incomplete-tasks label")).length; z++) {
            document.querySelectorAll("#incomplete-tasks label")[z].style.fontSize = size + 'px';
        }

    };
}


function push_in_local() {
    var getLocalStorage = localStorage.getItem('user');
    var getLocalArray = JSON.parse(getLocalStorage);
    var LEN = getLocalArray.length;

    var getSessionStorage = sessionStorage.getItem('current_user');
    var getSessionArray = JSON.parse(getSessionStorage);
    var EmailAddress = getSessionArray.eadd;



    for (f = 0; f < LEN; f++) {
        if (getLocalArray[f].eadd == EmailAddress) {
            var replaceUser = f;
        }
    }

    getLocalArray[replaceUser] = getSessionArray;
    localStorage.setItem('user', (JSON.stringify(getLocalArray)));

    console.log(getLocalArray);

}

function showMyCompleted() {

    var x = document.getElementById("completedTasks");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById("incompletedTask").classList.toggle("show");
}


populateCategory();

function showMyCategory(){
    var x = document.getElementById("CategoryDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById("incompletedTask").classList.toggle("show");
}

function populateCategory(){
    // var collection = document.querySelector("li");
   
    var spanCategoryItem = document.createElement("span");
    var SessionobjForCategory = sessionStorage.getItem('current_user');
    var SessionarrayForCategory = JSON.parse(SessionobjForCategory);
    var len = SessionarrayForCategory.todo_items.length;
  
    console.log(len);
    
     
    for(k=0;k<len;k++){
        console.log(k);
       console.log( SessionarrayForCategory.todo_items[k].Category);
        if(SessionarrayForCategory.todo_items[k].Category == " Urgent"){
            var categoryItem = document.createElement("li");
            categoryItem.innerText = SessionarrayForCategory.todo_items[k].Title;
            console.log(categoryItem);
        console.log("I am in the loop ");
        urgentTask(categoryItem);
        }

        if(SessionarrayForCategory.todo_items[k].Category  == "Important"){
            var categoryItem = document.createElement("li");
            categoryItem.innerText = SessionarrayForCategory.todo_items[k].Title;
            console.log(categoryItem);
            importantTask(categoryItem);
            console.log("I am in the loop ");
        }

        if(SessionarrayForCategory.todo_items[k].Category == "Normal"){
            var categoryItem = document.createElement("li");
            categoryItem.innerText = SessionarrayForCategory.todo_items[k].Title;
            console.log(categoryItem);
            normalTask(categoryItem);
        }
    }


}

function normalTask(NormalList) {

    var itemN = NormalList;
    console.log(itemN);
    normalTaskHolder.appendChild(itemN);
}

function urgentTask(UrgentList) {
    var itemU = UrgentList;
    console.log(itemU);
    urgentTaskHolder.appendChild(itemU);
}

function importantTask(ImportantList) {
    var itemI = ImportantList;
    console.log(itemI);
    importantTaskHolder.appendChild(itemI);
}

pushDeadline();

function pushDeadline(){
    var bringIt = sessionStorage.getItem('current_user');
    var bringArray = JSON.parse(bringIt);
    var limit = bringArray.todo_items.length;
    var today = new Date();
    
    

    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();

   
    

    today = yyyy+'-'+mm+'-'+dd;
    console.log(today);

    for(j=0;j<limit;j++){
       
        if(bringArray.todo_items[j].Deadline == today){
            alert(bringArray.todo_items[j].Title + " has today's deadline");
        }
       
    }

    console.log(limit);
}

document.getElementById('signoutBtn').addEventListener('click', function () {
    push_in_local();
    sessionStorage.clear();
    window.location = "index.html";
})

