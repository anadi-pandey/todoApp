var Sobject = sessionStorage.getItem("current_user");
var Sarray = JSON.parse(Sobject);
var FileHolder = document.getElementById("StartPushing");


// Upload the files in the todo_items

// Populate the FIleholder

















for (let i = 0; i < Sarray.todo_items.length; i++) {




    var divFile = document.createElement('div');

    // Index
    var spanIndex = document.createElement("span");
    spanIndex.className = "IndexSpan";
    spanIndex.innerHTML = i;
    divFile.appendChild(spanIndex);




    var buttonUpload = document.createElement('button');
    buttonUpload.type = 'button';
    buttonUpload.innerHTML = 'Upload/View Files';
    buttonUpload.className = 'btn-styled';



    // Title
    var spanFile = document.createElement("span");
    spanFile.className = "DesignSpan";
    spanFile.innerHTML = Sarray.todo_items[i].Title;



    // append
    divFile.appendChild(buttonUpload);
    divFile.appendChild(spanFile);

    pushInFile(divFile);




}

function pushInFile(divFile) {
    FileHolder.appendChild(divFile);
}



var DeemedArray = [];
var sesIt = sessionStorage.getItem("current_user");
var sesItArray = JSON.parse(sesIt);
var DeemedFile;
function changeFile() {


    var fileInput =
        document.getElementById('UploadFile');

    var filePath = fileInput.value;

    // Allowing file type 
    var allowedExtensions =
        /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    } else {

        let changePicInput = document.getElementById("UploadFile");
        let reader = new FileReader();
        reader.readAsDataURL(changePicInput.files[0]);
        reader.onloadend = function (event) {
            let Image = document.getElementById("UploadFile");
            Image.src = event.target.result;
            console.log(Image);
            imgUrl = Image.src;

            callRead(imgUrl);

            // const user_load = sessionStorage.getItem('current_user');
            // const ham = JSON.parse(user_load);
            // console.log(ham);



            // new_session = JSON.stringify(ham);
            // console.log(new_session);
            // sessionStorage.setItem('current_user', new_session);
        }

    }
}



var spanIndex;


var UploadBtnCollection = document.getElementsByClassName("btn-styled");
console.log(UploadBtnCollection);

for (let j = 0; j < UploadBtnCollection.length; j++) {

    UploadBtnCollection[j].onclick = function () {
        document.getElementById("UploadWindow").style.display = "block";
        document.getElementById("fileContainer").style.display = "none";
        var IndexRec = this.parentElement;
        spanIndex = IndexRec.querySelector("span").innerText;


        var filesAre = Sarray.todo_items[spanIndex].files;
        if (filesAre != undefined) {
          var lenOfFiles = Sarray.todo_items[spanIndex].files.length;
          console.log(lenOfFiles);
          var arrayOfFiles = Sarray.todo_items[spanIndex].files;
          console.log(arrayOfFiles);
          for(let t =0; t<lenOfFiles; t++)
          {
           var DivImage = document.createElement("DIV");
           var ImgTree = document.createElement("img");
           ImgTree.src = arrayOfFiles[t];
           
           DivImage.appendChild(ImgTree);
           document.getElementById("PreviousTaskHolder").appendChild(DivImage);

          }
        }


    }
}

function callRead(imgUrl) {

    var filesPresent = sesItArray.todo_items[spanIndex].files;
    console.log(filesPresent);
    if (filesPresent == undefined) {
        sesItArray.todo_items[spanIndex].files = [];
    }
    console.log(sesItArray.todo_items[spanIndex].files);
    console.log(sesItArray);


    document.getElementById("positionBtn1").addEventListener("click", function () {
        console.log(imgUrl);
        console.log(spanIndex);
        (sesItArray.todo_items[spanIndex].files).push(imgUrl);
        console.log(sesItArray.todo_items[spanIndex].files);

       var SesJ = JSON.stringify(sesItArray);
       sessionStorage.setItem("current_user",SesJ);



    })

}



