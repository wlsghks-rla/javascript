// function.js(p.556)
let n1 = 10; // null값으로 대체.
let n2 = 20;
sum(n1, n2); // n1 n2는 매개값

sum(30); // 함수 호출.
// 함수(function) => 기능.(function)
function sum(x,y /*매개 변수*/) {
  if (x== undefined || x == null) {
  console.log('x값을 지정.');
  return; // 함수의 종료.
}
if (y == undefined || y == null) {
  console.log('y값을 지정.');
  return; // 함수의 종료.
}
let result = x + y;
console.log('두 수의 합은 ' + result);
}

