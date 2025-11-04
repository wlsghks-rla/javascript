// 1.concat
let ary1 = [1, 2, 3];
let ary2 = [4, 5, 6];
let result = ary1.concat(ary2);
console.log(ary1, ary2, result); // concat : 기존배열에 배열 요소 추가해서 새로운 배열.
result.push(11); // [1,2,3,4,5,6,11]
console.clear();

// 2.every : 배열요소의 모든값이 매개함수의 조건을 만족하면 true, 아니면 false 반환.
let isTrueOrNot = result.every(function (elem, idx, ary) {
  if (elem < 10) {
    return true;
  } else {
    return false;
  }
});
console.log(isTrueOrNot);

// 3.indexOf
let idx = result.indexOf(5);
console.log(`idx: ${idx}`); // 없으면 -1 반환

idx = ["홍길동", "김민규", "박창식"].indexOf("박창식");
if (idx > -1) {
  console.log("친구있음"); // alert("친구있음");
} else {
  console.log("친구없음"); // alert("친구없음");
}

// 배열[객체, 객체, 객체].
const members = [
  { memberId: "user01", memberName: "홍길동", phone: "010-1111-1111" },
];
// 추가.
members.push({
  memberId: "user02",
  memberName: "김우진",
  phone: "010-2222-2222",
});
members.push({
  memberId: "admin",
  memberName: "박명환",
  phone: "010-9999-9999",
});
console.log(typeof members);

// 찾을 회원이름 입력 => "연락처: 010-....-...."/ 없으면 "찾는 이름이 없습니다."
let searchName = prompt("이름을 입력하세요: ");
let searchPhone = "";
members.forEach(function (elem, idx, ary) {
  // 상태값만 지정.
  if (elem.memberName == searchName) {
    searchPhone = elem.phone; // alert(`연락처: ${elem.phone}`);
  }
});
if (searchPhone) {
  alert(`연락처: ${searchPhone}`);
} else {
  alert("찾는 이름이 없습니다.");
}

// false => falsy ('', null, 0, undefined)
// forEach 안에 구성하면 경고창 3번 나오는 걸 방지하기 위해 값만 지정하고 밖에서 새로운 조건문 작성.

// forEach반복.
members.forEach(function (elem, idx, ary) {
  console.log(`이름: ${elem.memberName}`);
});

// console.log(ary); // 함수안에서만 쓸 수 있는 매개변수여서 오류뜸.
