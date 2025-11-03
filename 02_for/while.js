// while.js(p.542)
let i = 1;
while(i <= 10/*조건식*/){
  console.log('현재 i의 값: ' + i);/* while 블럭. */
  i++;
}

let randomNum = Math.ceil(Math.random() * 10);
// while(randomNum != 5){
//   console.log(randomNum);
//   randomNum = Math.ceil(Math.random() * 10);
// }
do {
  console.log(randomNum);
  randomNum = Math.ceil(Math.random() * 10);
} while(randomNum != 5)
  
console.log('end of program.');

console.clear();

// 학생점수. 입력 후 quit 값을 반복종료.
let input = prompt('학생 성적을 입력>> 종료는 quit입력하세요.');
while(input != 'quit'){
  console.log('입력할 값은 ' + input);
  input = prompt('학생 성적을 입력>> 종료는 quit입력하세요.');
}
console.log('end of program.');
