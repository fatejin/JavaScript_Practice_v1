var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
    var item = document.querySelector("#item").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
}

function showList() {
    var list = "<ul>";  // 목록을 시작하는 <ul> 태그 저장
    for (var i = 0; i < itemList.length; i++) {  // 배열 요소마다 반복 
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";  // 요소와 삭제 버튼을 <li>~</li>로 묶음
    }
    list += "</ul>";   // 목록을 끝내는 </ul> 태그 저장

    document.querySelector("#itemList").innerHTML = list; //list 변숫값 표시

    var remove = document.querySelectorAll(".close"); //삭제 버튼을 변수로 저장. 배열의 형태가 됨
    for (var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}


function addList() {
    var item = document.querySelector('#item').value;
    if (item != null) {
        itemList.push(item);
        document.querySelector('#item').value = "";
        document.querySelector('#item').focus();
    }
    showList(); //목록을 표시하는 showList() 함수 실행
}

function removeList() {
    var id = this.getAttribute("id"); // this(클릭한 삭제 버튼)의 id 값 가져와 id 변수에 저장
    itemList.splice(id, 1);  // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
    showList();  // 변경된 itemList 배열을 다시 화면에 표시
}