// todo.js

// 1. 함수(guguDan) 매개값으로 5 => 5단 출력, 6 => 6단 출력

function guguDan(num) {
  if(num == undefined || num == null) {
    console.log('num값 지정');
    return;
  }
  for(let i = 1; i <= 9; i++) {
    console.log(num + '*' + i + '=' + num * i);
  }
}

guguDan(5);

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

let total = 0;
function addNumber(x, y) {
  if(x == undefined || x == null) {
    console.log('x값 지정');
    return;
  };
  if(y == undefined || y == null) {
    console.log('y값 지정');
    return;
  };
  for(let z = x; z <= y; z++){
    total += z;
  }
  console.log(x + '와 ' + y + '사이의 합 ' + result);
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
let l = \n;
for(let s = 5; s > 0; s--) {
  for(let m = s; m <= 5; m++){
    console.log('*');
  }
  console.log(l);
}

