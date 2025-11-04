// 객체실습.
const stud1 = { sno: 100 }; // 객체 (동일 new Object();)
stud1.sname = "홍길동"; //속성(string) 추가
stud1["score"] = 90; //속성(number) 추가
stud1.study = function () {
  console.log(`${stud1.sname}이 공부합니다.`);
};
stud1.friendName = ["길길동", "최은식", "마동일"]; // 속성(배열)추가.
stud1.teacher = { tname: "허정무", age: 40 };
stud1.study(); // 메소드(함수) 호출.
stud1.addFriend = function (newFriend) {
  stud1.friendName[stud1.friendName.length] = newFriend;
};
stud1.addFriend("박충식");
console.log(stud1);
console.log(stud1.teacher.age); // console.log(stud1["teacher"]["age"]);

console.clear();

// 배열.(p.594 표)
const numbers = []; // new Array();
numbers.push(10); // (객체에는 없는 메소드) 요소의 추가.
numbers.push(20); // 요소의 추가.
numbers.unshift(30); // 제일 첫번째에 요소의 추가
// numbers.pop(); // 제일 마지막 요소 제거
// numbers.shift(); // 제일 앞 요소 제거
numbers.push(100);
numbers.push(150);
let sum = 0;
numbers.forEach(function (elem, idx, ary) {
  // elem: 배열요소, idx: 인덱스, ary: 배열
  console.log(elem);
  if (elem < 100) {
    sum += elem;
  }
});

console.log(`numbers의 합계: ${sum}`);
// console.log(numbers);
