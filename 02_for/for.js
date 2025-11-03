//for.js(p.537)

let sum = 0; // 초기화.

// for (let i = 1; i <= 5; i++) { // 초기화, 조건, 증가 or 감소 : 변수 초기화는 처음에 1번만, 조건식 거짓이면 탈출
//   if (i % 2 == 0) { // 짝수
//   sum += i; // for 블럭.
//   }
// }
// console.log('합계: ' + sum);

//1 ~ 100 까지 홀수값의 합.
for (let i = 1; i <= 100; i++) { // 초기화, 조건, 증가 or 감소 : 변수 초기화는 처음에 1번만, 조건식 거짓이면 탈출
  if (i % 2 == 1) { // 홀수
  sum += i; // for 블럭.
  }
}
console.log('1 ~ 100 까지 홀수의 합계: ' + sum);

for (let i = 100; i >= 0; i--) { // 초기화, 조건, 증가 or 감소 : 변수 초기화는 처음에 1번만, 조건식 거짓이면 탈출
  if (i % 2 == 1) { // 홀수
  sum += i; // for 블럭.
  }
}
console.log('1 ~ 100 까지 홀수의 합계: ' + sum);

// 문제: Math.random() => 값을 생성 1 ~ 10 사이의 값.  
// 10번 실행해서 결과를 result 저장. 출력.

let result =0;

for(let i = 1; i <= 10; i++){
  result += Math.floor(Math.random() * 10) + 1
  console.log(result);
}
console.log('합: ' + result);

// // prompt (몇 단 출력?)
// let j = prompt('몇 단 출력?');

// document.writeln('<ul>');
// for(let i = 1; i < 10; i++){
//   document.writeln('<li>' + j + ' * ' + i + ' = ' + (j * i) + '</li>');
// }
// document.writeln('</ul>');

//아래와 동일

let j = prompt('몇 단 출력?');
let html = '';
html += '<ul>';
for(let i = 1; i < 10; i++){
  document.writeln('<li>' + j + ' * ' + i + ' = ' + (j * i) + '</li>');
}
html += '<ul>';
document.writeln(html);
