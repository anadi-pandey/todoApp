var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}



// ---------Click ability to close button-----------

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {

    close[i].onclick = function () {

        var div = this.parentElement;
        div.style.display = "none";


    }
}

//-----------Adding checked symbol------------------
var complete = [];
var comp = 0;
var list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
        ev.target.classList.toggle('Completed');
    }
}, false);

var arr = [];
// CReate a new list item when clicking on the "Add" button
const in_the_local = sessionStorage.getItem('current_user');
const in_the_session = JSON.parse(in_the_local);
console.log(in_the_session);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);


    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";

        }
    }
    in_the_session.todo_items.push(inputValue);
    push_in_session(in_the_session);
    // push_In_Array(inputValue);
}


// -------------array pushed in the session Storage----------

function push_in_session(arr) {


    if (in_the_session.todo_items[0] == "No Items Present") {
        in_the_session.todo_items.splice(0, 1);
      

    } else {

        console.log(in_the_session);
        var move = JSON.stringify(in_the_session);
        sessionStorage.setItem('current_user', move);


    }

    
}

const user_Name_Object = localStorage.getItem('user');
const user_Nam = JSON.parse(user_Name_Object);

console.log(user_Nam);
const sessionString = sessionStorage.getItem('current_user');
const sessionObject = JSON.parse(sessionString);
console.log(sessionObject);



// LOading the previously stored tasks

loadMyPrevious();

function loadMyPrevious() {
    var z;
    var array_to_load = [];
    array_to_load = sessionObject.todo_items;
    if (array_to_load != undefined) {


        var len = (array_to_load.length);
        console.log(array_to_load);

        for (z = 0; z < len; z++) {
            var li = document.createElement("li");
            var input_value = array_to_load[z];

            var t = document.createTextNode(input_value);
            li.appendChild(t);

            document.getElementById("myUL").appendChild(li);



            console.log(input_value);
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);


            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";

                }
            }
        }
    }
}


var items = document.getElementsByTagName("LI");
var final_array = [];
for (var l = 0; l < items.length; l++) {
    var leng = items[l].outerText.length;
    var intial = (items[l].outerText).substring(0, leng - 2);

    final_array.push(intial);
    console.log(final_array);
}

for (h = 0; h < close.length; h++) {
    close[h].addEventListener('click', function () {
        var abc = this.parentElement.textContent;
        var req = abc.substring(0, abc.length - 1)
        console.log(req);
        removeElement(req);
    })
}

function removeElement(gotElement) {
    var test = in_the_session.todo_items;

    for (t = 0; t < test.length; t++) {
        if (test[t] == gotElement) {
            var index = t;
        }
        if (index > -1) {
            test.splice(index, 1);
        }
        console.log(index);
        console.log(test);
    }

    push_in_session(test);

}

var local = localStorage.getItem('user');
var local_array = JSON.parse(local);

push_in_local();


function push_in_local() {

    var indexofchange = 0;

    for (p = 0; p < local_array.length; p++) {
        if (local_array[p].eadd === in_the_session.eadd) {
            indexofchange = p;
            console.log(p);
        }
    }

    local_array[indexofchange] = in_the_session;
    var ready = JSON.stringify(local_array);
    localStorage.setItem('user', ready);
}


document.getElementById('sign_out').addEventListener('click', function () {
    push_in_local();
    sessionStorage.clear();
    window.location = "index.html";
})