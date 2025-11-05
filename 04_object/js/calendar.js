// dom 제어.
let yyyy = 2025;
let mm = 11;

document
  .querySelector('input[name = "yyyy"]') //
  .addEventListener("change", (e) => {
    // console.log(e.target.value);
    yyyy = e.target.value;
    //함수호출
    showCalendar(yyyy, mm);
  }); // 년도

document
  .querySelector('input[name = "mm"]') //
  .addEventListener("change", (e) => {
    // console.log(e.target.value);
    mm = e.target.value;
    showCalendar(yyyy, mm); //
  }); // 월

// thead부분.
function showHeader() {
  // thead
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let tr = document.createElement("tr");
  for (let day of days) {
    // days 안에 들어있는 요소 만큼만 반복 day 반복변수
    // console.log(day);
    let th = document.createElement("th");
    if (day == "Sun") {
      th.className = "sunday"; // <th class='Sunday'
    } else if (day == "Sat") {
      th.className = "saturday"; // <th class='Saturday'
    }
    th.innerText = day;
    tr.appendChild(th);
  }
  document.querySelector("table>thead").appendChild(tr); // thead>tr 생성.
}
showHeader(); // Header부분 생성

function showCalendar(year, month) {
  console.log(year, month);
  // 기존 값 삭제.
  document.querySelector("table>tbody").innerHTML = " ";
  const now = new Date();
  now.setFullYear(year); // 년도 변환
  now.setMonth(month - 1); // 월 변환
  now.setDate(1); // 날짜 변환
  let spaces = now.getDay(); // 1일이 무슨요일인지

  now.setFullYear(year);
  now.setMonth(month); //11 => 12월
  now.setDate(0); // 마지막날(지정월의 마지막날 계산)
  console.log(now);
  let lastDate = now.getDate();
  console.log(lastDate);

  // console.log(year, month);
  tr = document.createElement("tr"); // 새로운 tr 생성.
  for (let s = 0; s < spaces; s++) {
    let td = document.createElement("td");
    tr.appendChild(td);
  }
  //tbody
  for (let d = 1; d <= lastDate; d++) {
    let td = document.createElement("td");
    td.innerText = d;
    tr.appendChild(td);
    // 새로운 tr.
    if ((spaces + d) % 7 == 0) {
      td.className = "saturday"; // class 속성을 지정.
      document.querySelector("table>tbody").appendChild(tr);
      tr = document.createElement("tr");
    } else if ((spaces + d) % 7 == 1) {
      td.className = "sunday"; // class 속성을 지정.
    }
  }
  document.querySelector("table>tbody").appendChild(tr);
}
showCalendar(yyyy, mm);
