// document
//   .querySelector("#addForm") //
//   .addEventListener("submit", (e) => {
//     // form의 submit 제어.
//     e.preventDefault(); // 페이지 이동 기본기능 차단. 페이지 머물러 있음 ->
//     let userVal1 = document.querySelector("#studNo").value;
//     let userVal2 = document.querySelector("#studName").value;
//     let userVal3 = document.querySelector("#score").value;

//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     let txt1 = document.createTextNode(userVal1);
//     td1.appendChild(txt1);
//     tr.appendChild(td1);
//     let txt2 = document.createTextNode(userVal2);
//     td2.appendChild(txt2);
//     tr.appendChild(td2);
//     let txt3 = document.createTextNode(userVal3);
//     td3.appendChild(txt3);
//     tr.appendChild(td3);
//     document.querySelector("#studentList").appendChild(tr);
//   });

const students = [
  { sno: 100, sname: "홍길동", score: 90 },
  { sno: 101, sname: "이순신", score: 95 },
  { sno: 102, sname: "유관순", score: 98 },
  { sno: 103, sname: "찰리킴", score: 98 },
  { sno: 104, sname: "뉴덜", score: 98 },
];

// 학번, 이름, 점수 => tr생성.
function makeRow(inputs) {
  // tr > td * 3 생성
  let tr = document.createElement("tr");
  inputs.forEach((elem) => {
    let td = document.createElement("td");
    let txt = document.createTextNode(elem);
    td.appendChild(txt);
    tr.appendChild(td);
  });
  // 삭제버튼.
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerText = "삭제";
  // 클릭 이벤트 등록.
  btn.addEventListener("click", (e) => {
    if (confirm("삭제하겠습니까?")) {
      // 확인 누르면 tre, 취소 누르면 false
      e.target.parentElement.parentElement.remove();
    }
  });
  td.appendChild(btn);
  tr.appendChild(td);
  // 반환.
  return tr;
}

// 페이지 로딩되는 시점에 처리.
students.forEach((elem) => {
  const data = [elem.sno, elem.sname, elem.score];
  let tr = makeRow(data);
  // tbody에 자식요소로 appendChild
  document.querySelector("#studentList").appendChild(tr);
});

document
  .querySelector("#addForm") //
  .addEventListener("submit", (e) => {
    // form의 submit 제어.
    e.preventDefault(); // 페이지 이동 기본기능 차단. 페이지 머물러 있음 ->
    const sno = document.querySelector("#studNo").value; // 입력값.
    const sname = document.querySelector("#studName").value; // 입력값.
    const score = document.querySelector("#score").value; // 입력값.
    if (!sno || !sname || !score) {
      alert("필수값 입력.");
      return;
    }
    // 입력값을 배열.
    const inputs = [sno, sname, score]; // 입력값 배열로 등록.

    //--------------------잘라내기-----------------------------//
    let tr = makeRow(inputs);
    //--------------------잘라내기-----------------------------//

    // tbody에 자식요소로 appendChild
    document.querySelector("#studentList").appendChild(tr);

    document.querySelector("#studNo").value = " ";
    document.querySelector("#studName").value = " ";
    document.querySelector("#score").value = " ";
  });
