// 1104_todo.js
// 숙제. drawCalendar(yyyy, mmm) => drawCalendar(2020, 10)
// drawCalendar(2020, 10); drawCalendar(2020, 11); drawCalendar(2025, 5);

const drawCalendar = (year, month) => {
  const now = new Date();
  now.setFullYear(year); // 년도 변환
  now.setMonth(month - 1); // 월 변환
  now.setDate(1); // 날짜 변환

  let spaces = now.getDay(); // 1일이 무슨요일인지
  // 말일정보 계산.
  now.setMonth(month); //11 => 12월
  now.setDate(0); // 마지막날(지정월의 마지막날 계산)
  let lastDate = now.getDate(); // 지정달의 마지막일 지정

  // <table><thead>......</thead>
  //                     <tbody>........</tbody></table> -> table태그의 형식
  let dayAry = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let calStr = `<table border='1'><caption> ${year}년 ${month}월 </caption><thead><tr>`;
  // 요일출력.
  for (let i = 0; i < dayAry.length; i++) {
    calStr += `<th>${dayAry[i]}</th>`;
  }
  // 날짜출력 tbody.
  calStr += "</tr></thead><tbody><tr>";
  // 공백부분.
  for (let s = 0; s < spaces; s++) {
    calStr += `<td> </td>`;
  }
  // 날짜출력.
  for (let d = 1; d <= lastDate; d++) {
    calStr += `<td>${d}</td>`;
    if ((d + spaces) % 7 == 0) {
      // 빈공간 창출과 연관
      calStr += "</tr><tr>"; // 줄바꿈.
    }
  }
  calStr += "</tbody>";
  calStr += "</table>";
  document.writeln(calStr);
};

drawCalendar(2020, 10);
drawCalendar(2020, 11);
drawCalendar(2025, 5);
