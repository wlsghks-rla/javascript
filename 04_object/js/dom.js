// document object model = dom
//node - element, text, attribute  노드.
//p.636

let list = document.getElementById("list"); // list 객체
// console.dir(list);
// childnodes 중에서 text는 ul과 li 사이의 공백
// childern은 element요소만 보여줌.

console.dir(list.childNodes[1]);
list.childNodes[1].innerHTML = "사과"; // apple -> 사과, innerText
list.childNodes[1].onclick = function () {
  // 이벤트 핸들러.
  alert("클릭됨");
}; // 사과 누르면 경고창 뜸.

// 태그name.
let tags = document.getElementsByTagName("li");
console.log(tags); // collection: 여러개\
for (let i = 0; i < tags.length; i++) {
  console.log(tags[i].innerText);
}

// 클래스name.
let classList = document.getElementsByClassName("fruit");
console.log(classList);

// 선택자.
// let sel = document.querySelectorAll("ul>li"); // All이 없으면 첫번째 li만 가져옴.
// console.log(sel);

let sel = document.querySelector("ul.kind"); // All이 없으면 첫번째 li만 가져옴.
console.log(sel);
