// todo.js

// 1. 함수(guguDan) 매개값으로 5 => 5단 출력, 6 => 6단 출력

function guguDan(num) {//function guguDan(dan); -> dan은 매개변수(값은 모르고, 함수 안에서 사용될 변수)
  if(num == undefined || num == null) {
    console.log('num값 지정'); // console.log('${dan}단`);
    return;
  }
  for(let i = 1; i <= 9; i++) {
    console.log(num + '*' + i + '=' + num * i); //console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

guguDan(5); // 함수호출.

// 2. 함수(summary) 매개값으로 7 => 1부터 7까지의 합 콘솔 출력.

let result = 0;
function summary(sum) {
  if(sum == undefined || sum == null) {
    console.log('sum값 지정');
    return;
  }
  for(let j = 1; j <= sum; j++){
    result += j;
  }
  console.log('1부터 ' + sum + '까지의 합 ' + result);
}
summary(10);

// 3. 함수(addNumber) 매개값 x, y => 4, 10 사이의 정수의 합을 출력.

function addNumber(x, y) {
  if(x == undefined || x == null) {
    console.log('x값 지정');
    return;
  };
  if(y == undefined || y == null) {
    console.log('y값 지정');
    return;
  };
  let total = 0;
  for(let z = x; z <= y; z++){
    total += z;
  }
  console.log(x + '와 ' + y + '사이의 합 ' + total);
}
addNumber(1,10);

// 4.
/*  

*****
****
***
**
*

출력시키기*/
let star = '';
function startriangle(n)=
for(let s = n; s >= 1; s--) {
  star = '';
  for(let j = 1; j <= s; j++){
    star += '*';
  }
  console.log(star);
}
/*



