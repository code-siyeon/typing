"use script"

let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
let selectIndex = 0;


//커서 깜박임 효과
function blink() {
    target.classList.toggle("active")
}


function getSelectString() {
    if (selectIndex >= stringArr.length) {
        selectIndex = 0; // 배열의 마지막에 도달하면 다시 처음으로
    }
    const selectedString = stringArr[selectIndex];
    selectIndex++; // Index 증가
    return selectedString;
}



//타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(getSelectString().split(""));
}

//한글자씩 텍스트 출력 함수
function dynamic(indexArr) {
    if (indexArr.length > 0) {
        target.textContent += indexArr.shift();
        setTimeout(function () { dynamic(indexArr) }, 110);
    } else {
        setTimeout(resetTyping, 2000);
    }
}


dynamic(getSelectString().split(""));
setInterval(blink, 500);
