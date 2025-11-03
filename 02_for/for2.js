// for2.js
// let numbers = [23, 17, 92, 33, 48, 52];
// numbers[0], numbers[1], ...... , numbers[numbers.length - 1]
// let sum = 0;
// for(let i = 0; i < numbers.length; i++ ){
//   console.log(numbers[i]); // i 값의 범위 : 0 ~ 5
//   sum += numbers[i];
// }
// console.log('합계점수 :' + sum);

// 홀수번째이면서 짝수인 값들의핪
// let numbers = [23, 17, 92, 33, 48, 52];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++ ){
//   console.log(i, numbers[i]); // i 값의 범위 : 0 ~ 5
//   // if(i % 2 == 0 && numbers[i] % 2 == 0){ // 홀수번째이면서 짝수인 값들의 합
//   if(i % 2 == 0 || numbers[i] % 2 == 1){ // 홀수번째 위치 또는 홀수인 값들의 합
//   sum += numbers[i];
//   }
// }
// console.log('합계점수 :' + sum);

let students = [ // 배열
  {sno: 100, sname: '김민주', score: 88, gender: 'Female'}, // 객체
  {sno: 200, sname: '박성하', score: 90, gender: 'Male'},
  {sno: 300, sname: '오혜경', score: 77, gender: 'Female'},
  {sno: 400, sname: '황성찬', score: 58, gender: 'Male'},
  {sno: 500, sname: '최유진', score: 67, gender: 'Female'}
];
// 문제1. 학생번호: 100, 이름: 김민주, 점수: 88 4명 순서대로 출력
let result = 0;
for(let i =0; i < students.length; i++){
  console.log('학생번호: ' + students[i]['sno'] + ',' + ' 이름: ' + students[i]['sname'] + ',' + ' 점수: ' + students[i]['score']);
}
console.clear();

// 문제2. 학생점수 합계한 결과, 평균.
let totalScore = 0;
let average = 0;
let count = 0; // 조건을 만족하는 사람.

for(let i = 0; i < students.length; i++){
  // if(students[i]['score'] >= 60){ //점수가 60점 이상인 학생들.
  if(students[i]['gender'] == 'Female'){ // 여학생들 평균
    totalScore += students[i].score; // students[i]['score'];
    count ++; 
  }
}
average = totalScore / count;

console.log('합계점수: ' + totalScore + ',' + '평균점수: ' + average);




