var sesOb = sessionStorage.getItem('current_user');
var sesA = JSON.parse(sesOb);

var lenTo = sesA.todo_items.length;
console.log(lenTo);

for( let k = 0; k < lenTo; k++){
    console.log(sesA.todo_items[k].Title);
    var delLi = document.createElement("li");
    var delBox = document.createElement("input");

    delBox.type = "checkbox";
    delLi.appendChild(delBox);

    var delLabel = document.createElement("label");
    delLabel.innerText = sesA.todo_items[k].Title;

    delBox.className = "checkDel";
    delLi.appendChild(delLabel);

    appendMyDel(delLi);
}

function appendMyDel(delLi){
    var delHolder = document.getElementById("deleteList");
    delHolder.appendChild(delLi);
}


document.getElementById("DELETE").addEventListener("click",function(){
   var col =  document.getElementsByClassName("checkDel");
    var lengthOf = col.length;
    console.log(lengthOf);
    console.log(col);
for(let i =0; i<lengthOf;i++)
{
    console.log(col[i].parentElement);
    if(col[i].checked == true){
       col[i].parentElement.style.display = "none";
       
    }
}
    
})