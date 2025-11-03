// basic4.js
// string, number, boolean => 원시유형(primitbe type) : 단순
// 객체타입.: 복합 정보 내제
let myInfo = {
  name: '홍길동',
  age: 20,
  phone: '010-1111-1111',
  address: '대구 중구 중앙대로 100',
  height: 175.2
}
let address = 'address'
console.log(myInfo['address']);//address는 문자열이여서 ''사용 위처럼 선언하면 없어도 됨
myInfo['address'] = '대구 중구 중앙대로 200';

console.log(myInfo);

//문제 : 학생(학생번호, 이름, 점수)
let student1 = {
  sno: 100,
  sname: '홍길동',
  score: 85
}

let students = [student1];
students[1] = {
  sno: 200,
  sname: '김민석',
  score: 92
}

let result; //홍길동, 김민석의 점수 합을 result에 대입하고 출력
result = students[0]['score'] + students[1]['score'];
console.log(result);


