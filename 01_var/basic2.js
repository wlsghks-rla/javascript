//basic2.js
let num1 = 10;//=은 대입의미, 숫자리터럴
let num2 = 20;

console.log(num1 + num2);
console.log('두 변수의 + 연산결과 : ' + num1 + num2);// 왼쪽부터 오른쪽 순서로 더함, 문자열로 변환해서 1020
console.log('두 변수의 + 연산결과 : ' + (num1 + num2));// 괄호를 사용하면 우선적으로 계산
let str1 = 'Hello,';//문자 리터럴(고정된 값)
let str2 = 'world';

console.log('두 변수의 + 연산결과 : ' + str1 + str2);

let temp1 = prompt('값을 입력하세요!!');//prompt는 사용자 입력 값을 반환시킴
let temp2 = prompt('값을 입력하세요!!');//prompt는 사용자 입력 값을 반환시킴
// console.log('입력값은 ' + temp1);
// console.log(temp1 + temp2);웹브라우저에서 사용자가 입력한 값은 문자로 인정해서 문자로 출력
// console.log(parseInt(temp1) + parseInt(temp2));//문자를 숫자로 변환(형변환)
// 'Hello' 는 형변환 불가 : NaN(Not A Number)출력

console.log(temp1 - temp2);//원래는 문자끼리 빼기는 안되지만 유도리 있게 숫자 출력, 곱하기도 동일

console.log(temp1 == temp2);//논리형
