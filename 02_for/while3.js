// while3.js
// 배열의 크기 : 51 ~ 100 사이의 임의의 수
let randomAry = [];
/*for(let i = 0; i < 5; i++)
randomAry[i] = Math.ceil(math.random() * 50) + 50;*/

// 최대값을 구하는 반복문
// 각 배열의 요소의 갯수만큼 처리.
// 각 요소의 값과 max를 비교해서 배열요소의 값이 크면 max 변경, 아니면 변경안함
// 횟수가 정해져 있어 while 보다는 for문이 알맞다
let max = 0;
for(let i = 0; i < 5; i++) {
randomAry[i] = Math.ceil(Math.random() * 50) + 50;
console.log(randomAry[i]);
if(randomAry[i] > max){
  max = randomAry[i];
  }
}
console.log('가장 큰 값은: ' + max);

let min = 101;
for(let i = 0; i < 5; i++) {
randomAry[i] = Math.ceil(Math.random() * 50) + 50;
console.log(randomAry[i]);
if(min > randomAry[i]){
  min = randomAry[i];
  }
}
console.log('가장 작은 값은: ' + min);

console.clear();

// x와 y의 값을 서로 교체.
/* let x = 20;
let y = 30;
let temp = x;
x = y;
y = temp;

console.log(x, y); */

console.log(randomAry);

let temp = 0;
for(let j =0; j < randomAry.length - 1; j++){
  for(let i = 0; i < randomAry.length - 1; i++) {
    if(randomAry[i] > randomAry[i+1]){
      temp = randomAry[i+1];
      randomAry[i+1] = randomAry[i];
      randomAry[i] = temp;
    }
  }
}
console.log(randomAry)

