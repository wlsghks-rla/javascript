// 조건문.
if (10 <= 10){
  //if 블럭에 구현
}

//<복습 문제> 회원(회원번호, 회원명, 회원점수(75)) = 객체 선언
// 1001, 김민준, 123/ 1002, 박설명, 95/ 1003, 이충희, 100
// members 배열에 저장.
//result에 회원점수의 합 대입 => console출력
// let members =[];
// let result = [];

// members[0] = {
//   mnum : 1001,
//   mname : '김민준',
//   mscore : 123
// };

// members[1] = {
//   mnm : 1002,
//   mname : '박설명',
//   mscore : 95
// };

// members[2] = {
//   mnm : 1003,
//   mname : '이충희',
//   mscore : 100
// };

// sum = members[0]['mscore'] + members[1]['mscore'] + members[2]['mscore'];

// aver = sum / 3;

// result = [sum, aver];

// console.log('회원점수의 합 : ' + result[0]);
// console.log('회원점수의 평균 : ' + result[1]);

let members = [
  {memberNO: 1001, memberName: '김민준', point: 123},
  {memberNO: 1002, memberName: '박설명', point: 95},
  {memberNO: 1003, memberName: '이충희', point: 100}
]

let result ={}; //객체로 선언.
result['total'] = members[0]['point'] + members[1]['point'] + members[2]['point'];
result['average'] = result['total'] / members.length;

console.log('회원점수의 합 : ' + result['total']);
console.log('회원점수의 평균 : ' + result['average']);


// if (members[0]['point'] > result['average']) {
//   console.log('평균보다 큽니다.');
// } else {
//   console.log('평균보다 작거나 같습니다.');
// }

// if (members[0]['point'] > result['average']) {
//   console.log('평균보다 큽니다.');
// } else if (members[0]['point'] < result['average']){
//   console.log('평균보다 작습니다..');
// }
//   else{
//   console.log('평균과 같습니다.');
//   }

if (members[0]['point'] > result['average']) {
  console.log(members[1]['memberName'] + '의 점수는 평균보다 큽니다.');
} else if (members[0]['point'] < result['average']){
  console.log(members[1]['memberName'] + '의 점수는 평균보다 작습니다.');
}
  else{
  console.log(members[1]['memberName'] + '의 점수는 평균과 같습니다.');
  }