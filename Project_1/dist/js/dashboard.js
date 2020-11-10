window.onload(loadMyPrevious());

function loadMyPrevious(){
    var Nodelist = document.getElementsByTagName("LI");
    var j;
    for(j=0;j<Nodelist.length;j++){
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        Nodelist[j].appendChild(span);
    }

    loadAllValue();
}

const sessionString = sessionStorage.getItem('current_user');
const sessionObject = JSON.stringify(sessionString);
console.log(sessionObject);

function loadAllValue(){
    var li = document.createElement("li");
    // var input_value = 
}