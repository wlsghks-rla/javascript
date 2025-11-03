//연산자
console.log(heading);
// console.log(result);//basic4 변수 선언했고 결과가 공유 됨

result = 30 % 20;
console.log(result);
result++;
console.log(result);
result--;
console.log(result);

// 할당연산자. p.524
let str = 'Hello';
result = str = 'World'; //진행방향은 오른쪽 -> 왼쪽
console.log(result, str);

console.clear();// 로그 삭제

result = result + ', Another';
result += ',World';// 누적연산.

console.log(result);

let num = 10;
num -= 10;
num *= 10;
num += 10;
num /= 10;

console.log(num);

// 비교연산자. => true/false 비교구문(if)
let team = 'ted'; 

console.log(10 == '10');// ==(true)  ===(false)

// 논리연산자. true && true => true, true || flase => true, false || false => false
console.log( 10 <= 10 && 10 < 10);
console.log( 10 <= 10 || !(10 < 10));
