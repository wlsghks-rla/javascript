//
let students = JSON.parse(localStorage.getItem("students"));
// 페이지 로딩되는 시점에 처리.
students.forEach((elem) => {
  const data = [elem.sno, elem.sname, elem.score, elem.phone, elem.email];
  console.log(data);
  let tr = makeRow(data);
  console.log(tr);
  document.querySelector("#studentList").appendChild(tr);
});

document
  .querySelector("#addForm") //
  .addEventListener("submit", (e) => {
    // form의 submit 제어.
    e.preventDefault(); // 기본기능  차단.
    // 입력값들.
    const sno = document.querySelector("#studNo").value; //입력값.
    const sname = document.querySelector("#studName").value; //입력값.
    const score = document.querySelector("#score").value; //입력값.
    const phone = document.querySelector("#phone").value; //입력값.
    const email = document.querySelector("#email").value; //입력값.
    if (!sno || !sname || !score) {
      alert("필수값 입력.");
      return;
    }
    console.log(sno);
    // 입력값을 배열.
    const inputs = [sno, sname, score, phone, email]; // 입력값 배열로 등록.
    console.log(inputs);
    // LOCALsTORAGE에 값을 저장
    students.push({
      sno: sno,
      sname: sname,
      score: score,
      phone: phone,
      email: email,
    });
    localStorage.setItem("students", JSON.stringify(students));
    // 화면에 출력
    let tr = makeRow(inputs); // 함수호출.
    // tbody에 자식요소로 appendChild.
    document.querySelector("#studentList").appendChild(tr);
    // 비우기.
    document.querySelector("#studNo").value = "";
    document.querySelector("#studName").value = "";
    document.querySelector("#score").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#email").value = "";
  });

// 학번,이름,점수 => tr생성.
function makeRow(inputs) {
  // tr > td * 3 생성.
  let button = document.createElement("button");
  let tr = document.createElement("tr");
  tr.addEventListener("click", (e) => {
    console.log(e.target.value);
    if ((e.target.value = undefined)) {
      localStorage.setItem("sno", inputs[0]);
      // location.href = "student.html";
    }
  });
  for (let elem of inputs) {
    // inputs.forEach((elem) => {
    let td = document.createElement("td"); // <td></td>
    let txt = document.createTextNode(elem); // text
    td.appendChild(txt); // <td>text</td>
    tr.appendChild(td); // <tr><td>text1</td><td>text2</td><td>text3</td></tr>
  }

  // 삭제버튼.
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerText = "삭제";
  // 클릭 이벤트 등록.i
  btn.addEventListener("click", (e) => {
    console.log(students);
    console.log(inputs);
    if (confirm("삭제하겠습니까?")) {
      const idx = students.findIndex((student) => student.sno == inputs[0]);
      students.slice(idx, 1);
      localStorage.setItem("sutdents", JSON.stringify(students));

      e.target.parentElement.parentElement.remove();
      console.log(students);
    }
  });
  td.appendChild(btn);
  tr.appendChild(td);
  // 반환.
  return tr;
}
