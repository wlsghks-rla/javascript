// event 등록.
document.querySelectorAll("#itemList>li").forEach((elem) => {
  console.log(elem);
  // elem.addEventListener("click", function () {
  elem.addEventListener("mouseover", function () {
    elem.style.color = "red";
  }); // elem.onclick과 동일.

  elem.addEventListener("mouseout", function () {
    elem.style.color = "black";
  });
});

// 추가. 순서(p.655)
// 1.추가버튼에 '클릭' 이벤트 등록.
// 2.input태그의 입력값.
// 3.<li>Node.js</li> 생성.(p.657)
// 4.ul태그의 하위요소로 등록.
document.querySelector("#addBtn").addEventListener("click", () => {
  // console.log(e.target);
  let userVal = document.querySelector("#addInput").value; // 사용자 입력값.
  // 입력값이 있으면 등록/ 없으면 종료.(마지막)
  if (!userVal) {
    alert("값을 입력하세요");
    return;
  }
  let li = document.createElement("li"); // <li></li>
  // li.addEventListener("click", () => {
  //   li.style.color = "red";
  // }); // <li/>에 클릭.(마지막)

  li.addEventListener("mouseover", () => (li.style.color = "red")); // mouseover 마우스 올렸을때 색상변화(마지막)
  li.addEventListener("mouseout", () => (li.style.color = "black")); // 마우스 땠을 때 색상변화(마지막)

  let txt = document.createTextNode(userVal); // li기준 text는 자식요소
  li.appendChild(txt); // <li>Node.js</li>
  console.log(li);
  document.querySelector("#itemList").appendChild(li);

  // 입력값 초기화.
  document.querySelector("#addInput").value = "";
});
