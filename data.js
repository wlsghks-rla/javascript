// const obj = {
//   sno: 100,
//   sname: "홍길동",
//   phone: "010-1234-1234",
// };
// // object -> text기반 -> 공유.
// const json = JSON.stringify(obj); //obj를 json 문자열로 변환
// console.log(json);
// const str = `{"sno":100,"sname":"홍길동","phone":"010-1234-1234"}`;
// console.log(JSON.parse(str)); // json 문자열을 객체 형태로 변환

const students = [
  { id: 100, name: "Hong" },
  { id: 101, name: "Hwang" },
  { id: 102, name: "Park" },
];

// students[1] = null;
// delete students[1];

// const st2 = [];
// for (let i = 0; i < 3; i++) {
//   if (students[i].id != 101) {
//     st2.push(students[i]);
//   }
// }

let idx = -1;
for (let i = 0; i < 3; i++) {
  if (students[i].name == "Park") idx = i;
}
students.splice(idx, 1); //삭제

console.log(students);
