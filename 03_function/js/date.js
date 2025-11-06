// date 객체.(P.601)
const now = new Date(); // [배열], {객체}
console.log(now.getDate()); // 일
console.log(now.getMinutes()); // 분
console.log(now.getFullYear()); // 년도
console.log(now.getMonth()); // 1월 = 0, 2월 = 1
console.log(now.getDay()); // 요일. 일요일 = 0

now.setFullYear(2020); // 2020년으로 변환 (set은 변환)
now.setMonth(4); // 5월로 변환
now.setDate(5); // 5일로 변환, 0입력시 날짜가 전달 말일로 바뀜

console.log(now.getDay()); // 요일. 일요일 = 0

console.log(now); // 현재 기준 시각

/* 2025년 11월 달력
// 달력(말일(31,30,28/29), 1일의 요일정보)
// <table><thead>......</thead>
//                     <tbody>........</tbody></table>
let dayAry = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let calStr = "<table border='1'><thead><tr>";
// 요일출력.
for (let i = 0; i < dayAry.length; i++) {
  calStr += `<th>${dayAry[i]}</th>`;
}
// 날짜출력 tbody.
calStr += "</tr></thead><tbody><tr>";
// 공백부분.
for (let s = 0; s < 6; s++) { // 1일이 토요일부터시작해서 빈공간 창출
  calStr += `<td> </td>`;
}
// 날짜출력.
for (let d = 1; d <= 30; d++) {
  calStr += `<td>${d}</td>`;
  if ((d + 6) % 7 == 0) { // 빈공간 창출과 연관
    calStr += "</tr><tr>"; // 줄바꿈.
  }
}
calStr += "</tbody>";
calStr += "</table>";
document.writeln(calStr);
*/

// 달력(말일(31,30,28/29), 1일의 요일정보)
// 지정년도 지정월 달력 만들기
let year = 2020;
let month = 2;

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
